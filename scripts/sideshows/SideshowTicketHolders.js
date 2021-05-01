const contentTarget = document.getElementById("sideshow")
const eventHub = document.getElementById("state-fair")

export const SideshowTicketHolders = () => {
    eventHub.addEventListener("sideshowTicketPurchased", customEvent => {
        contentTarget.innerHTML += `<div class="person gawker"></div>`
    })
}

