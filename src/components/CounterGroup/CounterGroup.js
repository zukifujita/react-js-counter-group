import React from 'react';
import './CounterGroup.css';
import Counter from '../Counter/Counter';

class CounterGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counterCount: this.props.defaultCounts,
            inputValue: this.props.defaultCounts,
            sum: 0
        }
    }

    counterUpdateCallback = changeNum => {
        this.setState({ sum: this.state.sum + changeNum })
    };

    handleInputChange = (event) => {
        this.setState({inputValue: event.target.value})
    };

    regenerateCounters = () => {
        this.setState({counterCount: this.state.inputValue})
    };

    renderCounters() {
        let counters = [];
        for (let count = 0; count < this.state.counterCount; count++) {
            counters.push(
                <Counter
                    key = { count }
                    onCounterValueChange = { this.counterUpdateCallback }
                />
            )
        }
        
        return counters;
    }

    render() {
        let counters = this.renderCounters()
        return (
            <div className="counter-group">
                <div className="counter-group-regenerate">
                    <input type = "text" value = { this.state.inputValue } onChange = { this.handleInputChange } />
                    <button className="counter-group-button" onClick = {this.regenerateCounters} >Regenerate counters</button>
                    <span>Sum: { this.state.sum }</span>
                </div>
                <div>
                    {counters}
                </div>
            </div>
        )
    }
}

export default CounterGroup;