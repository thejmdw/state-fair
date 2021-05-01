const contentTarget = document.getElementById("food")
const eventHub = document.getElementById("state-fair")

export const FoodTicketHolders = () => {
    eventHub.addEventListener("foodTicketPurchased", customEvent => {
        contentTarget.innerHTML += `<div class="person eater"></div>`
    })
}

