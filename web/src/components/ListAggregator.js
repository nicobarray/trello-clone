//@flow

/*
** Imports
*/

import React from 'react'
import styled from 'styled-components'

import List from './List'

/*
** Types
*/

export type ListAggregatorPropTypes = {}

/*
** Styled
*/

const ListAggregatorView = styled.div`
  height: 100%;

  display: flex;
  flex-flow row nowrap;

  overflow-x: scroll;
`

/*
** Component
*/

class ListAggregator extends React.Component<ListAggregatorPropTypes> {
  render() {
    return (
      <ListAggregatorView>
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
      </ListAggregatorView>
    )
  }
}

/*
** Container
*/

export default ListAggregator