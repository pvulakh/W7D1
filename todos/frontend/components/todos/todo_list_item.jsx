import React from 'react';

class ToDoListItem extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            todo: this.props.todo
        };
        this.deleteTodo = this.deleteTodo.bind(this);
        this.toggleDone = this.toggleDone.bind(this);
    }


    deleteTodo(){
        this.props.removeTodo(this.state.todo);
    }

    toggleDone(){
        if (this.state.todo.done) {
            this.setState({todo: {
                id: this.state.todo.id,
                body: this.state.todo.body,
                title: this.state.todo.title,
                done: false
            }});
        }
        else {
            this.setState({
                todo: {
                    id: this.state.todo.id,
                    body: this.state.todo.body,
                    title: this.state.todo.title,
                    done: true
                }
            });
        }
    }

    render() {
        return (
            <>
            <li>{this.state.todo.title} : {this.state.todo.body}</li>
            <button onClick={this.deleteTodo}>DELETE</button>
            <button onClick={this.toggleDone}>{this.state.todo.done ? "Not Done" : "Done"}</button>
            </>
        );
    }
}

export default ToDoListItem;