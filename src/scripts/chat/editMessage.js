import { getSingleMessage, editMessage } from "./chatProvider.js"

const eventHub = document.querySelector(".hubEvent")

eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("saveEdit-")) {
        const [prefix, id] = event.target.id.split("-");
        debugger;
        const updatedMessage = {
            body: document.querySelector(`#input-edit-${parseInt(id)}`).value,
            userId: parseInt(sessionStorage.Id)
        }
        editMessage(updatedMessage, parseInt(id))
    }
})
export const EditMessageForm = (messageId) => {
    debugger;
    const test = getSingleMessage(parseInt(messageId))
        .then((response) => {
            console.log(response)
            document.querySelector(`#messageBody-${messageId}`).innerHTML = `
            <input type="hidden" value="${messageId} id="edit-message">
            <input id="input-edit-${messageId}" value="${response.body}"/>
            <button id="saveEdit-${messageId}">save</button>`
        })
}