import { getMessages, useMessages } from "./chatProvider.js"


const eventHub = document.querySelector("main")
const chatFeed = document.querySelector(".dashboard")

eventHub.addEventListener = ("click", event => {
    if (event.target.id === "submit") {
        const messageBody = document.querySelector("#newMessage")
        const newMessage = {
            body: messageBody.value
        }
    }
})

const renderFeed = (messageObject) => {
    chatFeed.innerHTML = `
<h3>Chat Room</h3>
    <section id="chatParentContainer">
        <div class="message" id="idNumber">
            <p>This will be the chat feed!</p>
        </div>
    </section>
    <section id="enterMessage">
    <textarea id="newMessage" name="newMessage">put what you want here</textarea>
    <button type="submit">Send</button>
    `
}

export const chatForm = () => {
    getMessages()
        .then(() => {
            renderFeed(useMessages())
        })
}