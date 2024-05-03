import React from 'react'
import bot from "/images/bot.svg"
import "./BotResponse.css"

const BotResponse = ({ text }) => {
    return (
        <div className="bot-response">
            <figure className="bot__figure">
                <img src={bot} alt="Bot icon" className="bot__figure-img" />
            </figure>
            <p className="bot-text">{text}</p>
        </div>
    )
}

export default BotResponse