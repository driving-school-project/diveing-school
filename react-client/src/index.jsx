import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Admin from "./components/Admin.jsx";
import Student from "./components/Student.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "main",
    };
    this.changeView = this.changeView.bind(this);
  }

  changeView(e) {
    this.setState({ view: e.target.value });
  }

  render() {
    if (this.state.view === "main") {
      return (
        <div className="bg">
          <div className="bd">
            <center>
              <h1 className="title">Driving School</h1>
              <button className="btn" value="admin" onClick={this.changeView}>
                ADMIN
              </button>
              <button className="btn" value="student" onClick={this.changeView}>
                STUDENT
              </button>
            </center>
          </div>
        </div>
      );
    } else if (this.state.view === "admin") {
      return <Admin />;
    } else if (this.state.view === "student") {
      return <Student />;
    }
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
