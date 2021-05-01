const contentTarget = document.getElementById("entry")
const eventHub = document.getElementById("state-fair")

eventHub.addEventListener("click",
    (event) => {
        if (event.target.id === "rideTicket") {
            const rideEvent = new CustomEvent("rideTicketPurchased")
            eventHub.dispatchEvent(rideEvent)           
        }
    })


export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="rideTicket">Ride Ticket</button>        
        </div>
    `
}

