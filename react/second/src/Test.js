import React from "react";

class Test extends React.Component {
    constructor(props) {
        super(props);
        console.log("This constructor");
        this.state = {
            sl: 0
        }

    }

    buttonHandle = () => {
        // console.log("Method work");
        let val = this.state.sl;
        val++;
        this.setState({ sl: val });


    }


    componentDidMount() {
        setInterval(() => {
            document.querySelector("p").textContent = "";//домашнее задание
        }, 2000);
        console.log("CompDM");//КОмпонент был загружен

    }
    componentDidUpdate() {
        console.log("Comp Did Update");//компонент был обновлен

    }

    render() {
        console.log("Render 1");

        return (
            <>
                {
                    console.log("Return 1")

                }
                <div style={{ background: "yellow" }}>
                    {/* <button onClick={this.buttonHandle}>Push</button> */}
                    <p>Hello</p>
                </div>
                <div>
                    {/* { this.state.sl} */}
                </div>
            </>
        )
    }
}
export default Test;