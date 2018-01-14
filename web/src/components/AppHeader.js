//@flow

/*
** Imports
*/

import React from 'react'
import styled from 'styled-components'

/*
** Types
*/

export type AppHeaderPropTypes = {}

type AppHeaderStateTypes = {
  value: string
}

/*
** Styled
*/

const AppHeaderView = styled.div`
  height: 50px;

  background: pink;
`

const AppHeaderForm = styled.form`
  width: 100%;
  height: 100%;

  padding: 4px;

  display: flex;
`

const AppHeaderInput = styled.input`
  width: 200px;
  height: 32px;

  font-size: 1rem;

  padding-left: 4px;
`

const AppHeaderButton = styled.button`
  width: 32px;
  height: 32px;

  font-size: 1rem;
`

/*
** Component
*/

class AppHeader extends React.Component<
  AppHeaderPropTypes,
  AppHeaderStateTypes
> {
  state = {
    value: ''
  }

  handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value
    this.setState(prevState => ({ value }))
  }

  handleSubmit = (event: SyntheticEvent<>) => {
    event.preventDefault()

    if (this.state.value === '') {
      return
    }

    fetch('http://localhost:8080/lists', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: this.state.value })
    })
  }

  render() {
    return (
      <AppHeaderView>
        <AppHeaderForm onSubmit={this.handleSubmit}>
          <AppHeaderInput
            placeholder="Ajouter une liste"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <AppHeaderButton type="submit">✚</AppHeaderButton>
        </AppHeaderForm>
      </AppHeaderView>
    )
  }
}

/*
** Container
*/

export default AppHeader
