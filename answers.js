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
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

//Console log: the index of Titanic
console.log(favMovies.indexOf('Titanic'))

//1. use the .sort method. 
favMovies.sort()

    //Thought question: what did this do to the array? Did it permanently alter it?
    // it put it in alphabetical order; seems to be permanent for the purposes of logging/other methods

//2. Use the method pop
favMovies.pop()

//3. push "Guardians of the Galaxy"
favMovies.push("Guardians of the Galaxy")

//4. Reverse the array
favMovies.reverse()

//5. Use the shift method
favMovies.shift()

//6. unshift - what does it return?
favMovies.unshift("Guardians of the Galaxy")
    // it returns whatever I add and I just re-added Guardians

//7. splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
console.log(favMovies.indexOf('Django Unchained'))
favMovies.splice(15, 1, 'Avatar')
    // seems to have permanently altered it

//8. slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
console.log(favMovies.length)
console.log(favMovies.slice(10))
    // No, it just returns a slice of it

//9. store the value of your slice in a variable, console.log it - Thought question: what is going on here?
const halfFavMovies = favMovies.slice(10)
console.log(halfFavMovies)
    //A copy of the value of the slice of favMovies is now saved to halfFavMovies 

//10. console.log your final results
console.log(favMovies)
console.log(halfFavMovies)

// After running the above tasks, console.log the index of "Fast and Furious"-We removed it from the array, what value do we get when we look for the index of something that is not in the array?
    //So, actually I removed "Guardians of the Galaxy" and then readded it back because I did the "pop" after sorting, but I'll remove something to see.
    favMovies.pop()
    console.log(favMovies.indexOf('Black Panther'))
    // It shows it as -1! Weird. 
    favMovies.pop()
    console.log(favMovies.indexOf('Black Panther'))
    console.log(favMovies.indexOf('Cloud Atlas'))
    // You get -1 when you try to find the index of all popped items

// Thought question: that we declared the variable favMovies with const, and yet, we were allowed to change the array. Weird? Should we have used let?
    //No, because favMovies is our array of fave movies. Even if those individual movies change, it's still an array of our fave movies.

////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [
                    ["Timmy", "Frank"], 
                    "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", 
                            ["Baked Goods", "Waldo"]]
                ];

// Remove Eggbert (hint look at the slice/splice method(s))
whereIsWaldo.splice(1, 1)
console.log(whereIsWaldo)

// Change "Neff" to "No One"
whereIsWaldo[1].splice(2, 1, "No One")
console.log(whereIsWaldo)

// Access and console.log "Waldo"
console.log(whereIsWaldo[2][1][1])

////////////////////////////////
//  Excited Kitten
////////////////////////////////
//1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
for (let i = 1; i < 21; i++) {
    console.log("Love me, pet me! HSSSSSSSSS!")
}

//2. For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
const catThoughts = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]

for (let i = 1; i < 21; i++) {
    const randomCat = catThoughts[Math.round(Math.random() * 2)]
    if (i % 2 === 0) {
        console.log(randomCat)
    } else {console.log("Love me, pet me! HSSSSSSSSS!")}
}

////////////////////////////////
//  Find the Median
////////////////////////////////
//Find the median number in the following nums array, then console.log that number. - Hint if you check the length of the array / 2, you might get not get a whole number. In which case, look into Math.floor( // something )
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

nums.sort()
console.log(nums.length)
console.log(nums[13]) // It's 15

//*************************** */
// Hungry for More?
//*************************** */
////////////////////////////////
//  Lab Time Revisited: 
////////////////////////////////