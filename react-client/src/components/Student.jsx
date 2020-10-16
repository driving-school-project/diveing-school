import React from 'react';
import Test from './Test.jsx'

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stat:'false',
     }
     this.changeToTest= this.changeToTest.bind(this)
  }

  changeToTest(e){
    this.setState({stat: e.target.value})
  }

  render() {
    if(this.state.stat === "false"){
    return (
       <div className="bd">
         <center>
    <h1 className="title">TEST N°1</h1>
        <input type="text" placeholder="Enter Your Full Name:" /><br></br><br></br>
        <input type="text" placeholder="Enter Your ID CARD Number:"/><br></br><br></br>
        <button className="btn" value="true" onClick={this.changeToTest}>START THE TEST</button>
        </center>
  </div>
     );
    }else if(this.state.stat === "true"){
      return <Test/>
    }
  }
}

export default Student;
