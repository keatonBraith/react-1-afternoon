import React, {Component} from 'react';

export default class Sum extends Component {

    constructor() {
        super();

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4> Sum </h4>
                <input className="inputLine"/>
                <input className="inputLine"/>
                <button className="confirmationButton"></button>
                <span className="resultsBox"> Sum: {this.state.sum} </span>
            </div>
        )
    }
}