import React from 'react'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'joinmouse',
            flag: true
        }

        this.nameInputRef = React.createRef()
        this.fileInputRef = React.createRef()
    }

    handleAlertName = () => {
        const elem = this.nameInputRef.current  // 通过 ref 获取 DOM 节点
        console.log(elem)
        alert(elem.value) // 不是 this.state.name
    }

    handleAlertFile = () => {
        const elem = this.fileInputRef.current // 通过 ref 获取 DOM 节点
        alert(elem.files[0].name)
    }

    render() {
        // input defaultValue 非受控: input值不受限制于state限制
        // return <div>
        //     {/* 使用 defaultValue 而不是 value ，使用 ref */}
        //     <input defaultValue={this.state.name} ref={this.nameInputRef}/>
        //     {/* state 并不会随着改变 */}
        //     <span>state.name: {this.state.name}</span>
        //     <br/>
        //     <button onClick={this.handleAlertName}>alert name</button>
        // </div>

        // file
        return <div>
            <input type="file" ref={this.fileInputRef}/>
            <button onClick={this.handleAlertFile}>alert file</button>
        </div>
    }
}

export default App