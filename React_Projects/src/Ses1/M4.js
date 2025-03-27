//M4.js
import react from "react";
// import rd from "react-dom";

// class button extends react.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             text: "",
//         }

//     }
//     render() {
//         <div>
//             <button >{this.setState((t) => ({ text: props.text }))}</button>
//         </div>
//     }

// }
class tencounter extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };

    }
    tenincr() {
        this.setState((prev) => ({ count: prev.count + 10 }))
    }
    ten_decr() {
        this.setState((prev) => ({ count: prev.count - 10 }))
    }
    reset(){
        this.setState((prev) => ({ count: 0}))
    }



    render() {
        return (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div>
                    <h1> {this.state.count}</h1>
                    <button onClick={() => this.tenincr()}>+10</button>
                    <button onClick={() => this.ten_decr()}>-10</button>
                    <button onClick={()=> this.reset()}>reset</button>
                </div >
            </div >
        );

    }
}
export default tencounter;