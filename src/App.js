import React from 'react'
import './App.css'
import AdvancedUse from "./components/advancedUse"
import BaseUse from './components/baseUse'
import TodoList from './components/TodoList'

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                {/* <BaseUse />
                <AdvancedUse /> */}
                <TodoList />
            </div>
        )
    }
}

export default App