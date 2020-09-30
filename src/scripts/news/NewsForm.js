import { getArticles, useArticles, saveArticle } from "./NewsProvider.js"

const contentTarget = document.querySelector(".createNewArticle");
const eventHub = document.querySelector(".hubEvent");

eventHub.addEventListener("click", clickEvent => {

    if (clickEvent.target.id === "saveArticle") {

        //const articleDate = document.querySelector("#articleDate")
        const articleDate = document.querySelector("#articleDate")
        const articleTitle = document.querySelector("#articleTitle")
        const articleContent = document.querySelector("#articleContent")
        const articleSource = document.querySelector("#articleSource")

        if (articleTitle.value !== "" && articleContent.value !== "") {
            const newArticle = {
                date: articleDate.value,
                title: articleTitle.value,
                content: articleContent.value,
                source: articleSource.value,
                userId: parseInt(sessionStorage.Id)
            }
            saveArticle(newArticle);
        }
    }
})
// This renders the modal
const render = () => {
    contentTarget.innerHTML = `
    
                    <div class="newsModalContent">
                        <div id="newsModalClose">+</div>
                        <form>
                            <input type="date" id="articleDate" name="article-Date">
                            <input type="text" id="articleTitle" placeholder="Title">
                            <input type="text" id="articleContent" placeholder="Synopsis">
                            <input type="text" id="articleSource" placeholder="URL">
                            <button type="button" id="saveArticle">Save</button>
                        </form> `
}

export const ArticlesForm = () => {

    getArticles()
        .then(() => {
            render(useArticles());
        })

}