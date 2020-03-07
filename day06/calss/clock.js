class Clock {
    constructor(format) {
        let d = new Date()
        console.log(format.replace("h", d.getHours()).replace("m", d.getMinutes()).replace("s", d.getSeconds()));
    }
}

let c = new Clock("m:s:h")
let c1 = new Clock("h:m:s")
let c2 = new Clock("s:h:m")


