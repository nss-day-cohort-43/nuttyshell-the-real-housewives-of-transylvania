import { TaskHTML } from "./Tasks.js";
import { getTasks, useTasks, saveTasks } from "./TasksProvider.js"

const eventHub = document.querySelector(".hubEvent")
const domElement = document.querySelector(".taskListContainer")

eventHub.addEventListener("click", event => {
  
    if (event.target.id === "saveTask") {

        const taskContent = document.querySelector("#tasksName") 
        const taskDate = document.querySelector("#completionDate")

        const newTask = {
            finishby: taskDate.value,
            tasksname: taskContent.value
        }
            saveTasks(newTask);
    }}
)

    
eventHub.addEventListener("taskStateChanged", event => {



    const newTasks = useTasks()
    
    addTasksToDOM(newTasks)
        
})

export const addTasksToDOM = (theTaskArray) => {

    domElement.innerHTML = theTaskArray.map((oneTask) => {
    return TaskHTML(oneTask);
    })
    
}

export const TaskList =() => {
    getTasks()
    .then(() => {
        
        const taskArray = useTasks()
        addTasksToDOM(taskArray)
    })   
    
}


