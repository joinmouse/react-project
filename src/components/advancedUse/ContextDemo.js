import React from 'react'
import ThemeContext from './context/context'
import Toolbar from './context/Toolbar'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: 'light'
        }
    }
    render() {
        console.log(ThemeContext)

        return (
            <ThemeContext.Provider value={this.state.theme}>
                <Toolbar />
                <hr/>
                <button onClick={this.changeTheme}>change theme</button>
            </ThemeContext.Provider>
        )
    }
    changeTheme = () => {
        this.setState({
            theme: this.state.theme === 'light' ? 'dark' : 'light'
        })
    }
}

export default App