import React, {Component} from 'react'

import store from 'javascript/store'

import TodoList from 'components/TodoList'

export default class VisibleTodoList extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate()
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const {todos, visibilityFilter} = store.getState()

    return (
      <TodoList
        todos={getVisibleTodos({todos: todos, filter: visibilityFilter})}
        onClickTodo={onClickTodo} />
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

function onClickTodo(todo) {
  return store.dispatch({
    type: 'TOGGLE_TODO',
    id: todo.id
  })
}
