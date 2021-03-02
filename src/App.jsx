import React from 'react'
import { Provider } from 'react-redux'
import RootRouter from './router'
import store from './store'

import './App.scss'

function App() {
  return (
    <Provider store={store}>
      <RootRouter />
    </Provider>
  )
}

export default App
