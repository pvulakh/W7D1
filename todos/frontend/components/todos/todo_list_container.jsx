import { connect } from 'react-redux';
import ToDoList from './todo_list';
import { receiveTodo, removeTodo } from '../../actions/todo_actions';
import allToDos from '../../reducers/selectors';


const mapStateToProps = state => ({
    todos: allToDos(state)
});

const mapDispatchToProps = dispatch => ({
    receiveTodo: (todo) => dispatch(receiveTodo(todo)),
    removeTodo: (todo) => dispatch(removeTodo(todo))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoList);