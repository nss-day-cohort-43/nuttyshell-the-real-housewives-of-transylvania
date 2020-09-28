import { chatForm } from "./chat/chatForm.js"
import { getMessages } from "./chat/chatProvider.js"
import { ArticlesForm } from "./news/NewsForm.js"
import { NewsList } from "./news/NewsList.js"

export const Nutshell = () => {
    // Render all your UI components here
    chatForm()
    NewsList()
    ArticlesForm()


}