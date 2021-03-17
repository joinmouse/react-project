import React from 'react'
import ProfilePageFunction from './ProfilePageFunction'
import ProfilePageClass from './ProfilePageClass'

class App extends React.Component {
    state = {
        user: "Dan"
    }
    render() {
        return (
            <>
                <label>
                    <b>Choose profile to view: </b>
                    <select
                        value={this.state.user}
                        onChange={e => this.setState({ user: e.target.value })}
                    >
                        <option value="Dan">Dan</option>
                        <option value="Sophie">Sophie</option>
                        <option value="Sunil">Sunil</option>
                    </select>
                </label>
                <p>
                    <ProfilePageFunction user={this.state.user} />
                    <b> (function)</b>
                </p>
                <p>
                    <ProfilePageClass user={this.state.user} />
                    <b> (class)</b>
                </p>
                Can you spot the difference in the behavior?
            </>
        )
    }
}

export default App