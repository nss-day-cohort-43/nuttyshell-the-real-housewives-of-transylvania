// import { getMessages, useMessages, submitMessage } from "./chatProvider.js"


// const eventHub = document.querySelector(".hubEvent")
// const chatFeed = document.querySelector(".dashboard")

// eventHub.addEventListener("click", event => {
//     if (event.target.id === "submit") {
//         const messageBody = document.querySelector("#newMessage")
//         //line const newMessage builds the object to be stored in messages database
//         //must be logged in, but userID uses active account info stored in sessionstorage
//         const newMessage = {
//             body: messageBody.value,
//             userId: parseInt(sessionStorage.Id)
//         }
//         submitMessage(newMessage)
//     }
// })

// //renderfeed creates the chat feed (wall) with all stored messages, and displays username
// //before the message
// const renderFeed = (messageObject) => {
//     chatFeed.innerHTML = `
// <h3>Chat Room</h3>
//     <section id="chatParentContainer">
//         <div class="message">
//             ${messageObject.map(messages => {
//         return `<p>${messages.user.username}: ${messages.body}</p > `
//     }).join("")

//         }
//         </div >
//     </section >
//     <section id="enterMessage">
//         <textarea id="newMessage" name="newMessage" placeholder="@ will make a private message"></textarea>
//         <button type="submit" id="submit">Send</button>
//     `
// }

// //chatForm retrieves message DB, then using received messages, renders the chat feed (wall)
// export const chatForm = () => {
//     getMessages()
//         .then(() => {
//             renderFeed(useMessages())
//         })
// }