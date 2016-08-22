import {connect} from 'react-redux'
import TodoList from 'components/TodoList'
import {toggleTodo} from 'javascript/actions'

function mapStateToProps(state, props) {
  return {
    todos: getVisibleTodos({
      todos: state.todos,
      filter: props.filter
    })
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}

function getVisibleTodos({todos, filter}) {
  switch(filter) {
    case 'all':
      return todos
    case 'active':
      return todos.filter(todo => !todo.completed)
    case 'completed':
      return todos.filter(todo => todo.completed)
    default:
      throw new Error(`Unknown filter: ${filter}`)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
