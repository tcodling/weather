import React from "react";

class Day extends React.Component {
    render() {
        return (
            <div className="day">
                <h2>{this.props.day}</h2>
                <h2>{this.props.conditions}</h2>
                <h2>{this.props.temp}°</h2>
                <img src={`images/${this.props.logo}.svg`} />
            </div>
        )
    }
}

export default Day