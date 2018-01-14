//@flow

/*
** Imports
*/

import React from 'react'
import styled from 'styled-components'

/*
** Types
*/

export type ListAddPropTypes = {
  onNewList: ({ name: string, id: string }) => void
}

type ListAddStateTypes = {
  passive: boolean,
  name: string
}

/*
** Styled
*/

const ListAddWrapper = styled.div`
  width: 300px;
  height: 100px;

  padding: 4px;
`

const ListAddPassiveView = styled.ul`
  width: 100%;
  height: 32px;

  background: rgba(0, 0, 0, 0.4);

  border-radius: 5px;

  line-height: 32px;
  padding-left: 4px;

  color: grey;

  :hover {
    background: #e2e4e6;
  }

  overflow-x: hidden;
  overflow-y: scroll;
`

const ListAddActiveView = styled.form`
  width: 100%;
  height: 100px;

  background: #e2e4e6;
  border-radius: 5px;

  color: white;

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

  border: 0;

  /* Text */
  font-size: 1rem;
  color: white;
`

/*
** Component
*/

class ListAdd extends React.Component<ListAddPropTypes, ListAddStateTypes> {
  state = {
    passive: true,
    name: ''
  }

  inputNode = null
  rootNode = null

  handleClickOnPassiveView = (event: SyntheticEvent<>) => {
    this.setState(prevState => ({ passive: false }))
  }

  handleBlur = (event: SyntheticEvent<>) => {
    const clickIsInside = event.path.indexOf(this.rootNode) !== -1

    if (clickIsInside) {
      return
    }

    this.setState(prevState => ({ passive: true }))
  }

  handleSubmit = (event: SyntheticEvent<>) => {
    event.preventDefault()

    fetch('http://localhost:8080/lists', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name
      })
    })
      .then(res => res.json())
      .then(el => {
        const id = el._id
        delete el._id
        el.id = id
        return el
      })
      .then(this.props.onNewList)
      .catch(err => {
        console.log('Error, could not add the new list')
      })

    if (this.inputNode !== null) {
      this.inputNode.blur()
    }
    this.setState(prevState => ({ passive: true }))
  }

  handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value
    this.setState(prevState => ({ name: value }))
  }

  componentDidMount() {
    window.addEventListener('click', this.handleBlur)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleBlur)
  }

  componentDidUpdate(
    prevProps: ListAddPropTypes,
    prevState: ListAddStateTypes
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
        <ListAddPassiveView onClick={this.handleClickOnPassiveView}>
          New List...
        </ListAddPassiveView>
      )
    }

    return (
      <ListAddActiveView onSubmit={this.handleSubmit}>
        <ListAddItemInput
          innerRef={el => (this.inputNode = el)}
          placeholder="New list..."
          onChange={this.handleChange}
          value={this.state.name}
        />
        <ListAddItemSubmitButton type="submit">Add</ListAddItemSubmitButton>
      </ListAddActiveView>
    )
  }

  render() {
    return (
      <ListAddWrapper innerRef={el => (this.rootNode = el)}>
        {this.renderInput()}
      </ListAddWrapper>
    )
  }
}

/*
** Container
*/

export default ListAdd
