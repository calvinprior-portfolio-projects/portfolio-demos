let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score");
let homeCurrentCount = 0
let guestCurrentCount = 0
let triggerNewGame = document.getElementById("new-game")

let homeWin = document.getElementById("home-wins")
let guestWin = document.getElementById("guest-wins")



let incrementOneHome = document.getElementById("home-inc-1-el")
let incrementTwoHome = document.getElementById("home-inc-2-el")
let incrementThreeHome = document.getElementById("home-inc-3-el")

let incrementOneGuest = document.getElementById("guest-inc-1-el")
let incrementTwoGuest = document.getElementById("guest-inc-2-el")
let incrementThreeGuest = document.getElementById("guest-inc-3-el")

//home functions

incrementOneHome.addEventListener("click", function () {
   
    homeScore.textContent = homeCurrentCount += 1
    
})

incrementTwoHome.addEventListener("click", function () {
    homeScore.textContent = homeCurrentCount += 2
    
})

incrementThreeHome.addEventListener("click", function () {
    homeScore.textContent = homeCurrentCount += 3
    
})

// guest functions


incrementOneGuest.addEventListener("click", function () {
    guestScore.textContent = guestCurrentCount += 1
})

incrementTwoGuest.addEventListener("click", function () {
    guestScore.textContent = guestCurrentCount += 2
    
})

incrementThreeGuest.addEventListener("click", function () {
    guestScore.textContent = guestCurrentCount += 3
    
})




triggerNewGame.addEventListener("click", function () {
    homeCurrentCount = 0;
    guestCurrentCount = 0;
    homeScore.innerHTML = homeCurrentCount;
    guestScore.innerHTML = guestCurrentCount;
    
})








