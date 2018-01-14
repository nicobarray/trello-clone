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

type ListAggregatorStateTypes = {
  lists: Array<{ name: string, id: string }>
}

/*
** Styled
*/

const ListAggregatorView = styled.div`
  height: calc(100% - 50px);
  width: 100%;

  padding: 4px;

  display: flex;
  flex-flow row nowrap;

  overflow-x: scroll;
`

/*
** Component
*/

class ListAggregator extends React.Component<
  ListAggregatorPropTypes,
  ListAggregatorStateTypes
> {
  state = {
    lists: []
  }

  componentDidMount() {
    fetch('http://localhost:8080/lists')
      .then(res => res.json())
      .then(lists =>
        this.setState(prevState => ({
          lists: lists.map(el => {
            const id = el._id
            delete el._id
            el.id = id
            return el
          })
        }))
      )
  }

  render() {
    return (
      <ListAggregatorView>
        {this.state.lists.map(list => (
          <List key={list.id} id={list.id} name={list.name} />
        ))}
      </ListAggregatorView>
    )
  }
}

/*
** Container
*/

export default ListAggregator
