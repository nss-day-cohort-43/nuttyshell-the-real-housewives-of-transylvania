/*
 *  Purpose: To render a single news article entry as an
 *           HTML representation of the data
 */
export const NewsEntry = (newEntry) => {
    return `
        <p><section id="entry--${newEntry.id}" class="journalEntry">
        <div class="entry--date">Date: ${newEntry.date}</div> 
        <div class="entry--concept">Title: ${newEntry.title}</div>
        <div class="entry--entry">Synopsis: ${newEntry.content}</div>
        <div class="entry--mood">Full Story: <a href="${newEntry.source}">Click Here</a></div>
        <button id="deleteEntry--${newEntry.id}">Delete</button>
        </p>
        </section>
    `
}
console.log(NewsEntry)