import React from "react"

class EventDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'zhangsan',
            list: [
                {
                    id: 'id-1',
                    title: '标题1'
                },
                {
                    id: 'id-2',
                    title: '标题2'
                },
                {
                    id: 'id-3',
                    title: '标题3'
                }
            ]
        }
        this.handleClick1 = this.handleClick1.bind(this)
    }

    handleClick1() {
        this.setState({
            name: 'handleClick1 lisi'
        })
    }

    // 静态方法, this指向当前实例
    handleClick2 = () => {
        this.setState({
            name: 'handleClick2 lisi'
        })
    }

    // 获取event
    handleClick3 = (event) => {
        event.preventDefault() // 阻止默认行为
        // event.stopPropagation()  // 阻止冒泡
        // React 合成事件
        console.log("event", event)
        console.log(event.target) 
        console.log(event.currentTarget)   //绑定事件的元素

        // 原生DOM target
        console.log('nativeEvent', event.nativeEvent)
        console.log(event.nativeEvent.target) 
        console.log(event.nativeEvent.currentTarget)   //绑定事件的元素

        // 1. event 是 SyntheticEvent ，模拟出来 DOM 事件所有能力
        // 2. event.nativeEvent 是原生事件对象
        // 3. 所有的事件，都被挂载到 root元素 上
        // 4. 和 DOM 事件不一样，和 Vue 事件也不一样
    }

    // 传递参数, 最后一个是event
    handleClick4(id, title, event) {
        console.log(id, title)
        console.log(event) // 最后追加一个参数，即可接收 event
    }

    render() {
        // this 使用 bind
        return <div>
            <p onClick={this.handleClick2}>
                {this.state.name}
            </p>
            <a href="https://imooc.com/" onClick={this.handleClick3}>
                click me
            </a>
            <ul>{this.state.list.map((item, index) => {
                return <li key={item.id} onClick={this.handleClick4.bind(this, item.id, item.title)}>
                    index {index}; title {item.title}
                </li>
            })}</ul>
        </div>
    }
}

export default EventDemo