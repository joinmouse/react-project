import React from 'react'

class ProfilePageClass extends React.Component {
    render() {
        const props = this.props
        console.log("render")
        console.log(props)

        const showMessage = () => {
            alert("Follow " + props.user)
        }
    
        const handleClick = () => {
            setTimeout(showMessage, 3000)
        }

        return <button onClick={handleClick}>Follow</button>
    }
}

export default ProfilePageClass