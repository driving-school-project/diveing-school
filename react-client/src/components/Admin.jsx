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
    };
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

  render() {
    const { username, email, password } = this.state;
    return (
      <div>
        <center>
          <h2>Create Account</h2>
          <form onSubmit={this.handleSubmit.bind(this)}>
            Username: <br></br>
            <input
              type="text"
              id="username"
              onChange={this.handleChange.bind(this)}
            />
            <br></br> Email: <br></br>
            <input
              type="text"
              id="email"
              onChange={this.handleChange.bind(this)}
            />
            <br></br> Password: <br></br>
            <input
              type="password"
              id="password"
              onChange={this.handleChange.bind(this)}
            />
            <br></br> <br></br>
            <input type="submit" value="Create" />
          </form>
          <h2>Update Account</h2>
          <br></br> Username : <br></br>
          <input type="text" id="updateUser" />
          <br></br> New Password : <br></br>{" "}
          <input type="password" id="updateUserPassword" />
          <br></br>
          <br></br>
          <input type="submit" onClick={this.UpdateUser.bind(this)} /> <br></br>
          <h2>Remove Account</h2>
          <br></br> Username: <br></br>
          <input type="text" id="removeUser" />
          <br></br> Password : <br></br>{" "}
          <input type="password" id="removepassword" />
          <br></br>
          <br></br>
          <input type="submit" onClick={this.RemoveUser.bind(this)} /> <br></br>
        </center>
        <div>
          <button onClick={() => window.location.reload(false)}>
            Click to reload!
          </button>
        </div>
      </div>
    );
  }


}
export default Admin;
