import React from 'react';
import ReactDOM from 'react-dom';
import { receiveTodos, receiveTodo } from './actions/todo_actions';
import store from './store/store';
import Root from './components/root';
import allToDos from './reducers/selectors';

const cb = function() {
    const root = document.getElementById('content');
    ReactDOM.render(<Root store={ store }/>, root);

    window.store = store;
    window.allToDos = allToDos;
    window.receiveTodos = receiveTodos;
    window.receiveTodo = receiveTodo;
};

document.addEventListener("DOMContentLoaded", cb);

