import React from 'react'

// 工厂HOC
// const HOCFactory = (Component) => {
//     class HOC extends React.Component {
//         // 定义多个组件的公共逻辑
//         render() {
//             return <Component {...this.props} />
//         }
//     }
//     return HOC
// }

// 高阶组件
const withMouse = (Component) => {
    class withMouseComponent extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                x: 0,
                y: 0
            }
        }

        handleMouseMove = (event) => {
            this.setState({
                x: event.clientX,
                y: event.clientY
            })
        }

        render() {
            return (
                <div style={{ height: '500px' }} onMouseMove={this.handleMouseMove}>
                    {/* 1. 透传所有 props 2. 增加 mouse 属性 */}
                    <Component {...this.props} mouse={this.state}/>
                </div>
            )
        }
    }
    return withMouseComponent
}

const App = (props) => {
    const a = props.a  // 透传的属性
    const { x , y } = props.mouse  // 接受mouse属性
    return (
        <div style={{ height: '500px' }}>
            <h1>The mouse position is ({x}, {y})</h1>
            <p>{a}</p>
        </div>
    )
}

export default withMouse(App)