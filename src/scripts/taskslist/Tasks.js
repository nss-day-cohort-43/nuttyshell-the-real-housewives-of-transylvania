const eventHub = document.querySelector(".hubEvent")
/*Purpose: To render a single task as an HTML representation of the data.*/


export const TaskHTML = (taskObj) => {
    return `
    <section class="taskListContainer">
        <div class="taskListContainer">Date: ${taskObj.finishby}</div>
        <div class="taskListContainer">Task: ${taskObj.tasksname}</div>
        <button id="editTask--${taskObj.id}">Edit</button>
        <input type="hidden" name="taskId" id="taskId">
        <button id="deleteTask--${taskObj.id}">Delete</button>
    </section>
`
}


