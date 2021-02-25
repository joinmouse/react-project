import React from 'react'
import ThemeContext from './context'

class ThemedButton extends React.Component {
    // 指定 contextType 读取当前的 theme context。
    static contextType = ThemeContext // 也可以用 ThemedButton.contextType = ThemeContext
    render() {
        const theme = this.context // React 会往上找到最近的 theme Provider，然后使用它的值。
        return <div>
            <p>button's theme is {theme}</p>
        </div>
    }
}

export default ThemedButton