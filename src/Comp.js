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

    deleteItem = (key) => {
      console.log("Delete")
      let newList = this.state.items.filter(item => item !== this.state.items[key]);
       this.setState({
           items:newList
       })
    }

    render(){       
        return (
            <div >
                <p>Please enter some text</p>
                <input type="text" value={this.state.text} onChange={this.changeText}></input>
                <button onClick={this.clickBtn} >Submit</button>
                <Title delItem={this.deleteItem} items={this.state.items}/>
            </div>
        )
    }

}

export default Comp;

