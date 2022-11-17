import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
// import reducers from './reducers'
import combineReducers from './reducers/index.js'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

const rooty = () => {
  console.log(combineReducers)
  return (
    <Provider
      store={configureStore(
        combineReducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )}
    >
      <App />
    </Provider>
  )
}

ReactDOM.render(rooty(), document.getElementById('root'))
