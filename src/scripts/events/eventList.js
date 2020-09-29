import { useDateEvent, getEventEntries } from "./eventProvider.js";
import { eventHTML } from "./events.js";

const eventHub = document.querySelector(".hubEvent")
const listedEvents = document.querySelector("#eventList")

eventHub.addEventListener("eventChanged", event => {
    const newEntry = useDateEvent()

})

//Listens for add event click on existing event list
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "addEventButton") {
        document.querySelector('.eventForm').style.display = 'flex';
    }
})

//Loads the events list and add new event button
const render = (events) => {
    listedEvents.innerHTML = `${events.map((event) => {
        return eventHTML(event)
    }).join("")}
    <button id="addEventButton">Add Event</button>`
}

//Listens for close x click on event form
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "closeEvent") {
        document.querySelector('.eventForm').style.display = 'none';
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
const deleteEvent = articleId => {
    return fetch(`http://localhost:8088/events/${eventId}`, {
        method: "DELETE"
    })
        .then(getEventEntries)
}



//Export the NewsList funcition, to be invoked in Nutshell.js
export const eventList = () => {
    getEventEntries()
        .then(useDateEvent)
        .then(render)
}


// export const eventList = () => {
//     getEventEntries()
//     .then(() => {
//         const upcomingEvents = useDateEvent()
//         let event = "";

//         for (const entry of upcomingEvents) {
//             event += eventHTML(entry);
//         }
//         contentTarget.innerHTML += `${event}`;
//     })
// }


