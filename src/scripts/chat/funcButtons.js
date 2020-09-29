export const renderDelete = (message) => {
    //invoked within the map function for the chatform. Looks at each object being mapped, to see what the message.id is
    //if the id matches the active user in session storage, then that message will receive a delete button
    const sessionId = parseInt(sessionStorage.Id)
    if (sessionId === message.user.id) {
        return `
        <button class="edit" id="chatEdit-${message.id}">🖉</button>
        <button class="delete" id="chatDelete-${message.id}">🗑️</button>`

    } else {
        return ""
    }
}
