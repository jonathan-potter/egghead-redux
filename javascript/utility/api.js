import { v4 } from 'node-uuid'

// This is a fake in memory database for fiddling with redux

const fakeDatabase = {
  todos: [
    {
      id: v4(),
      text: 'sleep',
      completed: true
    },
    {
      id: v4(),
      text: 'eat',
      completed: false
    },
    {
      id: v4(),
      text: 'shower',
      completed: true
    },
    {
      id: v4(),
      text: 'work',
      completed: false
    },
    {
      id: v4(),
      text: 'exercise',
      completed: true
    }
  ]
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function fetchTodos(filter) {
  return delay(500).then(() => {
    if (Math.random() > 0.5) {
      throw new Error('Boom!')
    }

    switch(filter) {
    case 'all':
      return fakeDatabase.todos
    case 'active':
      return fakeDatabase.todos.filter(todo => !todo.completed)
    case 'completed':
      return fakeDatabase.todos.filter(todo => todo.completed)
    default:
      throw new Error(`Unknown filter: ${filter}`)
    }
  })
}
