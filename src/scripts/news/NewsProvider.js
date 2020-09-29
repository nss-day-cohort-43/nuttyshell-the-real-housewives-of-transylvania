/*
 *  
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
let articles = []

const eventHub = document.querySelector(".hubEvent")

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/


const dispatchStateChangeEvent = () => {
    const newsArticleStateChangedEvent = new CustomEvent("newsArticleStateChanged")
    eventHub.dispatchEvent(newsArticleStateChangedEvent)
}

export const getArticles = () => {
    return fetch("http://localhost:8088/articles") // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(
            parsedArticles => {
                articles = parsedArticles
            }


        )
}

export const useArticles = () => {
    const sortedByDate = articles.sort(
        (currentArticle, nextArticle) =>
            Date.parse(currentArticle.date) - Date.parse(nextArticle.date)
    )
    return sortedByDate
}

export const saveArticle = newArticle => {
    return fetch("http://localhost:8088/articles", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newArticle)
    })
        .then(getArticles)  // <-- Gets all articles
        .then(dispatchStateChangeEvent)  // <-- Broadcasts the state change event

}