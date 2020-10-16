import React from "react";
import Student from "./Student.jsx";
import Test from "./Test.jsx";

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      back: "",
    };
    this.changePage = this.changePage.bind(this);
  }
  changePage(e) {
    this.setState({ back: e.target.value });
  }
  render() {
    if (this.state.back === "") {
      return (
        <div className="bd">
          <center>
            <h1 className="title">Result</h1>
            <p>Name:</p>
            <p>Id card number:</p>
            <p>Result:</p>
            <button className="btn" value="test" onClick={this.changePage}>
              Try again
            </button>
            <button className="btn" value="student" onClick={this.changePage}>
              EXIT
            </button>
          </center>
        </div>
      );
    } else if (this.state.back === "test") {
      return <Test />;
    } else if (this.state.back === "student") {
      return <Student />;
    }
  }
}

export default Result;
