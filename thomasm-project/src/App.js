import React, { Component } from "react";
import { MDBContainer, MDBCard } from "mdbreact";

import Form from "./components/Form/Form.js";

class App extends Component {
  render() {
    return (
      <div>
        <MDBContainer>
          <MDBCard>
            <h2>lorem</h2>
            <p>lorem</p>
          </MDBCard>

          <Form />
        </MDBContainer>
      </div>
    );
  }
}

export default App;
