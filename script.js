//variables
let level = 0
let hunger = 0
let tiredness = 0
let boredom = 0
let activity = "none"
let rediness = 0
let evolveAMT = 20
//html elements
const egg = document.getElementById("egg")
const kid = document.getElementById("Baby")
const teen = document.getElementById("Teen")
const hungerEl = document.getElementById("Hunger")
const tirednessEl = document.getElementById("Tiredness")
const boredomEl = document.getElementById("Boredom")

setInterval(() => {
    if (activity==="none") {
        hunger = hunger + 1
        tiredness = tiredness + 1
        boredom = boredom + 1
        refresh()
    } 
}, 1500);

async function stop() {
    refresh()
    await sleep(5000);
    activity = "none"
    rediness = rediness + 0.5
}

function feed() {
    if (activity==="none") {
        hunger = hunger - 5
        activity = "eating"
        refresh()
        stop()
    }
}
function sleep() {
    if (activity==="none") {
        tiredness = tiredness - 5
        activity = "sleeping"
        refresh()
        stop()
    }
}
function play() {
    if (activity==="none") {
        boredom = boredom - 5
        activity = "playing"
        refresh()
        stop()
    }
}

function refresh() {
    hungerEl.innerText = hunger
    boredomEl.innerText = boredom
    tirednessEl.innerText = tiredness
    if (tiredness<0){
        tiredness = 0
    }
    else if (boredom<0){
        boredom = 0
    }
    else if (hunger<0){
        hunger = 0
    };
    
    if (rediness===evolveAMT) {
        evolve()
        rediness = 0
    };
    if (level===0) {
        evolveAMT = 20
    }
    else if (level===1) {
        evolveAMT = 50
    }
    else if (level===2) {
        evolveAMT = 100
    }
    die()
}

function evolve() {
    level = level + 1
    alert("Congrats Your Pet Evolved!")
    if (level===0) {
        egg.style.display = "block"
        kid.style.display = "none"
        teen.style.display = "none"
    } else if (level===1) {
        egg.style.display = "none"
        kid.style.display = "block"
        teen.style.display = "none"
    } else if (level===2) {
        egg.style.display = "none"
        kid.style.display = "none"
        teen.style.display = "block"
    }
}

function die() {
    if (hunger>100) {
        init()
        alert("Your Pet Died From Hunger!")
        console.log("Your Pet Died")
    }
    else if (tiredness>100) {
        init()
        alert("Your Pet Died From Tiredness!")
        console.log("Your Pet Died")
    }
    else if (boredom>100) {
        init()
        alert("Your Pet Died From Boredem!")
        console.log("Your Pet Died")
    }
}

function init() {
    kid.style.display = "none"
    teen.style.display = "none"
    hunger = 0
    boredom = 0
    tiredness = 0   
}
init()
refresh()