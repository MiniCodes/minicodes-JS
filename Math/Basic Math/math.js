// function to print the given variable & asked for number
function PrintMath() {
    // variable of x
    var x = 24

    // value of favNum is inputted by user
    var favNum = document.getElementById("favNumber").value;
    
    // converts string of favNum into an integer
    var favNum = parseInt(favNum)

    // adds the variables x and favNum together to get answer
    if (favNum != null) {
        document.getElementById("math").innerHTML = 
        x + favNum;
    }
}