import React from 'react'; // import the React library
import './index.css';

const Title = ({delItem, its, onAdd, smp}) => {
    // let {delItem, its, onClick, smp} = props  //less code

    return (
        <React.Fragment> 
            <ul>
                {
                    its.map((element,index)=>(
                            <li onClick={()=>delItem(index)} key={`listItem${index}`}> {element} </li>
                        )
                    )
                }
                
            </ul>
            <button className="Align" onClick={()=>onAdd()} >The Button</button>
            <div>
                {
                    smp.map((element, index) => (
                            <p key={`happy${index}`}>{`${element} ${index}`}</p>
                        )
                    )
                }
            </div>
        </React.Fragment>
    )
}
export default Title;