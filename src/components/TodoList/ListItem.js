import React from 'react'
import CheckBox from './UI/CheckBox'

class ListItem extends React.Component {
    handleDelete = () => {
        const { item, deleteItem } = this.props
        // 传给父组件处理删除
        deleteItem(item.id)
    }
    handleComplete = () => {
        const { item, toggleCompleted } = this.props
        // 传给父组件处理完成状态
        toggleCompleted(item.id)
    }
    
    render() {
        const { item } = this.props
        return (
            <div style={{ marginTop: '10px' }}>
                <CheckBox onChange={this.handleComplete}/>
                <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
                    {item.title}
                </span>
                <button onClick={this.handleDelete}>删除</button>
            </div>
        )
    }
}

export default ListItem