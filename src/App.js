import React from 'react'
import './App.css'
import AdvancedUse from "./components/advancedUse"
import BaseUse from './components/baseUse'
import TodoList from './components/TodoList'
import ReduxUse from './components/reduxUse'
import ProfilePage from './components/PrefilePage'

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                {/* <BaseUse /> */}
                {/*<AdvancedUse /> */}
                {/* <TodoList /> */}
                {/* <ReduxUse /> */}
                <ProfilePage />
            </div>
        )
    }
}

export default App