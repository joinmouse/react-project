import React from 'react'
import Input from './UI/Input'

class InputItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }

    handleChange = (newTitle) => {
        this.setState({
            title: newTitle
        })
    }
    handleClick = () => {
        // 传给父组件处理
        this.props.addItem(this.state.title)
        // 置空, 为下次输入做准备
        this.setState({
            title: ""
        })
    }

    render() {
        return (
            <div>
                <Input value={this.state.title} onChange={this.handleChange}/>
                <button onClick={this.handleClick}>新增</button>
            </div>
        )
    }
}

export default InputItem