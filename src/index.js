import React from 'react'; // import the React library
import ReactDOM from 'react-dom'; // import the ReactDOM library
import './index.css';
import Title from './Title';

const Comp = () => {
    return (
        <div>
            <h2>Jay Luo</h2>
            <Title />
            <ol>
                <li>Item1</li>
                <li>Item2</li>
                <li>Item3</li>
            </ol>
        </div>
    )
}  

ReactDOM.render(<Comp />, document.getElementById('root'));