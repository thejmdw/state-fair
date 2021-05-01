const contentTarget = document.getElementById("rides")
const eventHub = document.getElementById("state-fair")

export const RideTicketHolders = () => {
    eventHub.addEventListener("rideTicketPurchased", customEvent => {
        contentTarget.innerHTML += `<div class="person rider"></div>`
    })
}

