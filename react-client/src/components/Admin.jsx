import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      users: [],
      case: "false"
    };
    this.changeCase= this.changeCase.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  refreshPage() {
    window.location.reload(false);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (
      this.state.username === "" ||
      this.state.email === "" ||
      this.state.password === ""
    ) {
      alert("fill all feilds");
    } else {
      axios
        .post("/user", this.state)
        .then(function (response) {
          console.log(response);
          alert(response.data);
          $("#username").val("");
          $("#email").val("");
          $("#password").val("");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  UpdateUser(event) {
    event.preventDefault();
    var Username = $("#updateUser").val();
    var Password = $("#updateUserPassword").val();
    var format = {
      username: Username,
      password: Password,
    };
    axios
      .post("/updateOne", format)
      .then(function (response) {
        console.log(response);
        alert(`${Username} was Updated`);
      })
      .catch(function (error) {
        console.log(error);
        alert(error);
      });
    $("#updateUser").val("");
    $("#updateUserPassword").val("");
  }

  RemoveUser(event) {
    event.preventDefault();
    var Username = $("#removeUser").val();
    var Password = $("#removepassword").val();
    var format = {
      username: Username,
      password: Password,
    };
    axios
      .post("/removeOne", format)
      .then(function (response) {
        console.log(response);
        alert(`${Username} was Removed`);
      })
      .catch(function (error) {
        console.log(error);
        alert(error);
      });
    $("#removeUser").val("");
    $("#removepassword").val("");
  }

  changeCase(){

    this.setState({case:"true"})
  }

  render() {
    const { username, email, password } = this.state;
    if(this.state.case === "false"){
    return (
      <div className="bd">
        <center>
          <h2 className="title">Create Account</h2>
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
              id="email"
              placeholder="Email"
              onChange={this.handleChange.bind(this)}
            />
            <br></br>  <br></br>
            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={this.handleChange.bind(this)}
            />
            <br></br> <br></br>
            <input  type="submit" value="Create" onClick={this.changeCase}/>
          </form>
        </center>
      </div>
      )
      }else if(this.state.case === "true"){
        return (
        <div className="bd">
          <center>
          <h2 className="title">Update Account</h2>
          <br></br>  <br></br>
          <input type="text" id="updateUser" placeholder="Username"/>
          <br></br>  <br></br>{" "}
          <input type="password" id="updateUserPassword" placeholder="New Password"/>
          <br></br>
          <br></br>
          <input type="submit" onClick={this.UpdateUser.bind(this)} /> <br></br>
          <h2 className="title">Remove Account</h2>
          <br></br>  <br></br>
          <input type="text" id="removeUser" placeholder="Username"/>
          <br></br>  <br></br>{" "}
          <input type="password" id="removepassword" placeholder="Password"/>
          <br></br>
          <br></br>
          <input type="submit" onClick={this.RemoveUser.bind(this)} /> <br></br>
        </center>
        <div>
          <button className="btn" onClick={() => window.location.reload(false)} >
            Click to reload!
          </button>
        </div>
      </div>
        );
      }
    }
}
export default Admin;
