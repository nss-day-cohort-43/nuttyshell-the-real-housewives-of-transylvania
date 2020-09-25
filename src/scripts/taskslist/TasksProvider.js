

const dispatchStateChangeEvent = () => {
    const taskStateChangedEvent = new CustomEvent("taskStateChanged")
    eventHub.dispatchEvent(taskStateChangedEvent)
    
}
let tasks = [];

const eventHub = document.querySelector(".hubEvent")

export const useTasks = () => {
    return tasks.slice();
}

export const getTasks = () => {

    return fetch('http://localhost:8088/tasks')
    .then(response => response.json())
    .then(parsedTasks => {
        tasks = parsedTasks
      
    })
}


export const saveTasks = newTask => {
  
    return fetch("http://localhost:8088/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTask)
    })
    .then(() => {
    return getTasks()
    })
    .then(dispatchStateChangeEvent)
    
    
}





