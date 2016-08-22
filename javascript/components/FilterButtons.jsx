import React from 'react'

import FilterButton from 'components/FilterButton'

export default function FilterButtons() {
  return (
    <p>
      Show:
      <FilterButton filter="all">
        All
      </FilterButton>
      <FilterButton filter="active">
        Active
      </FilterButton>
      <FilterButton filter="completed">
        Completed
      </FilterButton>
    </p>
  )
}
