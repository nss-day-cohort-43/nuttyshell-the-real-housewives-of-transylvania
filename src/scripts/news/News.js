/*
 *  Purpose: To render a single news article entry as an
 *           HTML representation of the data
 */
import { newsDelete } from "./NewsDelete.js"

export const NewsEntry = (newEntry) => {
    return `
        <p><section id="entry--${newEntry.id}" class="journalEntry">
        <div class="entry--date">Date: ${newEntry.date}</div> 
        <div class="entry--concept">Title: ${newEntry.title}</div>
        <div class="entry--entry">Synopsis: ${newEntry.content}</div>
        <div class="entry--mood">Full Story: <a href="${newEntry.source}">Click Here</a></div>
    
        
        </p>
        </section>
    `
}
