import React from "react";
import './App.css';
import COLOR from "./config.js";
import TrafficLight from "./component/TrafficLight";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentColor: COLOR.RED
        };
    }

    componentDidMount() {
        setInterval(function() {
            this.setState({ currentColor: this.handleGetNextColor(this.state.currentColor) });
        }.bind(this), 1000);
    }

    handleGetNextColor(currentColor) {
        switch(currentColor) {
            case COLOR.RED: {
                return COLOR.YELLOW;
            }
            case COLOR.YELLOW: {
                return COLOR.GREEN;
            }
            default: {
                return COLOR.RED;
            }
        }
    }

    render() {
        return (
            <div className="container">
                <div className="traffic-light">
                    <TrafficLight currentColor={this.state.currentColor}/>
                </div>
                <button className="reset-traffic-light" type="button" onClick={()=> {
                    this.setState({
                        currentColor: COLOR.RED
                    });
                }}>Reset</button>
            </div>
        );
    }
}

export default App;
