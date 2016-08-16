import React from 'react'

import FilterButton from 'components/FilterButton'

export default function FilterButtons() {
  return (
    <p>
      Show:
      <FilterButton
        filter="SHOW_ALL">
        All
      </FilterButton>
      <FilterButton
        filter="SHOW_ACTIVE">
        Active
      </FilterButton>
      <FilterButton
        filter="SHOW_COMPLETED">
        Completed
      </FilterButton>
    </p>
  )
}
