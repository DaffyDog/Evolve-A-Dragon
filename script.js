//variables
let level = 0
let hunger = 0
let tiredness = 0
let boredom = 0
let gems = 0
let activity = "none"
let rediness = 0
let evolveAMT = 20
let activityBefore = "none"
let pet = "none"
let paused = 0
let foodsHide = 0 
//html elements 
//dragon
const egg = document.getElementById("egg")
const kid = document.getElementById("Kid")
const teen = document.getElementById("Teen")
const petDragon = document.getElementById("petDragon")
//cat
const kitten = document.getElementById("kitten")
const baby = document.getElementById("Baby")
const cat = document.getElementById("cat")
const petCat = document.getElementById("petCat")
//bunny
const bunny = document.getElementById("Bunny")
const kit = document.getElementById("Kit")
const rabbit = document.getElementById("Rabbit")
const petBunny = document.getElementById("petBunny")
//other
const hungerEl = document.getElementById("Hunger")
const tirednessEl = document.getElementById("Tiredness")
const boredomEl = document.getElementById("Boredom")
const gemsEl = document.getElementById("gems")
const foodEl = document.getElementById("foods")
const mainEl = document.getElementById("Main")
const choice = document.getElementById("Selections")


function init() {
    if (pet==="dragon") {
        kid.style.display = "none"
        teen.style.display = "none"
        egg.style.display = "block"
        petCat.style.display = "none"
        petBunny.style.display = "none"
    }else if (pet==="cat") {
        baby.style.display = "none"
        cat.style.display = "none"
        kitten.style.display = "block"
        petDragon.style.display = "none"
        petBunny.style.display = "none"
    }else if (pet==="bunny") {
        kit.style.display = "none"
        rabbit.style.display = "none"
        bunny.style.display = "block"
        petDragon.style.display = "none"
        petCat.style.display = "none"
    }
    hunger = 0
    boredom = 0
    tiredness = 0   
    refresh()
    mainEl.style.display = "none"
}

function pause() {
    if (paused===0) {
        paused = 1
    }else if (paused===1) {
        paused = 0
    }
}

function choiceBunny() {
    pet = "bunny"
    init()
    mainEl.style.display = "block"
    choice.style.display = "none"
}
function choiceCat() {
    pet = "cat"
    init()
    mainEl.style.display = "block"
    choice.style.display = "none"
}
function choiceDragon() {
    pet = "dragon"
    init()
    mainEl.style.display = "block"
    choice.style.display = "none"
}

setInterval(() => {
    if (paused===0) {
        if (activity==="none") {
            if (activityBefore==="none") {
                hunger = hunger + 1
                tiredness = tiredness + 1
                boredom = boredom + 1
            }else if (activityBefore==="eat") {
                tiredness = tiredness + 1
                boredom = boredom + 1
            }else if (activityBefore==="sleep") {
                hunger = hunger + 1
                boredom = boredom + 1
            }else if (activityBefore==="play") {
                hunger = hunger + 1
                tiredness = tiredness + 1
            }else {
                hunger = hunger + 1
                tiredness = tiredness + 1
                boredom = boredom + 1
            }
            
            refresh()
        } 
    }
}, 1500);

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function stop() {
    refresh()
    await delay(5000);
    activity = "none"
    rediness = rediness + 0.5
    if (pet==="dragon") {
        if (level===0) {
                egg.innerText = `
                           _  
                         (   )  
                        (     )
                         ( _ )
                `
            } else if (level===1) {
                kid.innerText = `
                       /\\/\\  /\\/\\
                    <>|  \\ \\/ • _)
                    /\\\\___\\/   /
                    \\_________/
                       U U U U
                              
                `
            }else if (level===2) {
                teen.innerText = `
                       / \\ /\\   /\\/\\_ 
                       \\  \\  \\ / •  _) 
                    <>  \\_ _ _/    /
                    /\\_/          /
                    \\____________/
                       U U    U U            
                `
            }
        } else if (pet==="cat") {
        if (level===0) {
                kitten.innerText = `
                     /^—^\\
                  /\\(  •• )
                  \\______/    
                `
            } else if (level===1) {
                baby.innerText = `
                 /\\  /^—^\\
                 \\/ (  •• )
                 /\\/    /
                 \\_____/        
                `
            }else if (level===2) {
                cat.innerText = `
                 /\\  /^—^\\
                 \\/ (  •• )
                 /\\_/    /
                 \\______/  
                  UU  UU   
                `
            }
        }else if (pet==="bunny") {
        if (level===0) {
                bunny.innerText = `
                     (\\/)
                    ( •.•) 
                   o((")(")
                `
            } else if (level===1) {
                kit.innerText = `
                     (\\/)
                    ( •.•) 
                    (  UU)
                   0((")(")   
                `
            }else if (level===2) {
                rabbit.innerText = `
                    (\\  /)
                     \\\\//
                    ( •.•) 
                    (  UU)
                   0((")(")            
                `
            }
    await delay(2500);
    activityBefore = "none"   
}    
}

