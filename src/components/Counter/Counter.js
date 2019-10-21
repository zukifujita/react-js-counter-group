import React from 'react';
import './Counter.css';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { number: 0 };
    }

    onButtonPressAdd = () => {
        this.setState(state => ({
          number: state.number + 1
        }));

        this.props.onCounterValueChange(1);
    }
    
    onButtonPressSubtract = () => {
        this.setState(state => ({
          number: state.number - 1
        }));

        this.props.onCounterValueChange(-1);
    }

    render() {
        return (
            <div className="counter">
                <div className="regenerate">
                    <button onClick = { this.onButtonPressAdd }>
                        +
                    </button>
                    <p>
                        { this.state.number }
                    </p>
                    <button onClick = { this.onButtonPressSubtract }>
                        -
                    </button>
                </div>
            </div>
        )
    }
}

export default Counter;