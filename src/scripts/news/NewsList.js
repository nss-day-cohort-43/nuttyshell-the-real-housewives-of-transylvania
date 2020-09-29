/*
 *  Purpose:
 *    To render as many news article entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useArticles, getArticles } from "./NewsProvider.js"
import { NewsEntry } from "./News.js"

// DOM reference to where all entries will be rendered

const newsArticles = document.querySelector("#newsArticles")
const eventHub = document.querySelector(".hubEvent")

eventHub.addEventListener("newsArticleStateChanged", () => {
    const newEntry = useArticles()
    render(newEntry)
})

// Event listeners for modal
eventHub.addEventListener("click", clickEvent => {

    if (clickEvent.target.id === "createNewArticleBttn") {
        document.querySelector('.createNewArticle').style.display = 'flex';
    }
})

eventHub.addEventListener("click", clickEvent => {

    if (clickEvent.target.id === "newsModalClose") {
        document.querySelector('.createNewArticle').style.display = 'none';
    }
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEntry--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useArticles() and render the updated articles list.
        */
        deleteArticle(id).then(
            () => {
                const updatedArticles = useArticles()

                render(updatedArticles)
            }
        )
    }
})

const deleteArticle = articleId => {
    return fetch(`http://localhost:8088/articles/${articleId}`, {
        method: "DELETE"
    })
        .then(getArticles)
}

// render the articles and the Create New Article button
const render = (articles) => {
    newsArticles.innerHTML = `${articles.map((article) => {
        return NewsEntry(article)
    }).join("")}
    <button id="createNewArticleBttn">Create New Article</button>`
}

// export the NewsList funcition, to be invoked in Nutshell.js
export const NewsList = () => {
    getArticles()
        .then(useArticles)
        .then(render)

}