import React, { Component } from 'react'; // import the React library
import './index.css';

const Title = (props) => (
    
    <ul>
        {
            props.items.map((item,index)=>(
            <li onClick={()=>props.delItem(index)} key={`listItem${index}`}> {item} </li>
            ))
        }
    </ul>

)
export default Title;