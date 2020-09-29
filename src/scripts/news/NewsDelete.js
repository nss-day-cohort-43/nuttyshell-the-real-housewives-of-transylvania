const eventHub = document.querySelector(".hubEvent")
const deleteElement = document.querySelector("#messageBody")

export const newsDelete = (articles) => {

    const sessionId = parseInt(sessionStorage.Id)
    if (sessionId === articles.userId) {
        return `<button id="newsDelete--${articles.id}">delete</button>`
    } else {
        return ""
    }
}