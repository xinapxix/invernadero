basic.forever(function () {
    while (input.buttonIsPressed(Button.AB)) {
        if (input.temperature() >= 8 && input.temperature() <= 30) {
            basic.showString("TN")
        } else {
            if (input.temperature() > 30) {
                basic.showString("TA")
                music.playTone(988, music.beat(BeatFraction.Double))
            } else {
                basic.showString("TB")
                music.playTone(131, music.beat(BeatFraction.Breve))
            }
        }
        if (pins.analogReadPin(AnalogPin.P1) >= 200 && pins.analogReadPin(AnalogPin.P1) <= 600) {
            basic.showString("HN")
        } else {
            if (pins.analogReadPin(AnalogPin.P1) > 600) {
                basic.showString("HA")
                music.playTone(587, music.beat(BeatFraction.Double))
            } else {
                basic.showString("HB")
                music.playTone(247, music.beat(BeatFraction.Breve))
            }
        }
    }
    while (input.buttonIsPressed(Button.A)) {
        if (input.temperature() >= 8 && input.temperature() <= 30) {
            basic.showString("TN")
        } else {
            if (input.temperature() > 30) {
                basic.showString("TA")
                music.playTone(988, music.beat(BeatFraction.Double))
            } else {
                basic.showString("TB")
                music.playTone(131, music.beat(BeatFraction.Breve))
            }
        }
    }
    while (input.buttonIsPressed(Button.B)) {
        if (pins.analogReadPin(AnalogPin.P1) >= 200 && pins.analogReadPin(AnalogPin.P1) <= 600) {
            basic.showString("HN")
        } else {
            if (pins.analogReadPin(AnalogPin.P1) > 600) {
                basic.showString("HA")
                music.playTone(587, music.beat(BeatFraction.Double))
            } else {
                basic.showString("HB")
                music.playTone(247, music.beat(BeatFraction.Breve))
            }
        }
    }
})
