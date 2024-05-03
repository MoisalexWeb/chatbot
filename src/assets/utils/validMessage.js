export const validMessageOnWritting = (e) => {
    const submit = document.querySelector(".chatbot__send__btn-send")
    if (e.target.value.trim().length === 0) {
        submit.classList.remove("active-btn")
        return
    }

    submit.classList.add("active-btn")
}

export const validMessageOnSubmit = (e) => {
    e.preventDefault()
    const message = document.querySelector(".chatbot__send-input")

    if (message.value.trim().length === 0) return false

    return message.value.trim()
}

export const disableInputs = () => {
    const sendFields = document.querySelector(".chatbot__send")
    sendFields.classList.add("disable-inputs")
}

export const enableInputs = () => {
    const sendFields = document.querySelector(".chatbot__send")
    sendFields.classList.remove("disable-inputs")
}

export const inputsDefault = () => {
    const submit = document.querySelector(".chatbot__send__btn-send")
    const message = document.querySelector(".chatbot__send-input")
    submit.classList.remove("active-btn")
    message.value = ""
}

export const chatboxScrollBottom = () => {
    const chatbox = document.querySelector(".chatbot__chatbox")
    chatbox.scrollTop = chatbox.scrollHeight
}