import { useDateEvent, deleteEvent } from "./eventProvider.js";

//Setup the appearance of an existing event on the HTML

export const eventHTML = eventObj => {
    return `
        <div>
            <h3>Upcoming Events</h3>
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

