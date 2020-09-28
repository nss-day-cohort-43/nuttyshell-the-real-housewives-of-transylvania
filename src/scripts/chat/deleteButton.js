
const eventHub = document.querySelector(".hubEvent")
const deleteElement = document.querySelector("#messageBody")

export const renderDelete = (message) => {
    //invoked within the map function for the chatform. Looks at each object being mapped, to see what the message.id is
    //if the id matches the active user in session storage, then that message will receive a delete button
    const sessionId = parseInt(sessionStorage.Id)
    if (sessionId === message.user.id) {
        return `<button id="chatDelete-${message.id}">delete</button>`
    } else {
        return ""
    }
}
