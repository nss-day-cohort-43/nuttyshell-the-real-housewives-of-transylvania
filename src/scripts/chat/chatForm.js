import { getMessages, useMessages, submitMessage, deleteMessage } from "./chatProvider.js"
import { renderDelete } from "./funcButtons.js"
import { EditMessageForm } from "./editMessage.js"


const eventHub = document.querySelector(".hubEvent")
const chatFeed = document.querySelector(".dashboard")

//targets the scroll feature, and starts scroll at most recent message/bottom of chat feed
export const scrollBottom = () => {
    let chatHistory = document.querySelector(".message");
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

eventHub.addEventListener("click", event => {
    if (event.target.id === "submit") {
        const messageBody = document.querySelector("#newMessage")
        //line const newMessage builds the object to be stored in messages database
        //must be logged in, but userID uses active account info stored in sessionstorage
        const newMessage = {
            body: messageBody.value,
            userId: parseInt(sessionStorage.Id)
        }
        submitMessage(newMessage)
    } else if (event.target.id.startsWith("chatDelete-")) {
        //this if state will split the id of each individual message, and it it matches the id of the 
        //delete button that was clicked... it will only delete the matching message
        const [prefix, id] = event.target.id.split("-")
        deleteMessage(id)
            .then(chatForm)
    } else if (event.target.id.startsWith("chatEdit-")) {
        const [prefix, id] = event.target.id.split("-")

        EditMessageForm(id)

    }
})

//renderfeed creates the chat feed (wall) with all stored messages, and displays username
//before the message

//lookup modify to pull up all sessionStorage user's delete button

const renderFeed = (messageArray) => {
    if (messageArray)
        chatFeed.innerHTML = `
<h3>Chat Room</h3>
    <section id="chatParentContainer">
        <div class="message" >
            ${messageArray.map(message => {
            return `
            <div id="messageBody-${message.id}"< p > ${message.user.username}: ${message.body}</p >
            ${renderDelete(message)}
            </div>
            `
        }).join("")
            }

        </div >
    </section >
    <section id="enterMessage">
        <textarea id="newMessage" name="newMessage" placeholder="@ will make a private message"></textarea>
        <button type="submit" id="submit">Send</button>
    </section>
    `
}

//chatForm retrieves message DB, then using received messages, renders the chat feed (wall)
export const chatForm = () => {
    getMessages()
        .then(() => {
            renderFeed(useMessages())
        })
        .then(scrollBottom)
}

