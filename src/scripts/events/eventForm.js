import { saveEventEntry, useDateEvent, getEventEntries } from "./eventProvider.js"
//Create a new event form that will post events created to upcoming events

const eventHub = document.querySelector(".hubEvent");

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "submitEvent") {
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

const contentTarget = document.querySelector(".eventForm");

export const loadEventFormHTML = () => {
   contentTarget.innerHTML = `
        <div class="eventModal">
        <h2>New Event</h2>
        </div>
        <div class="eventModalContent">
            <form action="">
                <div class="closeEvent">+</div>
                <input type="text" placeholder="Event Name">
                <input type="text" placeholder="Date">
                <input type="text" placeholder="Location">
                <button id="clearEvent">Clear</button>
                <button id="saveEvent">Save</button>
                <a href="" class="clearButton">Clear Form</a>
                <a href="" class="saveButton">Save Event</a>
            </form>
        </div>
        `
}

export const eventForm = () => {
    getEventEntries()
        .then(() => {
            loadEventFormHTML(useDateEvent());
        })
}


