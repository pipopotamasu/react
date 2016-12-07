import React from 'react';
import ReactDom from 'react-dom';
import Counter from './counter.js';

var App = {
    render:  () => {
        ReactDom.render(
            <Counter />,
            document.getElementById('root')
        );
    }
};

App.render();
