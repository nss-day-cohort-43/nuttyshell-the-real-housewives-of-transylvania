import { saveEventEntry, useDateEvent, getEventEntries } from "./eventProvider.js"
//Create a new event form that will post events created to upcoming events

const eventHub = document.querySelector(".hubEvent");

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "saveEvent") {
        const eventNameInput = document.querySelector("#eventName")
        const eventDateInput = document.querySelector("#eventDate")
        const eventLocationInput = document.querySelector("#eventLocation")
    if (eventNameInput.value !== "" && eventDateInput.value !== "" && eventLocationInput.value !== "") {
        const newEvent = {
            name: eventNameInput.value,
            date: eventDateInput.value,
            location: eventLocationInput.value,
        }
        saveEventEntry(newEvent) 
        }
    }
})

const contentTarget = document.querySelector("#eventForm");

export const loadEventFormHTML = () => {
   contentTarget.innerHTML = `
        <div class="eventModal">
        <div class="eventModalContent">
            <form>
                <div id="closeEvent">+</div>
                <input type="text" id="eventName" placeholder="Event Name">
                <input type="text" id="eventDate" placeholder="Date">
                <input type="text" id="eventLocation" placeholder="Location">
                <button id="saveEvent" type="button">Save</button>
            </form>
        </div>
        </div>
        `
}

//Export the eventForm funcition, to be invoked in Nutshell.js
export const eventForm = () => {
    getEventEntries()
        .then(() => {
            loadEventFormHTML(useDateEvent());
        })
}


