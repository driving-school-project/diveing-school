import React from 'react';
import Result from './Result.jsx';

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            next: "false"
         }
         this.changeToNext= this.changeToNext.bind(this)
    }

    changeToNext() {
        this.setState({next: "true"})
    }


    render() {
        if(this.state.next === "false"){
        return (
            <div className='bd'>
                <center>
            <h4 className='title'>Q N°1</h4>
            <img src="img/img1.jpg" alt="image"/><br></br><br></br><br></br>
            <span>Q:....</span><br></br><br></br><br></br>
            <input type="checkbox"/>answer1<br></br><br></br><br></br>
            <input type="checkbox"/>answer2<br></br><br></br><br></br>
            <input type="checkbox"/>answer2<br></br><br></br><br></br>
            <button className="btn" value="true" onClick={this.changeToNext} >NEXT</button>
            </center>
            </div>
          )
        }else if(this.state.next === "true"){
            return <Result/>
        }
    }
}

export default Test;

