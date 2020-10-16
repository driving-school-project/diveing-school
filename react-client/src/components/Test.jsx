import React from 'react';
import Result from './Result.jsx';
import Data from '../database/SimpleData.js'


class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            next: 0,
            result : 0,
            data: Data,
            checkbox: false
         }
         this.changeToNext= this.changeToNext.bind(this)
    }


    changeToNext() {
        this.setState({next: this.state.next +1})
    }
    getChckeboxValue(e){
        console.log(e.target.checked)
        if(this.state.data[this.state.next].answerOk === e.target.value){
            console.log('ok')
            this.setState({
                result: this.state.result+1});
        }


    }


    render() {
        if(this.state.next <= this.state.data.length -1){
        return (
            <div className='bd'>
                <center>
            <h4 className='title'>Q N°1</h4>
            <img src={this.state.data[this.state.next].img} alt="image"/>
            <br></br><br></br>
            <span className='text'>Q: {this.state.data[this.state.next].question}</span><br></br><br></br>
            <input className='text' onClick={this.getChckeboxValue.bind(this)} type="checkbox" value={this.state.data[this.state.next].answer1}/><label className='text'>{this.state.data[this.state.next].answer1}</label><br></br><br></br>
            <input onClick={this.getChckeboxValue.bind(this)} type="checkbox" value={this.state.data[this.state.next].answer2}/><label className='text'>{this.state.data[this.state.next].answer2}</label><br></br><br></br>
            <input onClick={this.getChckeboxValue.bind(this)} type="checkbox" value={this.state.data[this.state.next].answer3}/><label className='text'>{this.state.data[this.state.next].answer3}</label><br></br><br></br>
            <button className="btn" value="true" onClick={this.changeToNext} >NEXT</button>
            </center>
            </div>
          )
        }else{
            return <Result result={this.state.result} user={this.props.user} id={this.props.id}/>
        }
    }
}

export default Test;

