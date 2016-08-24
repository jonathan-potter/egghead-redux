import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import TodoList from 'components/TodoList'
import { toggleTodo } from 'javascript/actions'

function mapStateToProps(state, props) {
  return {
    todos: getVisibleTodos({
      todos: state.todos,
      filter: props.params.filter || 'all'
    })
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

export default withRouter(connect(
  mapStateToProps,
  { onTodoClick: toggleTodo }
)(TodoList))
