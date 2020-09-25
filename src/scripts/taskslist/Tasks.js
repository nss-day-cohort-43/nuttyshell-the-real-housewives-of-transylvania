const eventHub = document.querySelector(".hubEvent")

export const TaskHTML = (taskObj) => {
    return `
    <section class="taskListContainer">
        <div class="taskListContainer">Date: ${ taskObj.finishby }</div>
        <div class="taskListContainer">Task: ${ taskObj.tasksname }</div>
    </section>
`
}
           
            
           