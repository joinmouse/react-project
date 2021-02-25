import ThemedButton from './ThemedButton'
import ThemeLink from './ThemeLink'

// 中间的组件再也不必指明往下传递 theme 了
export default function Toolbar(props) {
    return (
        <div>
            <ThemedButton />
            <ThemeLink />
        </div>
    )
}