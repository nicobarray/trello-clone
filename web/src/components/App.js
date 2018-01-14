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

  background: linear-gradient(
    to right,
    #267871,
    #136a8a
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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
