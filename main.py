pins.touch_set_mode(TouchTarget.P1, TouchTargetMode.CAPACITIVE)
pins.touch_set_mode(TouchTarget.P2, TouchTargetMode.CAPACITIVE)
game_start = False
cheat = False

def pozadi():
    global game_start
    game_start = False
    basic.pause(randint(3000, 10000))
    if cheat == False:
        game_start = True
        basic.show_icon(IconNames.YES)
        music.play_tone(Note.C, 1500)
control.in_background(pozadi)


def Hra():
    global game_start, cheat
    P1 = input.pin_is_pressed(TouchPin.P1)
    P2 = input.pin_is_pressed(TouchPin.P2)
    if game_start == True:
        if P1 and P2:
            basic.show_string("R")
            game_start = False

        if P1 == True and P2 == False:
            basic.show_number(1)
            game_start = False

        if P1 == False and P2 == True:
            basic.show_number(2)
            game_start = False
    else:
        if P1 and P2:
            basic.show_string("C")
            game_start = False
            cheat = True

        if P1 == True and P2 == False:
            basic.show_string("B")
            game_start = False
            cheat = True

        if P1 == False and P2 == True:
            basic.show_string("A")
            game_start = False
            cheat = True

basic.forever(Hra)
