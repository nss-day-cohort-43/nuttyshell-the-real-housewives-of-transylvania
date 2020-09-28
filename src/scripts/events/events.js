import { useDateEvent, deleteEvent } from "./eventProvider.js";

//Setup the appearance of an existing event on the HTML

// export let URL = "http://dataservice.accuweather.com/forecasts/v1/daily/1day/{locationKey}";
// export let eventHTML = (eventObj) => {
// URL = ""
// }

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
        <div id="header">
            <h3>Upcoming Events<h3>
        </div>
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


//<div id="newEventSection">
//<button id="newEvent">New Event</button>
//</div>