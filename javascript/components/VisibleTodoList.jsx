import React, {Component, PropTypes} from 'react'

import {connect} from 'react-redux'

import TodoList from 'components/TodoList'

// const VisibleTodoList = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TodoList)

export default class VisibleTodoList extends Component {
  componentDidMount() {
    const {store} = this.context

    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate()
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const {store} = this.context
    const {todos, visibilityFilter} = store.getState()

    return (
      <TodoList
        todos={getVisibleTodos({todos: todos, filter: visibilityFilter})} />
    )
  }
}

VisibleTodoList.contextTypes = {
  store: PropTypes.object
}

function getVisibleTodos({todos, filter}) {
  switch(filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed)
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed)
  }
}

// const mapStateToProps = state => {
//   return {
//     todos: getVisibleTodos(
//       state.todos,
//       state.visibilityFilter
//     )
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     onTodoClick: id => {
//       dispatch({
//         type: 'TOGGLE_TODO',
//         id: id
//       })
//     }
//   }
// }
