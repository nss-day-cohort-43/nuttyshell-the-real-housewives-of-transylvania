import { saveArticle } from "./NewsProvider.js"

const contentTarget = document.querySelector(".journal-form");
const eventHub = document.querySelector(".hubEvent");

eventHub.addEventListener("click", clickEvent => {

    if (clickEvent.target.id === "saveArticle") {

        const articleDate = document.querySelector("#articleDate")
        const articleTitle = document.querySelector("#articleTitle")
        const articleContent = document.querySelector("#articleContent")
        const articleSource = document.querySelector("#articleSource")

        //if (entryText.value !== "0") {
        const newArticle = {
            date: articleDate.value,
            title: articleTitle.value,
            content: articleContent.value,
            entry: articleSource.value,

        }
        saveArticle(newArticle);




    }


})




const render = () => {
    contentTarget.innerHTML = `
    <form action="">
    <fieldset>
        <label for="articleDate">Date of Article</label>
        <input type="date" name="journalDate" id="journalDate"><br><br>
        <label for="articleTitle">Article Title:</label>
        <textarea id="concepts" name="concepts"></textarea><br><br>
        <label for="articleContent">Journal Entry:</label>
        <textarea id="articleSource" name="entry"></textarea><br><br>
        <br><br>
        <button type="button" id="saveArticle">Save</button>
    </fieldset>
</form>
    `
}
export const JournalForm = () => {

    getMoods()
        .then(() => {
            render(useMoods());
        })

}