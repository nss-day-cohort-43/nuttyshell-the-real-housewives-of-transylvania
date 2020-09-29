

let tasks = [];

const eventHub = document.querySelector(".hubEvent")

const dispatchStateChangeEvent = () => {
    const taskStateChangedEvent = new CustomEvent("taskStateChanged")
    eventHub.dispatchEvent(taskStateChangedEvent)

}
export const getTasks = () => {
    //the response is parsed to return items in as JavaScript Object Notation.
    return fetch('http://localhost:8088/tasks')
        .then(response => response.json())
        .then(parsedTasks => {
            tasks = parsedTasks

        }
        )
}
export const useTasks = () => {
    const sortedByDate = tasks.sort(
        (currentTask, nextTask) =>
            Date.parse(currentTask.date) - Date.parse(nextTask.date)
    )
    return sortedByDate;
}

//The order should be POST, GET, render...in that order
export const saveTasks = newTask => {

    return fetch("http://localhost:8088/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTask)
    })
        .then(getTasks)
        .then(dispatchStateChangeEvent)
}











