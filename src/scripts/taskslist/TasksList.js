import { TaskHTML } from "./Tasks.js";
import { getTasks, useTasks, saveTasks } from "./TasksProvider.js"

const eventHub = document.querySelector(".hubEvent")
const taskList = document.querySelector("#taskList")

eventHub.addEventListener("taskStateChanged", event => {
    const newTasks = useTasks()
    render(newTasks)
})

//Event listeners for modal
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "addTaskButton") {
        document.querySelector('.taskModal').style.display = 'flex';
    }
})



eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "closeTask") {
        document.querySelector('.taskModal').style.display = 'none';
    }
})

const dispatchStateChangeEvent = () => {
    const taskStateChangedEvent = new CustomEvent("taskStateChanged")
    eventHub.dispatchEvent(taskStateChangedEvent)

}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteTask--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        /* Invoke the function that performs the delete operation.
        
                   Once the operation is complete you should THEN invoke
                   useTasks() and render the tasks list again.
               */


        deleteTask(id).then(
            () => {
                const updatedTasks = useTasks()
                render(updatedTasks)
            }
        )




    }
})
const deleteTask = taskId => {
    return fetch(`http://localhost:8088/tasks/${taskId}`, {
        method: "DELETE"
    })
        .then(getTasks)
        .then(dispatchStateChangeEvent)
}

export const TaskList = () => {
    getTasks()
        .then(useTasks)
        .then(render)

}


const render = (tasks) => {
    taskList.innerHTML = `${tasks.map((task) => {
        return TaskHTML(task)

    }).join("")}
    <button id="addTaskButton" type="button">Create New Task</button>
           `
}
eventHub.addEventListener("click", event => {

    if (event.target.id === "saveTask") {

        const taskDate = document.querySelector("#taskDate")
        const taskContent = document.querySelector("#taskContent")

        if (taskContent.value !== "0") {

            const newTask = {
                finishby: taskDate.value,
                tasksname: taskContent.value,
                date: Date.now()
            }
            saveTasks(newTask);
        }
    }
})
    
