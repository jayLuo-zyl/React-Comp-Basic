import React, { Component } from 'react'; // import the React library
import './index.css';
import Title from './Title';

class Comp extends Component {
    constructor(props){
        super(props);
        this.state ={
        text :"a item...",
        sample : "sample data",
        items: []
        }
    };

    changeText = (event) => {
        this.setState({text:event.target.value})
    }

    clickBtn = () => {
        let itemList = [...this.state.items, this.state.text]
        this.setState({
            items:itemList,
            text:''
        });
    }

    deleteItem = (idx) => {
      console.log(`Delete ${idx}`)
      let newList = this.state.items.filter(item => item !== this.state.items[idx]);
       this.setState({
           items:newList
       })
    }

    pressEnter = (event) => {
        let code = event.keyCode || event.which;
        let isEnter = code === 13? true: null; 
        if(isEnter){this.clickBtn()}
    }

    render(){       
        return (
            <div >
                <p>Please enter some text</p>
                <input type="text" value={this.state.text} onChange={this.changeText} onKeyPress={this.pressEnter}></input>
                <button onClick={this.clickBtn} >Submit</button>
                <Title delItem={this.deleteItem} its={this.state.items} smp={this.state.sample}/>
            </div>
        )
    }

}

export default Comp;

