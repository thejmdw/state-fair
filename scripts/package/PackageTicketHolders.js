const contentTargetSideshow = document.getElementById("sideshow")
const contentTargetGames = document.getElementById("games")
const contentTargetFood = document.getElementById("food")
const contentTargetRides = document.getElementById("rides")
const eventHub = document.getElementById("state-fair")

export const PackageTicketHolders = () => {
    eventHub.addEventListener("packageTicketPurchased", customEvent => {
        contentTargetSideshow.innerHTML += `<div class="person bigSpender"></div>`
        contentTargetGames.innerHTML += `<div class="person bigSpender"></div>`
        contentTargetFood.innerHTML += `<div class="person bigSpender"></div>`
        contentTargetRides.innerHTML += `<div class="person bigSpender"></div>`
    })
}

