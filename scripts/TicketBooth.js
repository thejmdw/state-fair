const contentTarget = document.getElementById("entry")
const eventHub = document.getElementById("state-fair")

eventHub.addEventListener("click",
    (event) => {
        if (event.target.id === "rideTicket") {
            const rideEvent = new CustomEvent("rideTicketPurchased")
            eventHub.dispatchEvent(rideEvent)           
        }
    })

eventHub.addEventListener("click",
    (event) => {
        if (event.target.id === "foodTicket") {
            const foodEvent = new CustomEvent("foodTicketPurchased")
            eventHub.dispatchEvent(foodEvent)            
        }
    })
    
eventHub.addEventListener("click",
    (event) => {
        if (event.target.id === "gameTicket") {
            const gameEvent = new CustomEvent("gameTicketPurchased")
            eventHub.dispatchEvent(gameEvent)            
        }
    })
    
eventHub.addEventListener("click",
    (event) => {
        if (event.target.id === "sideshowTicket") {
            const sideshowEvent = new CustomEvent("sideshowTicketPurchased")
            eventHub.dispatchEvent(sideshowEvent)            
        }
    })
    
eventHub.addEventListener("click",
    (event) => {
        if (event.target.id === "packageTicket") {
            const fullPackageEvent = new CustomEvent("packageTicketPurchased")
            eventHub.dispatchEvent(fullPackageEvent)            
        }
    })

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="rideTicket">Ride Ticket</button>
        <button id="foodTicket">Food Ticket</button>
        <button id="gameTicket">Game Ticket</button>
        <button id="sideshowTicket">Sideshow Ticket</button>
        <button id="packageTicket">Full Package Ticket</button>
        </div>
    `
}

