import { useEffect, useState } from "react"
import { validMessageOnWritting, validMessageOnSubmit, disableInputs, enableInputs, inputsDefault, chatboxScrollBottom } from "./assets/utils/validMessage"
import './App.css'
import botImg from "/images/bot.svg"
import send from "/images/send.svg"
import bin from "/images/delete.svg"
import BotResponse from './assets/components/botResponse/BotResponse'
import UserMessage from './assets/components/userMessage/UserMessage'
import useSendRequest from "./assets/hooks/useSendRequest"

function App() {
    const [chatElements, setChatElements] = useState([{text: "Hi there! How can I help you?", type: "bot"}])

    const { sendRequest } = useSendRequest()

    const restartConversation = () => {
        setChatElements([{text: "Hi there! How can I help you?", type: "bot"}])
    }

    useEffect(() => {
        restartConversation()
    }, [])


    const validMessage = async (e) => {
        const userMessage = validMessageOnSubmit(e)

        if (userMessage) {
            disableInputs()
            inputsDefault()
            let newMessages = [...chatElements, {text: userMessage, type: "user"}, {text: "Thinking...", type: "bot"}]
            setChatElements(newMessages)
            const response = await sendRequest(userMessage)
            const botText = [...document.querySelectorAll(".bot-text")]
            botText[botText.length - 1].textContent = response.text
            enableInputs()
            chatboxScrollBottom()
        }
    }



    // useSendRequest()


    return (
        <main>
            <section>
                <div className="chatbot">
                    <header className="chatbot__header">
                        <h1 className="chatbot__header-title">chatbot</h1>
                        <img className="chatbot__header-icon" src={botImg} alt="Bot icon" />
                    </header>

                    <div className="chatbot__chatbox">
                        {
                            chatElements.map((message, index) => (
                                (message.type === "bot") ? <BotResponse key={index} text={message.text} /> : <UserMessage key={index} text={message.text} />
                            ))
                        }
                    </div>

                    <div className="chatbot__send">
                        <textarea onKeyUp={validMessageOnWritting} className="chatbot__send-input" placeholder="Write a message..."></textarea>

                        <div className="chatbot__send__btn">
                            <button onClick={validMessage} className="chatbot__send__btn-send">
                                <img src={send} alt="send" className="chabot__send-img" />
                            </button>

                            <button onClick={restartConversation} className="chatbot__send__btn-delete">
                                <img src={bin} alt="delete conversation" className="chabot__send-img" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default App
