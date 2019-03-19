import React from 'react';
import ToDoListItem from './todo_list_item';
import ToDoForm from './todo_form';

class ToDoList extends React.Component {
    render() {
        return (
            <>
            <ul>
                {this.props.todos.map((todo) => (
                    <ToDoListItem todo={todo} key={todo.id} removeTodo={this.props.removeTodo}/>
                ))}
            </ul>
            <ToDoForm receiveTodo={this.props.receiveTodo}/>
            </>
        );
    }
}

export default ToDoList;