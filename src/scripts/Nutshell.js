import { chatForm } from "./chat/chatForm.js"
import { getMessages } from "./chat/chatProvider.js"

import { NewsList } from "./news/NewsList.js"

export const Nutshell = () => {
    // Render all your UI components here
    chatForm()
    NewsList()


}