import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <main className="flex">
        <h3>
          Stitch Shop{" "}
          <span
            role="img"
            aria-label="Stitch Shop"
            style={{ fontSize: "2rem" }}
          >
            🏪
          </span>
        </h3>
        <section className="flex" style={{ width: "75%" }}>
          <span style={{ color: "crimson" }}>About:</span> It's built for the
          sole purpose of getting to know the Stitch serverless platform. The UI
          was built with React. It's an mini online shop of sorts. After you
          register as a user the admin needs to approve you before you can log
          in. In the meantime, use the one that's already approved to test the
          app.
        </section>

        <section className="flex">
          <h4 style={{ color: "firebrick", marginBottom: ".25rem" }}>
            N O T E:
          </h4>
          <h5>To test the app use the following details:</h5>
          <small>Email: test@test.com</small>
          <small>Password: 123456</small>
        </section>
      </main>
    );
  }
}

export default About;
