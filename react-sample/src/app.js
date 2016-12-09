import React from 'react';
import ReactDom from 'react-dom';
import Counter from './counter.js';
import TodoApp from './todo.js';

var App = {
    render:  () => {
        ReactDom.render(
            <div>
              <Counter />
              <TodoApp />
            </div>,
            document.getElementById('root')
        );
    }
};

App.render();
