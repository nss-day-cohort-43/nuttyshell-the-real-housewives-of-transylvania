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
    
        <button type="button" id="saveArticle">Save</button>
    </fieldset>
</form>
    `
}
export const ArticlesForm = () => {

    getMoods()
        .then(() => {
            render(useMoods());
        })

}