import React from 'react'

class Input extends React.Component {
    render() {
        return <input value={this.props.value} onChange={this.onChange}/>
    }
    onChange = (e) => {
        const newValue = e.target.value
        // 传给父组件处理
        this.props.onChange(newValue)
    }
}

export default Input