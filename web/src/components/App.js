//@flow

/*
** Imports
*/

import React from 'react'
import styled from 'styled-components'

import ListAggregator from './ListAggregator'

/*
** Types
*/

export type AppPropTypes = {}

/*
** Styled
*/

const AppView = styled.div`
  width: 100vw;
  height: 100vh;

  background: red;
`

/*
** Component
*/

class App extends React.Component<AppPropTypes> {
  render() {
    return (
      <AppView>
        <ListAggregator />
      </AppView>
    )
  }
}

/*
** Container
*/

export default App
