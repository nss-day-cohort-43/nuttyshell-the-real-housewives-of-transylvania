import { useDateEvent, getEventEntries } from "./eventProvider.js";
import { eventHTML } from "./events.js";

const eventHub = document.querySelector(".hubEvent")
const listedEvents = document.querySelector("#eventList")

//Listens for Save button in Event Form to be clicked
eventHub.addEventListener("eventStateChanged", () => {
    const newEntry = useDateEvent()
    render(newEntry)
})

//Listens for add event click on existing event list
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "addEventButton") {
        document.querySelector('.eventModal').style.display = 'flex';
    }
})

//Loads the events list and add new event button
const render = (events) => {
    listedEvents.innerHTML = `
    <h3>Upcoming Events</h3>
    ${events.map((event) => {
        return eventHTML(event)
    }).join("")}
    <button id="addEventButton" type="button">Add Event</button>`
}

//Listens for Close X click on event form
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "closeEvent") {
        document.querySelector('.eventModal').style.display = 'none';
    }
})

//Listens for delete click on existing event list
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEvent--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        deleteEvent(id).then(
            () => {
                const updatedEventList = useDateEvent() 
                render(updatedEventList)
            }
        )
    }
}) 

//Delete a event by its specific id
const deleteEvent = eventId => {
    return fetch(`http://localhost:8088/events/${eventId}`, {
        method: "DELETE"
    })
        .then(getEventEntries)
}


//Export the eventList funcition, to be invoked in Nutshell.js
export const eventList = () => {
    getEventEntries()
        .then(useDateEvent)
        .then(render)
}




