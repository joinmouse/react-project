import React from 'react'
import ContextDemo from './ContextDemo'
import UncontrolledDemo from './UncontrolledDemo'
import PortalsDemo from './PortalsDemo'
import LazyDemo from './LazyDemo'
import SCUDemo from './SCUDemo'
import PureComponentDemo from './PureComponentDemo'
import HOCDemo from './HOCDemo'
import RenderPropDemo from './RenderPropDemo'

class AdvancedUse extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div>
            {/* <UncontrolledDemo/>
            <PortalsDemo id="111">Modal 内容</PortalsDemo> */}
            {/* <ContextDemo/> */}
            {/* <LazyDemo/> */}
            {/* <SCUDemo/> */}
            {/* <PureComponentDemo/> */}
            {/* <HOCDemo a="100"/> */}
            <RenderPropDemo a="200"/>
        </div>
    }
}

export default AdvancedUse