import { useDateEvent, deleteEvent } from "./eventProvider.js";

//Setup the appearance of an existing event on the HTML

const eventHub = document.querySelector(".hubEvent")

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.classList[0] === "deleteEvent") {
        const allEvents = useDateEvent() 
        const chosenEvent = allEvents.find(event => {
            const [prefix, buttonId] = clickEvent.target.id.split("-")
            return parseInt(buttonId) === event.id
        })
        deleteEvent(chosenEvent)
    }
})

export const eventHTML = eventObj => {
    return `
        <section id="events-${eventObj.id}" class="event-list">
            <p>Event: ${eventObj.name}</p>
            <p>Date: ${eventObj.date}</p>
            <p>Location: ${eventObj.location}</p>
            <button id="editEvent--${eventObj.id}">Edit</button>
            <button id="deleteEvent--${eventObj.id}">Delete</button>
            <button id="weather">Show Weather</button>
        </section>
        `
}

export const newEventHTML = eventObj => {
    return `
    
    `
}
