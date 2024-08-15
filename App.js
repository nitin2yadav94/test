import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('div', null, [
    React.createElement('div', {id: "child1"}, [
        React.createElement('h1', null, 'Child 1 heading 1'),
        React.createElement('h2', null, 'Child 1 heading 2')
    ]),
    React.createElement('div', {id: "child2"}, [
        React.createElement('h1', null, 'Child 2 heading 1'),
        React.createElement('h2', null, 'Child 2 heading 2')
    ])
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);