//@flow

/*
** Imports
*/

import React from 'react'
import styled from 'styled-components'

/*
** Types
*/

export type ListItemAddPropTypes = {
  listId: string,
  onNewItem: ({ _id: string, description: string }) => void
}

type ListItemAddStateTypes = {
  passive: boolean,
  description: string
}

/*
** Styled
*/

const ListAddItemPassiveView = styled.div`
  width: 100%;
  height: 32px;

  background: #e2e4e6;

  border-radius: 0px 0px 5px 5px;

  :hover {
    background: rgb(232, 232, 232);
  }

  /* Layout */
  padding: 4px;

  /* Text */
  color: grey;
`

const ListAddItemActiveView = styled.form`
  width: 100%;
  height: 100px;

  display: flex;
  flex-flow: column nowrap;

  background: #e2e4e6;
  border-radius: 0px 0px 5px 5px;

  /* Layout */
  padding: 4px;
`

const ListAddItemInput = styled.textarea`
  height: calc(100% - 33px);

  /* Layout */
  padding: 4px;
  resize: none;

  /* Text */
  font-size: 1rem;
`

const ListAddItemSubmitButton = styled.button`
  height: calc(100% - 66px);
  width: 50px;

  background-color: #5aac44;

  margin-top: 4px;

  border: 0;

  /* Text */
  font-size: 1rem;
  color: white;
`

/*
** Component
*/

class ListItemAdd extends React.Component<
  ListItemAddPropTypes,
  ListItemAddStateTypes
> {
  state = {
    passive: true,
    description: ''
  }

  inputNode = null
  rootNode = null

  handleClickOnPassiveView = () => {
    this.setState(prevState => ({ passive: false }))
  }

  handleBlur = (event: any) => {
    const clickIsInside = event.path.indexOf(this.rootNode) !== -1

    if (clickIsInside) {
      return
    }

    this.setState(prevState => ({ passive: true }))
  }

  handleSubmit = (event: SyntheticEvent<>) => {
    event.preventDefault()

    fetch('http://localhost:8080/items', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        listId: this.props.listId,
        description: this.state.description
      })
    })
      .then(res => res.json())
      .then(this.props.onNewItem)
      .catch(err => {
        console.log('Error, could not add the new item')
      })

    if (this.inputNode !== null) {
      this.inputNode.blur()
    }
    this.setState(prevState => ({ passive: true }))
  }

  handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value
    this.setState(prevState => ({ description: value }))
  }

  componentDidMount() {
    window.addEventListener('click', this.handleBlur)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleBlur)
  }

  componentDidUpdate(
    prevProps: ListItemAddPropTypes,
    prevState: ListItemAddStateTypes
  ) {
    if (prevState.passive && !this.state.passive) {
      if (this.inputNode !== null) {
        this.inputNode.focus()
      }
    }
  }

  renderInput = () => {
    if (this.state.passive) {
      return (
        <ListAddItemPassiveView onClick={this.handleClickOnPassiveView}>
          Add item...
        </ListAddItemPassiveView>
      )
    }

    return (
      <ListAddItemActiveView onSubmit={this.handleSubmit}>
        <ListAddItemInput
          innerRef={el => (this.inputNode = el)}
          placeholder="Add item..."
          onChange={this.handleChange}
          value={this.state.description}
        />
        <ListAddItemSubmitButton type="submit">Add</ListAddItemSubmitButton>
      </ListAddItemActiveView>
    )
  }

  render() {
    return <div ref={el => (this.rootNode = el)}>{this.renderInput()}</div>
  }
}

export default ListItemAdd
