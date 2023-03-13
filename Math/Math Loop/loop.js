// Sets Number Results to 0
var numResults = 0

// Loops & adds the user's inputs together
function LoopMath() {
    // Collects input number from user
    var numInput = document.getElementById("loopInput").value
    
    // Converts the input into an integer
    numInput = parseInt(numInput)

    // Used to see inputs for testing
    /*document.getElementById("loopDisplay").innerHTML = 
    numInput;*/

    if (numInput == -1) {
        // prints results when the user inputs "-1"
        document.getElementById("loopDisplay").innerHTML = 
        numResults;
    } else {
        // adds inputs together & stors the product of the two numbers
        numResults = numInput + numResults

        // prints the product of the Number Results
        /*document.getElementById("loopDisplay").innerHTML = 
        numResults;*/
    }
}