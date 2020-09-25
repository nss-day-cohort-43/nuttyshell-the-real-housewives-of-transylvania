/*
 *  
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
let articles = []

const eventHub = document.querySelector(".dashboard")

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
                console.table(parsedArticles)
                articles = parsedArticles
            }


        )
}

export const useArticles = () => {
    const sortedByDate = entries.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
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
        .then(getArticles)
        // <-- Get all journal entries
        .then(dispatchStateChangeEvent)  // <-- Broadcast the state change event

}