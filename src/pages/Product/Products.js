import React, { Component } from "react";
import { Stitch, RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import BSON from "bson";

import Products from "../../components/Products/Products";

class ProductsPage extends Component {
  state = { isLoading: true, products: [] };
  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    this.fetchData();
  }

  productDeleteHandler = async (productId) => {
    const mongodb = Stitch.defaultAppClient.getServiceClient(
      RemoteMongoClient.factory,
      "mongodb-atlas"
    );
    try {
      await mongodb
        .db("stitch-shop")
        .collection("products")
        .deleteOne({ _id: new BSON.ObjectId(productId) });
      this.fetchData();
    } catch (error) {
      this.props.onError("Deleting the product failed. Please try again later");
      console.log(error);
    }
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  fetchData = async () => {
    const mongodb = Stitch.defaultAppClient.getServiceClient(
      RemoteMongoClient.factory,
      "mongodb-atlas"
    );
    try {
      const products = await mongodb
        .db("stitch-shop")
        .collection("products")
        .find()
        .asArray();
      products.map((product) => {
        product._id = product._id.toString();
        product.price = product.price.toString();
        return product;
      });
      if (this._isMounted) this.setState({ isLoading: false, products });
    } catch (error) {
      if (this._isMounted) this.setState({ isLoading: false });
      this.props.onError(
        "Fetching the products failed. Please try again later"
      );
      console.log(error);
    }
  };

  render() {
    const { isLoading, products } = this.state;
    let content = <div className="loading-video"></div>;

    if (!isLoading && products.length > 0) {
      content = (
        <Products
          products={products}
          onDeleteProduct={this.productDeleteHandler}
        />
      );
    }
    if (!this.state.isLoading && this.state.products.length === 0) {
      content = <p>Found no products. Try again later.</p>;
    }
    return <main>{content}</main>;
  }
}

export default ProductsPage;
