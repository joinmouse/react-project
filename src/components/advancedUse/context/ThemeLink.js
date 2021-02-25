import ThemeContext from './context'

// 底层组件 - 函数是组件
export default function ThemeLink (props) {
    console.log(ThemeContext)
    // 函数式组件可以使用 Consumer
    return <ThemeContext.Consumer>
        { value => <p>link's theme is {value}</p> }
    </ThemeContext.Consumer>
}