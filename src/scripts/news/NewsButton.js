const newArticleButton = document.querySelector("#news")

export const NewsButtonRender = () => {
    newArticleButton.innerHTML = `<button id="createNewArticleBttn">Create New Article</button>`

}