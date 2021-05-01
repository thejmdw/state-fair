const contentTarget = document.getElementById("games")
const eventHub = document.getElementById("state-fair")

export const GameTicketHolders = () => {
    eventHub.addEventListener("gameTicketPurchased", customEvent => {
        contentTarget.innerHTML += `<div class="person player"></div>`
    })
}

