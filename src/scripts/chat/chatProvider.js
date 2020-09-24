let feed = []

const eventHub = document.querySelector("main")

const dispatchStateChanges = () => {
    const messageStateChanged = new CustomEvent("messageStateChanged")

}


export const useMessages = () => {
    return feed.slice
}

export const getMessages = () => {
    return fetch("http://localhost:8088/messages")
        .then(response => response.json())
        .then(parsedMessages => feed = parsedMessages)
}

export const submitMessage = (message) => {
    return fetch("http://localhost:8088/messages", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
    })
        .then(() => {
            return getMessages()
        })
        .then(dispatchStateChanges)
}
