import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import TodoList from 'components/TodoList'
import { toggleTodo } from 'javascript/actions'
import { getVisibleTodos } from 'reducers'

function mapStateToProps(state, { params }) {
  return {
    todos: getVisibleTodos({
      state: state,
      filter: params.filter || 'all'
    })
  }
}

export default withRouter(connect(
  mapStateToProps,
  { onTodoClick: toggleTodo }
)(TodoList))
