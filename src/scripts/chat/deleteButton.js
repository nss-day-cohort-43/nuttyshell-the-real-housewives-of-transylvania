
const eventHub = document.querySelector(".hubEvent")
const deleteElement = document.querySelector("#messageBody")

export const renderDelete = (message) => {

    const sessionId = parseInt(sessionStorage.Id)
    if (sessionId === message.user.id) {
        return `<button id="chatDelete-${message.id}">delete</button>`
    } else {
        return ""
    }
}

// const deleteElement = document.querySelector(".message")

// eventHub.addEventListener("load", event => {
//     debugger;
//     if (sessionStorage.id === target.user.id) {
//         deleteElement.innerHTML = `<button>delete</button>`
//     }
// })