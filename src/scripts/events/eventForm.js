import { saveEventEntry } from "./eventProvider.js"
//Create a new event form that will post events created to upcoming events

const contentTarget = document.querySelector(".eventForm")
const eventHub = document.querySelector(".hubEvent")

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "submit") {
        const eventNameInput = document.querySelector("#eventName")
        const eventDateInput = document.querySelector("#eventDate")
        const eventLocationInput = document.querySelector("#eventLocation")
    if (eventNameInput.value !== "" && eventDateInput.value !== "" && eventLocationInput.value !== "") {
        const newEvent = {
        "name": eventNameInput.value,
        "date": eventDateInput.value,
        "location": eventLocationInput.value,
        }
        saveEventEntry(newEvent)
        }
    }
})

export const eventFormComponent = (event) => {
    contentTarget.innerHTML = `
        <h2>New Event</h2>
        <fieldset>
        <label for="eventName">Name of Event</label>
        <textarea name="eventName" id="eventName"></textarea>
        </fieldset>
        <fieldset>
        <label for="newDate">Date of Event</label>
        <input type="date" name="eventDate" id="eventDate">
        </fieldset>
        <fieldset>
        <label for="eventLocation">Location of Event</label>
        <textarea name="eventLocation" id="eventLocation"></textarea>
        </fieldset>
        <button id="submit" type="button">Submit Event</button>
        `
}