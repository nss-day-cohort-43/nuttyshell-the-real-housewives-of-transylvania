import { getMessages, useMessages, submitMessage } from "./chatProvider.js"


const eventHub = document.querySelector(".hubEvent")
const chatFeed = document.querySelector(".dashboard")

eventHub.addEventListener("click", event => {
    if (event.target.id === "submit") {
        const messageBody = document.querySelector("#newMessage")
        const newMessage = {
            body: messageBody.value,
            userId: messageBody.user.id
        }
        submitMessage(newMessage)
    }
})

const renderFeed = (messageObject) => {
    chatFeed.innerHTML = `
<h3>Chat Room</h3>
    <section id="chatParentContainer">
        <div class="message">
            ${messageObject.map(messages => {
        return `<p>${messages.user.name}: ${messages.body}</p > `
    }).join("")

        }
        </div >
    </section >
    <section id="enterMessage">
        <textarea id="newMessage" name="newMessage" placeholder="@ will make a private message"></textarea>
        <button type="submit" id="submit">Send</button>
    `
}

export const chatForm = () => {
    getMessages()
        .then(() => {
            renderFeed(useMessages())
        })
}