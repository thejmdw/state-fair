const contentTarget = document.getElementById("customers")
const eventHub = document.getElementById("state-fair")

let ticketsSold = 0

contentTarget.innerHTML = `Number of Tickets Sold: ${ticketsSold}`


export const TicketCounter = () => {
    eventHub.addEventListener("ticketAdded", customEvent => {
        ticketsSold++
        contentTarget.innerHTML = `Number of tickets sold: ${ticketsSold}`
    })
}
