//@flow

/*
** Imports
*/

import React from 'react'
import styled from 'styled-components'

import ListItem from './ListItem'

/*
** Types
*/

export type ListPropTypes = {}

/*
** Styled
*/

const ListView = styled.ul`
  width: 200px;
  min-width: 200px;
  height: 100%;

  background: green;

  margin: 4px 4px 0px 4px;

  border-radius: 2px;

  overflow-x: hidden;
  overflow-y: scroll;
`

const ListHeader = styled.li`
  width: 100%;
  height: 38px;

  background: white;

  /* Layout */
  padding: 4px;

  /* Text */
  line-height: 30px;
  padding-left: 4px;

  list-style: none;
`

/*
** Component
*/

class List extends React.Component<ListPropTypes> {
  render() {
    return (
      <ListView>
        <ListHeader>List Name</ListHeader>
        <ListItem />
        <ListItem />
        <ListItem />
      </ListView>
    )
  }
}

/*
** Container
*/

export default List
