

import {  saveTasks } from "./TasksProvider.js";

const contentTarget = document.querySelector(".eventHub")
const eventHub = document.querySelector(".eventHub")
eventHub.addEventListener("click", event => {
    
    if (event.target.id === "saveTask") {

        const taskContent = document.querySelector(".taskListContainer") 
        const taskDate = document.querySelector(".taskListContainer")

        const newTask = {
            finishby: taskDate.value,
            tasksname: taskContent.value
        }
            saveTasks(newTask);

        }})   
  

 
 
      