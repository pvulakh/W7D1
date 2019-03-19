import React from 'react';
import util from '../../util/util';

class ToDoForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            title: "",
            body: "",
            key: util()
        };

        this.updateForm  = this.updateForm.bind(this);
        this.makeTodo = this.makeTodo.bind(this);
    }

    updateForm(event) {
        this.setState({[event.currentTarget.id]: event.currentTarget.value});
    }

    makeTodo() {
        const todo = {
            id: this.state.key,
            title: this.state.title,
            body: this.state.body,
            done: false
        };
        this.props.receiveTodo(todo);
        this.setState({title: "", body: "", key: util()});
    }

    render() {
        return (
            <form action="#" method="#">
            <label htmlFor="title">Title</label>
            <input onChange={this.updateForm} type="text" name="todo_title" id="title" value={this.state.title}/>
            <label htmlFor="body">Body</label>
            <input onChange={this.updateForm} type="text" name="todo_body" id="body" value={this.state.body}/>
            <input onClick={this.makeTodo} type="submit" value="Add To-Do" /> 
            </form>
        );
    }


}

export default ToDoForm;