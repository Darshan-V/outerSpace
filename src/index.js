import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import reducer from './reducers'
import combineReducers from './reducers/index.js'
import { legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'

const rooty = () => {
  console.log(combineReducers)
  return (
    <Provider
      store={createStore(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )}
    >
      <App />
    </Provider>
  )
}

ReactDOM.render(rooty(), document.getElementById('root'))
