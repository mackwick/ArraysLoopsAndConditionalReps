//*************************** */
// Part I: HTML & CSS
//*************************** */
// Rank your comfort with the following material on a scale of 1-5
    // HTML Intro ==> 5
    // HTML Elements ==> 5
    // CSS Intro ==> 5
    // CSS Basics ==> 5

//*************************** */
// Part II: JavaScript Reps
//*************************** */
////////////////////////////////
// Easy Going
////////////////////////////////
for (let i = 1; i<21; i++) {
    console.log(i)
}

// ////////////////////////////////
// Get Even
// ////////////////////////////////
for (let i = 0; i<201; i += 2) {
    console.log(i)
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////
for (let i = 1; i<101; i++) {
   if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz")
   } else if (i % 3 === 0) {
    console.log("Fizz")
   } else if (i % 5 === 0) {
    console.log("Buzz")
  } else {console.log(i)}
}

////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

//1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2] = 21

//2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = "Gotham City"

//3. Give D'Art a second hometown by adding "Hawkins"
dart.push("Hawkins")

//4. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
wolfy[0] = "Gameboy"

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]

for (let turtle of ninjaTurtles) {
    console.log(turtle.toUpperCase())
}

////////////////////////////////
// Methods, Revisited
////////////////////////////////


////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////



//*************************** */
// Hungry for More?
//*************************** */
////////////////////////////////
//  Lab Time Revisited: 
////////////////////////////////