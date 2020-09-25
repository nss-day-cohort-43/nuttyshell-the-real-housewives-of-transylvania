import { chatForm } from "./chatForm.js"

let feed = []

const eventHub = document.querySelector("main")

const dispatchStateChanges = () => {
    const messageStateChanged = new CustomEvent("messageStateChanged")
    eventHub.dispatchEvent(messageStateChanged)
}


export const useMessages = () => {
    return feed.slice()
}

export const getMessages = () => {
    return fetch("http://localhost:8088/messages?_expand=user")
        .then(response => response.json())
        .then(parsedMessages => {
            feed = parsedMessages
        })
}


//submitMessage saves info in given format found in chatForm.js
export const submitMessage = (message) => {
    return fetch("http://localhost:8088/messages?_expand=user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
    })

        .then(dispatchStateChanges)
        .then(chatForm)
}


//delete coming tomorrow
export const deleteEntry = messageId => {
    return fetch(`http://localhost:8088/messages/${messageID}`, {
        method: "DELETE"
    })
        .then(getMessages)
}
