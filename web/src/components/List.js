//@flow

/*
** Imports
*/

import React from 'react'
import styled from 'styled-components'

import ListItem from './ListItem'
import ListItemAdd from './ListItemAdd'

/*
** Types
*/

export type ListPropTypes = {
  id: string,
  name: string
}

type ListStateTypes = {
  items: Array<{ _id: string, description: string }>
}

/*
** Styled
*/

const ListView = styled.ul`
  flex: 1 0 auto;

  width: 300px;

  margin: 4px 4px 0px 4px;

  border-radius: 5px;

  overflow-x: hidden;
  overflow-y: scroll;
`

const ListHeader = styled.li`
  width: 100%;
  height: 38px;

  background: #e2e4e6;

  /* Layout */
  padding: 8px 4px;

  /* Text */
  line-height: 30px;
  padding-left: 4px;
  padding-right: 4px;

  list-style: none;
`

/*
** Component
*/

class List extends React.Component<ListPropTypes, ListStateTypes> {
  state = {
    items: []
  }

  handleNewItem = (item: { _id: string, description: string }) => {
    this.setState(prevState => ({ items: [...prevState.items, item] }))
  }

  componentDidMount() {
    fetch('http://localhost:8080/items/' + this.props.id)
      .then(res => res.json())
      .then(payload => {
        this.setState(prevState => ({ items: payload.listItems }))
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <ListView>
        <ListHeader>{this.props.name}</ListHeader>
        {this.state.items.map(item => <ListItem key={item._id} item={item} />)}
        <ListItemAdd listId={this.props.id} onNewItem={this.handleNewItem} />
      </ListView>
    )
  }
}

/*
** Container
*/

export default List
