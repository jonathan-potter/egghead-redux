const STORAGE_KEY = 'EGGHEAD_STATE'

export function loadState() {
  try {
    const serializedState = localStorage.getItem(STORAGE_KEY)

    if (serializedState === null) {
      return undefined
    }

    return JSON.parse(serializedState)
  } catch (error) {
    return undefined
  }
}

export function saveState(state) {
  try {
    const serializedState = JSON.stringify(state)

    localStorage.setItem(STORAGE_KEY, serializedState)
  } catch (error) {
    /* eslint-disable */
    console.log('saveState error:', error)
    /* eslint-enable */
  }
}
