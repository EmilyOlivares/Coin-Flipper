// TODO: Declare any global variables we need
let numberHeads = 0; 
let numberTails = 0;
let percentHeads = 0;
let percentTails = 0;
let result = 0;
 let totalFlips = 0;
let image = document.querySelector("img")
let message = document.querySelector("#result")
let flip = doucument.querySelector("#flip")
let clear
document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons
    flip.button.addEventListener("click", function(e){

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        totalFlips ++
        let result = Math.round(Math.random() * 100)
        // TODO: Update image and status message in the DOM
        console.log(result);
        if (result <= 50){
            numberHeads ++
image.src = "C:\Users\emily\Coin-Flipper\assets\images\penny-heads.jpg"
message.textContent = 'you flipped tails!!!'
} else if ( result > 50){
    numberTails ++
image.src = "C:\Users\emily\Coin-Flipper\assets\images\penny-tails.jpg"
message.textContent = 'you flipped tails!!!'
}percentHeads = (numberHeads/totalFlips) * 100
percentTails = (numberTails/totalFlips) * 100
console.log("numberTails",numberTails)
console.log("percentTails",percentTails)

handsArea.textContent = '${numberHeads}'
handsPercentArea.textContent = '{numberTails'
})
        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell
clearButton.addEventListener("click", functions(e)){
    
}
    })
    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

