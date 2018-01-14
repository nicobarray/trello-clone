//@flow

/*
** Imports
*/

import React from 'react'
import styled from 'styled-components'

/*
** Types
*/

export type ListItemPropTypes = {
  item: {
    _id: string,
    description: string
  }
}

/*
** Styled
*/

const ListItemView = styled.li`
  width: 100%;
  height: 38px;

  background: white;

  /* Layout */
  padding: 4px;

  list-style: none;
`

const ListItemContent = styled.div`
  height: 100%;

  background: grey;

  border-radius: 2px;

  /* Text */
  line-height: 30px;
  padding-left: 4px;

  :hover {
    border: 1px solid grey;
  }
`

/*
** Component
*/

class ListItem extends React.Component<ListItemPropTypes> {
  render() {
    return (
      <ListItemView>
        <ListItemContent>{this.props.item.description}</ListItemContent>
      </ListItemView>
    )
  }
}

/*
** Container
*/

export default ListItem
