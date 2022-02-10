pins.touchSetMode(TouchTarget.P1, TouchTargetMode.Capacitive)
pins.touchSetMode(TouchTarget.P2, TouchTargetMode.Capacitive)
let game_start = false
let cheat = false
control.inBackground(function pozadi() {
    
    game_start = false
    basic.pause(randint(3000, 10000))
    if (cheat == false) {
        game_start = true
        basic.showIcon(IconNames.Yes)
        music.playTone(Note.C, 1500)
    }
    
})
basic.forever(function Hra() {
    
    let P1 = input.pinIsPressed(TouchPin.P1)
    let P2 = input.pinIsPressed(TouchPin.P2)
    if (game_start == true) {
        if (P1 && P2) {
            basic.showString("R")
            game_start = false
        }
        
        if (P1 == true && P2 == false) {
            basic.showNumber(1)
            game_start = false
        }
        
        if (P1 == false && P2 == true) {
            basic.showNumber(2)
            game_start = false
        }
        
    } else {
        if (P1 && P2) {
            basic.showString("C")
            game_start = false
            cheat = true
        }
        
        if (P1 == true && P2 == false) {
            basic.showString("B")
            game_start = false
            cheat = true
        }
        
        if (P1 == false && P2 == true) {
            basic.showString("A")
            game_start = false
            cheat = true
        }
        
    }
    
})
