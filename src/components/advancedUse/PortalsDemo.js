import React from 'react'
import ReactDOM from 'react-dom'
import './dialog.css'

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props)
        // // 正常渲染
        // return <div className="modal">
        //     {this.props.children} {/* vue slot */}
        // </div>

        // 使用 Portals 渲染到 body 上。
        // fixed 元素要放在 body 上，有更好的浏览器兼容性。
        return ReactDOM.createPortal(
            <div className="modal">{this.props.children}</div>,
            document.body // DOM 节点
        )
    }
}

export default App