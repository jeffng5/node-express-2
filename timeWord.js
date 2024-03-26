

function literalTime(timeInput) {
    console.log(timeInput)
    const splittedTime = timeInput.toString().split(':')
    // console.log(splittedTime[0])
    const x = splittedTime[0]
    const y = splittedTime[1]

    let a = Number.isInteger(Number(x[0]))
    let b = Number.isInteger(Number(x[1]))
    let c = Number.isInteger(Number(y[0]))
    let d = Number.isInteger(Number(y[1]))

    if (a == false || a < 9 == false) { return console.log("invalid time") }
    if (b == false || b < 9 == false) { return console.log("invalid time") }
    if (c == false || c < 9 == false) { return console.log("invalid time") }
    if (d == false || d < 9 == false) { return console.log("invalid time") }

    // if (Number(y[0]) || Number(y[1]) == False) {return console.log("invalid time")}
    // if (Number.isInteger(x[0]) == false)
    //      {return console.log("invalid time")}
    // if (Number.isInteger(y[0]) == false)
    //      {return console.log("invalid time")}
    // if (x[0] > 1){return console.log("invalid time")}
    // if (y[0] > 5){return console.log("invalid time")}

    val = []
    if (x[0] == 0 && x[1] == 0) { val.push("twelve") }
    if (x[1] == 1 && x[0] == 0) { val.push("one") }
    if (x[1] == 2 && x[0] == 0) { val.push("two") }
    if (x[1] == 3 && x[0] == 0) { val.push("three") }
    if (x[1] == 5 && x[0] == 0) { val.push("five") }
    if (x[1] == 6 && x[0] == 0) { val.push("six") }
    if (x[1] == 7 && x[0] == 0) { val.push("seven") }
    if (x[1] == 8 && x[0] == 0) { val.push("eight") }
    if (x[1] == 9 && x[0] == 0) { val.push("nine") }
    if (x[0] == 1 && x[1] == 0) { val.push("ten") }
    if (x[0] == 1 && x[1] == 1) { val.push("eleven") }
    if (x[0] == 1 && x[1] == 2) { val.push("twelve") }
    if (x[0] == 1 && x[1] == 3) { val.push("one") }
    if (x[0] == 1 && x[1] == 4) { val.push("two") }
    if (x[0] == 1 && x[1] == 5) { val.push("three") }
    if (x[0] == 1 && x[1] == 6) { val.push("four") }
    if (x[0] == 1 && x[1] == 7) { val.push("five") }
    if (x[0] == 1 && x[1] == 8) { val.push("six") }
    if (x[0] == 1 && x[1] == 9) { val.push("seven") }
    if (x[0] == 2 && x[1] == 0) { val.push("eight") }
    if (x[0] == 2 && x[1] == 1) { val.push("nine") }
    if (x[0] == 2 && x[1] == 2) { val.push("ten") }
    if (x[0] == 2 && x[1] == 3) { val.push("eleven") }





    // } 
    // console.log(y)
    // y forEach y.map{
    if (y[0] == 0 && y[1] != 0) { val.push(`oh`) }
    if (y[0] == 2) { val.push("twenty") }
    if (y[0] == 3) { val.push("thirty") }
    if (y[0] == 4) { val.push("forty") }
    if (y[0] == 5) { val.push("fifty") }
    if (y[1] == 1) { val.push("one") }
    if (y[1] == 2) { val.push("two") }
    if (y[1] == 3) { val.push("three") }
    if (y[1] == 4) { val.push("four") }
    if (y[1] == 5) { val.push("five") }
    if (y[1] == 6) { val.push("six") }
    if (y[1] == 7) { val.push("seven") }
    if (y[1] == 8) { val.push("eight") }
    if (y[1] == 9) { val.push("nine") }
    if (y[0] == 1 && y[1] == 0) { val.push("ten") }
    if (y[0] == 1 && y[1] == 1) { val.push("eleven") }
    if (y[0] == 1 && y[1] == 2) { val.push("twelve") }
    
    if (y[0] == 0 && y[1] == 0) { val.push("o'clock") }


    if (x <= 11) {val.push("am") }
    if (x > 11 && x <= 23) {val.push("pm") }
    if (x[0] == 0 && x[1] == 0 && y[0] == 0 && y[1] == 0) { return ("midnight") }
    if (x[0] == 1 && x[1] == 2 && y[0] == 0 && y[1] == 0) {return ('noon') }
    else {
        const out = val.join(" ")
        return out
    }
    // return val.join(" ")
}

literalTime('1:00')


module.exports = { literalTime };