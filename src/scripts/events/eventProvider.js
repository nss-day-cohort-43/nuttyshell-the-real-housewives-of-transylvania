

const eventHub = document.querySelector(".hubEvent")

let eventEntries = []

const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("eventStateChanged"))
}

export const getEventEntries = () => {
    return fetch("http://localhost:8088/entries?_expand=mood") // Fetch from the API
        .then(response => response.json())
        .then(parsedEntries => {
            // What should happen when we finally have the array?
            eventEntries = parsedEntries
        })
}

export const saveEventEntry = newEventEntry => {
    return fetch("http://localhost:8088/events", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEventEntry)
    }) 
        .then(dispatchStateChangeEvent)  // <-- Broadcast the state change event
}
