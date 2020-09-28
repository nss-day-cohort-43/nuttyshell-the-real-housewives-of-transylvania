import { useDateEvent, getEventEntries } from "./eventProvider.js";
import { eventHTML } from "./events.js";
import {eventFillableForm} from "./eventForm.js"

const eventHub = document.querySelector(".hubEvent")

const contentTarget = document.querySelector("#eventList")

eventHub.addEventListener("eventChanged", event => {
    eventList()
    eventFillableForm()
})

export const eventList = () => {
    getEventEntries()
    .then(() => {
        const upcomingEvents = useDateEvent()
        let event = "";

        for (const entry of upcomingEvents) {
            event += eventHTML(entry);
        }
        contentTarget.innerHTML += `${event}`;
    })
}