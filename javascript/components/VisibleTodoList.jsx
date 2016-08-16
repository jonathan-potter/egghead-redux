import React, {Component} from 'react'

import TodoList from 'components/TodoList'

export default class VisibleTodoList extends Component {
  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() => {
      this.forceUpdate()
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const {store} = this.props
    const {todos, visibilityFilter} = store.getState()

    return (
      <TodoList
        todos={getVisibleTodos({todos: todos, filter: visibilityFilter})}
        onClickTodo={todo => {
          return store.dispatch({
            type: 'TOGGLE_TODO',
            id: todo.id
          })
        }} />
    )
  }
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
