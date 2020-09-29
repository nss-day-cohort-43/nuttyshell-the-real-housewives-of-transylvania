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

export const getSingleMessage = (id) => {
    return fetch(`http://localhost:8088/messages/${id}`)
        .then(response => response.json())
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


//deletes message based on what button id that was clicked on (see deleteButton.jsg)
export const deleteMessage = messageId => {
    return fetch(`http://localhost:8088/messages/${messageId}`, {
        method: "DELETE",
    })
        .then(getMessages)
}

//export button with allow active user to  edit a previous message sent by them
export const editMessage = (messageObject, messageId) => {
    return fetch(`http://localhost:8088/messages/${messageId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(messageObject)
    })
        .then(getMessages)
        .then(dispatchStateChanges)
        .then(chatForm)
}
