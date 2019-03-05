import React, { Component } from 'react';
import './index.css';

class Title extends Component {
    constructor(props){
        super(props);
        this.state ={
        text :"enter a item...",
        sample : "sample data"
        }
    };

    changeText = () => {
        let strText = document.getElementById("box1").value;
        this.setState({text:`${strText}`});
    }
    render(){       
        return (
            <div >
                <p>Please enter some text</p>
                <input id="box1" type="text" defaultValue={this.state.text} onChange={this.changeText}></input>
                <button>Submit</button>
            </div>
        )
    }

}
export default Title;

