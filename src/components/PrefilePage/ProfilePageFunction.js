function ProfilePageFunction(props) {
    const showMessage = () => {
        alert("Follow " + props.user)
    }

    const handleClick = () => {
        setTimeout(showMessage, 3000)
    }

    return (
        <button onClick={handleClick}>Follow</button>
    )
}

export default ProfilePageFunction