import React from 'react'
import InputItem from './InputItem'
import List from './List'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                {
                    id: 1,
                    title: '标题1',
                    completed: false
                },
                {
                    id: 2,
                    title: '标题2',
                    completed: false
                },
                {
                    id: 3,
                    title: '标题3',
                    completed: false
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <InputItem addItem={this.addItem}/>
                <List
                    list={this.state.list}
                    deleteItem={this.deleteItem}
                    toggleCompleted={this.toggleCompleted}
                />
            </div>
        )
    }
    // 新增一项
    addItem = (title) => {
        const list = this.state.list
        let newItem = {
            id: Math.random().toString().slice(-5), // id 累加
            title,
            completed: false
        }
        // 使用conncat 返回不可以变值
        this.setState({
            list: list.concat(newItem)
        })
    }
    // 删除一项
    deleteItem = (id) => {
        this.setState({
            // 使用 filter 返回不可变值
            list: this.state.list.filter(item => item.id !== id)
        })
    }
    toggleCompleted = (id) => {
        this.setState({
            list: this.state.list.map(item => {
                const completed = item.id === id ? !item.completed : item.completed // 切换完成状态
                return {...item, completed}
            })
        })
    }
}

export default App