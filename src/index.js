// import React from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './components/App'
// import reducer from './reducers'
// import { legacy_createStore as createStore } from 'redux'
// import { Provider } from 'react-redux'

// const rooty = () => {
//   const s = new SpotifyWebApi()
//   s.searchTracks('sing me to sleep')
//   return (
//     <Provider store={createStore(reducer)}>
//       <App />
//     </Provider>
//   )
// }
// const rootEle = document.getElementById('root')
// const root = createRoot(rootEle)
// root.render(rooty())
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import './index.css'
import App from './App'
import { store } from './reducers/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
)
