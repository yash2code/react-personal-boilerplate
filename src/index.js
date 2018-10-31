import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'

//creating store configuration and settinf up dev redux environment
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


ReactDOM.render(
            <Provider store = { store }>
            <App /> 
            </Provider>,
            document.getElementById('app')
            );

module.hot.accept()   //for hot reloading