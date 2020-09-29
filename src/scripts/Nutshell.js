// import { chatForm } from "./chat/chatForm.js"
import { eventForm } from "./events/eventForm.js";
import { eventList } from "./events/eventList.js"

// import { getMessages } from "./chat/chatProvider.js"


export const Nutshell = () => {
    // Render all your UI components here
    eventList();
    eventForm();
 
    // chatForm()
}