const eventHub = document.querySelector(".hubEvent")

let eventEntries = []

const dispatchChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("eventStateChanged"))
}
 
//Chronological sorting function
export const useDateEvent = () => {
    const sortByDate = eventEntries.sort(
        (currentEvent, nextEvent) =>
            Date.parse(currentEvent.date) - Date.parse(nextEvent.date)
    )
    return sortByDate
}

//Pull existing event information from json server function
export const getEventEntries = () => {
    return fetch("http://localhost:8088/events") 
        .then(response => response.json())
        .then(parsedEntries => {
        eventEntries = parsedEntries
    })
}

//Save event function
export const saveEventEntry = newEventEntry => {
    return fetch("http://localhost:8088/events", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(newEventEntry)
        }) 
    .then(getEventEntries)
    .then(dispatchChangeEvent) 
}

//Delete event function
export const deleteEvent = deletedEvent => {
    return fetch('http://localhost:8088/events/${deletedEvent.id}',{
        method: "DELETE"
    })
    .then(dispatchChangeEvent)
}

