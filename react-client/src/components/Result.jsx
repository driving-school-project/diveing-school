import React from 'react';

class Result  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <div className="bd">
                <h1>Result</h1>
                <p>Name: </p>
                <p>Id card number:</p>
                <p>Result:</p>
                <button>Try again</button>
                <button>EXIT</button>
            </div>
         );
    }
}

export default Result;