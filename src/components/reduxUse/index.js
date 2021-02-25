import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './reducers'
import App from './UI/App'

let store = createStore(todoApp)

export default function () {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}