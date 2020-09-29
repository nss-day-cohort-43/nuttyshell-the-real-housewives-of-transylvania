const eventHub = document.querySelector(".hubEvent")
const dashboard = document.querySelector(".")
eventHub.addEventListener("click", event => {
    debugger;
    if (event.target.id.startsWith("addFriend-")) {
        const [prefix, id] = event.target.id.split("-");
        alert("you wanna add this person?")
    }
})

