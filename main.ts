function mkUniv (num: number) {
    Uni = []
    for (let index = 0; index < num * num; index++) {
        if (randint(0, 10) > 6) {
            Uni.push(randint(2, 6))
        } else {
            Uni.push(0)
        }
    }
    for (let index = 0; index < 20; index++) {
        Uni.insertAt(randint(0, num * num), 30)
    }
}
input.onButtonPressed(Button.A, function () {
    dir += 1
    if (dir > 7) {
        dir = 0
    }
})
function shoUni (xs: number, ys: number) {
    for (let Yn = 0; Yn <= 4; Yn++) {
        for (let Xn = 0; Xn <= 4; Xn++) {
            v = 7 * Uni[spot(xs + Xn, ys + Yn)]
            led.plotBrightness(Xn, Yn, v)
        }
    }
}
input.onButtonPressed(Button.B, function () {
    dir += -1
    if (dir < 0) {
        dir = 7
    }
})
function spot (xx: number, yy: number) {
    return (xx + yy * Diam) % (Diam * Diam)
}
let v = 0
let Uni: number[] = []
let Y = 0
let X = 0
let Diam = 0
let dir = 0
dir = 0
Diam = 40
mkUniv(Diam)
shoUni(X, Y)
let dx = [
0,
1,
1,
1,
0,
-1,
-1,
-1
]
let dy = [
-1,
-1,
0,
1,
1,
1,
0,
-1
]
basic.forever(function () {
    let Xn2 = 0
    X = X + dx[dir]
    if (X >= Diam) {
        X = 0
    }
    if (X < 0) {
        X = Diam
    }
    Y = Y + dy[dir]
    if (Xn2 >= Diam) {
        Y = 0
    }
    if (Y < 0) {
        Y = Diam
    }
    shoUni(X, Y)
    if (200 < led.pointBrightness(2, 2)) {
        music.play(music.tonePlayable(131, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    led.plot(2, 2)
    basic.pause(200)
})
