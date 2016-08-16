import React from 'react'

import FilterButton from 'components/FilterButton'

export default function FilterButtons({store}) {
  return (
    <p>
      Show:
      <FilterButton
        store={store}
        filter="SHOW_ALL">
        All
      </FilterButton>
      <FilterButton
        store={store}
        filter="SHOW_ACTIVE">
        Active
      </FilterButton>
      <FilterButton
        store={store}
        filter="SHOW_COMPLETED">
        Completed
      </FilterButton>
    </p>
  )
}
