import React from "react";

class Range extends React.Component {

    state = {
        val: "50",
        width: "100",
        height: "100",

    }

    range = (event) => {
        this.setState({ val: event.target.value,width: event.target.value,height: event.target.value });
    }

    render() {
        return (
            <>
            <p>Выберите размер квадрата:</p>
                <input type="range" onInput={this.range} min="0" max="200" step="10" />
                <p>{this.state.val} px*{this.state.val} px</p>
                <div style={{ width:`${this.state.width}px`, height: `${this.state.height}px`, background: "blue" }}></div>
            </>

        )
    }
}

export default Range;