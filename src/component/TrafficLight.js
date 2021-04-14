import React from "react";
import COLOR from "../config";

function classNames(...classNames) {
    let result = "";

    for(const className of classNames) {
        if(typeof className == "object") {
            for(const key in className) {
                if(className[key] === true) {
                    result += key + " ";
                }
            }
        }
        else {
            result += className + " ";
        }
    }

    result = result.trim();
    return result;
}

class TrafficLight extends React.Component {
    render() {
        const { currentColor } = this.props;
        return (
            <div className="traffic-light">
                <div className={classNames(
                    "bulb", "red", {
                        active: currentColor === COLOR.RED
                    }
                )}></div>
                <div className={classNames(
                    "bulb", "yellow", {
                        active: currentColor === COLOR.YELLOW
                    }
                )}></div>
                <div className={classNames(
                    "bulb", "green", {
                        active: currentColor === COLOR.GREEN
                    }
                )}></div>
            </div>
        );
    }
}

export default TrafficLight;