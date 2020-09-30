import { getSingleMessage, editMessage } from "./chatProvider.js"

const eventHub = document.querySelector(".hubEvent")

//eventlistener listens for save button on EditMessageForm, takes new info and uses editMessage() from 
//chatprovider.js. It sends the updated information to database and replaces old info with new edited info
eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("saveEdit-")) {
        const [prefix, id] = event.target.id.split("-");
        const updatedMessage = {
            body: document.querySelector(`#input-edit-${parseInt(id)}`).value,
            userId: parseInt(sessionStorage.Id)
        }
        editMessage(updatedMessage, parseInt(id))
    }
})


//EditMessageForm is on chatForm where it in invoke in eventListener
export const EditMessageForm = (messageId) => {
    const test = getSingleMessage(parseInt(messageId))
        .then((response) => {
            document.querySelector(`#messageBody-${messageId}`).innerHTML = `
            <input type="hidden" value="${messageId} id="edit-message">
            <input id="input-edit-${messageId}" value="${response.body}"/>
            <button id="saveEdit-${messageId}">save</button>`
        })
}