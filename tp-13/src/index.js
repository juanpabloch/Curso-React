import React from 'react';
import ReactDOM from 'react-dom';

import Hero from './Hero';
import Programa from './Programa';

const App = ()=>{
    return(
        <div className='container'>
            <Hero />
            <Programa />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)