function feed() {
    if (paused===0) {
        if (foodsHide===0) {
            foodEl.style.display = "none"
            foodsHide = 1
        } else if (foodsHide===1) {
            foodEl.style.display = "block" 
            foodsHide = 0
        }
    }
}
//foods
function fish1() {
    if (activity==="none") {
        if (pet==="cat") {
            hunger = hunger - 5
            activity = "eating"
            activityBefore = "eating"
            stop()
        }else {
            hunger = hunger - 1
            activity = "eating"
            activityBefore = "eating"
            stop()
        }
    }
}
function exp1() {
    if (activity==="none") {
        if (pet==="dragon") {
            hunger = hunger - 5
            activity = "eating"
            activityBefore = "eating"
            stop()
        }else {
            hunger = hunger - 1
            activity = "eating"
            activityBefore = "eating"
            stop()
        }
    }
}
function vege1() {
    if (activity==="none") {
        if (pet==="bunny") {
            hunger = hunger - 5
            activity = "eating"
            activityBefore = "eating"
            stop()
        }else {
            hunger = hunger - 1
            activity = "eating"
            activityBefore = "eating"
            stop()
        }
    }
}
function fish2() {
    if (activity==="none") {
        if (pet==="cat") {
            hunger = hunger - 10
            activity = "eating"
            activityBefore = "eating"
            stop()
        }else {
            hunger = hunger - 1
            activity = "eating"
            activityBefore = "eating"
            stop()
        }
    }
}
function exp2() {
    if (activity==="none") {
        if (pet==="dragon") {
            hunger = hunger - 10
            activity = "eating"
            activityBefore = "eating"
            stop()
        }else {
            hunger = hunger - 1
            activity = "eating"
            activityBefore = "eating"
            stop()
        }
    }
}
function vege2() {
    if (activity==="none") {
        if (pet==="bunny") {
            hunger = hunger - 10
            activity = "eating"
            activityBefore = "eating"
            stop()
        }else {
            hunger = hunger - 1
            activity = "eating"
            activityBefore = "eating"
            stop()
        }
    }
}
function sleep() {
    if (paused===0) {
        if (activity==="none") {
            tiredness = tiredness - 5
            activity = "sleeping"
            activityBefore = "sleep"
            refresh()
            if (pet==="dragon") {
                if (level===0) {
                    egg.innerText = `
                               _    ZZZ
                             (   )  
                            (     )
                             ( _ )
                    `
                } else if (level===1) {
                    kid.innerText = `
                           /\\/\\  /\\/\\  ZZZZ
                        <>|  \\ \\/ - _)
                        /\\\\___\\/   /
                        \\_________/
                           U U U U            
                    `
                }else if (level===2) {
                    teen.innerText = `
                           / \\ /\\   /\\/\\_   ZZZZZ
                           \\  \\  \\ / -  _) 
                        <>  \\_ _ _/    /
                        /\\_/          /
                        \\____________/
                           U U    U U            
                    `
                } 
            
        } else if (pet==="cat") {
            if (level===0) {
                    kitten.innerText = `
                         /^—^\\ zzz
                      /\\(  -- )
                      \\______/    
                    `
                } else if (level===1) {
                    baby.innerText = `
                     /\\  /^—^\\ zzzz
                     \\/ (  -- )
                     /\\/    /
                     \\_____/        
                    `
                }else if (level===2) {
                    cat.innerText = `
                     /\\  /^—^\\ zzzzz
                     \\/ (  -- )
                     /\\_/    /
                     \\______/  
                      UU  UU   
                    `
                }
            }else if (pet==="bunny") {
            if (level===0) {
                    bunny.innerText = `
                      (\\/) zzz
                     ( -.-) 
                    o((")(")   
                    `
                } else if (level===1) {
                    kit.innerText = `
                      (\\/) zzzz
                     ( -.-) 
                     (  UU)
                    0((")(")     
                    `
                }else if (level===2) {
                    rabbit.innerText = `
                     (\\  /)
                      \\\\// ZZZZZ
                     ( -.-) 
                     (  UU)
                    0((")(")
                    `
                }
            }
            stop()
        }
    }
}
function play() {
    if (paused===0) {
        if (activity==="none") {
            boredom = boredom - 5
            activity = "playing"
            activityBefore = "play"
            refresh()
            if (pet==="dragon") {
                if (level===0) {
                    egg.innerText = `
                               _  
                             (   )  
                            (     )
                             ( _ )
                    `
                } else if (level===1) {
                    kid.innerText = `
                           /\\/\\  /\\/\\ 
                        <>|  \\ \\/ > _) 🔥
                        /\\\\___\\/   /
                        \\_________/
                           U U U U            
                    `
                }else if (level===2) {
                    teen.innerText = `
                           / \\ /\\   /\\/\\_ 
                           \\  \\  \\ / >  _) 🔥
                        <>  \\_ _ _/    /
                        /\\_/          /
                        \\____________/
                           U U    U U            
                    `
                } 
            }else if (pet==="cat") {
                    if (level===0) {
                        kitten.innerText = `
                              /^—^\\
                          /\\(  ^^ )
                          \\______/  
                        `
                    } else if (level===1) {
                        baby.innerText = `
                         /\\  /^—^\\
                         \\/ (  ^^ )
                         /\\/    /
                         \\_____/        
                        `
                    }else if (level===2) {
                        cat.innerText = `
                         /\\  /^—^\\
                         \\/ (  ^^ )
                         /\\_/    /
                         \\______/  
                          UU  UU   
                        `
                    }
            }else if (pet==="bunny") {
                    if (level===0) {
                        bunny.innerText = `
                          (\\/)
                         ( ^.^) 
                        o((")(")                          
                        `
                    } else if (level===1) {
                        kit.innerText = `
                         (\\/)
                        ( ^.^) 
                        (  UU)
                       0((")(")          
                        `
                    }else if (level===2) {
                        rabbit.innerText = `
                         (\\  /)
                          \\\\//
                         ( ^.^) 
                         (  UU)
                        0((")(")
                        `
                    }
            }                
            stop()
        }
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
        evolveAMT = 5
    }
    else if (level===1) {
        evolveAMT = 12.5
    }
    else if (level===2) {
        evolveAMT = 25
    }
    die()
}

function evolve() {
    level = level + 1
    alert("Congrats Your Pet Evolved!")
    if (pet==="dragon") {
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
    } else if (pet==="cat") {
        if (level===0) {
            kitten.style.display = "block"
            baby.style.display = "none"
            cat.style.display = "none"
        } else if (level===1) {
            kitten.style.display = "none"
            baby.style.display = "block"
            cat.style.display = "none"
        } else if (level===2) {
            kitten.style.display = "none"
            baby.style.display = "none"
            cat.style.display = "block"
        }
    } else if (pet==="bunny") {
            if (level===0) {
            bunny.style.display = "block"
            kit.style.display = "none"
            rabbit.style.display = "none"
        } else if (level===1) {
            bunny.style.display = "none"
            kit.style.display = "block"
            rabbit.style.display = "none"
        } else if (level===2) {
            bunny.style.display = "none"
            kit.style.display = "none"
            rabbit.style.display = "block"
        }
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
        alert("Your Pet Died From boredom!")
        console.log("Your Pet Died")
    }
}


init()
