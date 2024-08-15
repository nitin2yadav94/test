import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';


// JSX - "JavaScript XML", html like structure in JavaScript
// Babel - "JavaScript Compiler"
// typeScript - "TypeScript"
// Parcel - "Bundler" , babel 
const heading1 = <h1>hello</h1>

//Anonymous function,
//arrow vs normal function
//const & let & var

//component - simple Javascript fucntion returning any JSX

//Class Component - stateFull compoent
//Functional component - stateLess compoennt
//react >18 - React Hooks then fucntion component can have state

const App = ()=>{
    const s1 = 0;
    return (<div>
        <h1>hello</h1>
    </div>)
}

const App1 = ()=> (
<div><h1>hello</h1> 
<h2>hello</h2>
<h3>hello</h3>
</div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(App1);