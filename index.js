console.log("This package is called do-not-use-this-pkg for a reason. Now prepare to lose your mind.")
let timer = 10
console.log("You have 10 seconds to stop using this package.")
const interval = setInterval(() => {
    timer--
    if (timer === 0) {
      console.log("BOOM! 💥💥💥💥💥💥💥💥💥")
      clearInterval(interval)
    }
    if (timer < 4) {
      console.log("Your computer will blow up in " + timer + " seconds")
    } else {
      console.log(`You have ${timer} seconds left to stop using this package.`)
    }
}, 1000)
