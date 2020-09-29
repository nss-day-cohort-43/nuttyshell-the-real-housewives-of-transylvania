
import { saveTasks, useTasks, getTasks } from "./TasksProvider.js";

const contentTarget = document.querySelector(".createNewTask");
const eventHub = document.querySelector(".hubEvent");





const render = () => {
    contentTarget.innerHTML = `
    <div class="taskModal">
                    <div class="taskModalContent">
                        <div class="closeTask">+</div>
                        <form>
                        <h3>Add New Task</h3>
                            <input type="text" id="taskContent" placeholder="Enter Task Here...">
                            <input type="date" id="taskDate" placeholder="Expected Completion Date">
                            <button type="button" id="saveTask" value="saveTask">Save</button>
                            <button type="button" id="clearTask" value="clearTask">Clear</button>
                        </form>
                    </div> 
                    </div>
    `
}


export const TaskForm = () => {
    getTasks()
        .then(() => {
            render(useTasks());
        })
}














