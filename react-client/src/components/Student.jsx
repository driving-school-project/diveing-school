import React from "react";
import Test from "./Test.jsx";
import $ from "jquery";


class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      idcard: "",
      students: [],
      stat: "false",
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.username === "" || this.state.idcard === "") {
      alert("fill all feilds");
    } else {
      axios
        .post("/student", this.state)
        .then(function (response) {
          console.log(response);
          alert(response.data);
          $("#username").val("");
          $("#idcard").val("");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    this.setState({ stat: "true" });
  }

  render() {
    console.log(this.state.username, this.state.idcard)
    if(this.state.stat === "false"){
    return (
       <div className="bd">
         <center>
         <h2 className="title">Test n°1</h2>
          <form onSubmit={this.handleSubmit.bind(this)}>
             <br></br>
            <input
              type="text"
              id="username"
              placeholder="Username"
              onChange={this.handleChange.bind(this)}
            />
            <br></br>  <br></br>
            <input
              type="text"
              id="idcard"
              placeholder="Id card number"
              onChange={this.handleChange.bind(this)}
            /><br></br>  <br></br>
        <button className="btn" >START THE TEST</button>
        </form>
        </center>
  </div>
     );
    }else if(this.state.stat === "true"){
      return <Test user={this.state.username} id={this.state.idcard}/>
    }
  }
}

export default Student;
