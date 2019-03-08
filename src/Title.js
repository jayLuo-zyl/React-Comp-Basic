import React, { Component } from 'react'; // import the React library
import './index.css';

const Title = (props) => (
    <ul>
        {
            props.its.map((el,idx)=>(
                    <li onClick={()=>props.delItem(idx)} key={`listItem${idx}`}> {el} </li>
                )
            )
        }
    </ul>

)
export default Title;