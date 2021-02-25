import React from 'react'

class SetStateDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    // didMount
    componentDidMount() {
        this.setState({
            count: this.state.count + 1
        })
        console.log("count1: ", this.state.count)
        this.setState({
            count: this.state.count + 1
        })
        console.log("count2: ", this.state.count)
        setTimeout(() => {
            console.log("count3 before: ", this.state.count)
            this.setState({
                count: this.state.count + 1
            })
            console.log("count3 after: ", this.state.count)
        }, 0)
        setTimeout(() => {
            this.setState({
                count: this.state.count + 1
            })
            console.log("count4: ", this.state.count)
        }, 0)
    }
    render() {
        return <div>
            <p>setState DEMO</p>
            {this.state.count}
        </div>
    }
}

export default SetStateDemo