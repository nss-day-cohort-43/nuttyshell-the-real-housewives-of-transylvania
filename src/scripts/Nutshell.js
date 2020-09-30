import { chatForm } from "./chat/chatForm.js"
import { eventForm } from "./events/eventForm.js";
import { eventList } from "./events/eventList.js"
import { ArticlesForm } from "./news/NewsForm.js"
import { NewsList } from "./news/NewsList.js"
import { TaskForm } from "./taskslist/TasksForm.js";
import { TaskList } from "./taskslist/TasksList.js"


export const Nutshell = () => {
    // Render all your UI components here
    eventList();
    eventForm();
    chatForm()
    NewsList()
    ArticlesForm()
    TaskForm()
    TaskList()
    

}

    


