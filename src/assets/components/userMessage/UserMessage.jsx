import React from 'react'
import "./UserMessage.css"

const UserMessage = ({ text }) => {
    return (
        <div className="user-message">
            <p className="user-text">{text}</p>
        </div>
    )
}

export default UserMessage