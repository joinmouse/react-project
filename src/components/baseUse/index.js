import React from 'react'
import ListDemo from './ListDemo'
import StateDemo from './StateDemo'
import SetStateDemo from './SetStateDemo'

class BaseUse extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div>
            {/* <ListDemo/>
            <StateDemo/> */}
            <SetStateDemo/>
        </div>
    }
}

export default BaseUse