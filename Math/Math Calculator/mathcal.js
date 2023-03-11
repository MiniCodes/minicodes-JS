// function for Math Calculator for Addition
function CalAdd() {
    // stores the user inputted calculation numbers
    let firstCalNum = document.getElementById("calInput1").value;
    let secondCalNum = document.getElementById("calInput2").value;

    // converts the stored numbers into integers
    firstCalNum = parseInt(firstCalNum);
    secondCalNum = parseInt(secondCalNum);

    // For testing number values when things break
    /* document.getElementById("testP").innerHTML = 
    firstCalNum + "<br>" + secondCalNum;
    */

    // prints answer for the user inputted numbers
    if (firstCalNum != null && secondCalNum != null) {
        document.getElementById("calProduct").innerHTML =
        firstCalNum + secondCalNum;
    }
}

// function for Math Calculator for Subtraction
function CalSub() {
    // stores the user inputted calculation numbers
    let firstCalNum = document.getElementById("calInput1").value;
    let secondCalNum = document.getElementById("calInput2").value;

    // converts the stored numbers into integers
    firstCalNum = parseInt(firstCalNum);
    secondCalNum = parseInt(secondCalNum);

    // For testing number values when things break
    /* document.getElementById("testP").innerHTML = 
    firstCalNum + "<br>" + secondCalNum;
    */

    // prints answer for the user inputted numbers
    if (firstCalNum != null && secondCalNum != null) {
        document.getElementById("calProduct").innerHTML =
        firstCalNum - secondCalNum;
    }
}

// function for Math Calculator for Multiplication
function CalMultiply() {
    // stores the user inputted calculation numbers
    let firstCalNum = document.getElementById("calInput1").value;
    let secondCalNum = document.getElementById("calInput2").value;

    // converts the stored numbers into integers
    firstCalNum = parseInt(firstCalNum);
    secondCalNum = parseInt(secondCalNum);

    // For testing number values when things break
    /* document.getElementById("testP").innerHTML = 
    firstCalNum + "<br>" + secondCalNum;
    */

    // prints answer for the user inputted numbers
    if (firstCalNum != null && secondCalNum != null) {
        document.getElementById("calProduct").innerHTML =
        firstCalNum * secondCalNum;
    }
}

// function for Math Calculator for Division
function CalDivide() {
    // stores the user inputted calculation numbers
    let firstCalNum = document.getElementById("calInput1").value;
    let secondCalNum = document.getElementById("calInput2").value;

    // converts the stored numbers into integers
    firstCalNum = parseInt(firstCalNum);
    secondCalNum = parseInt(secondCalNum);
    
    // For testing number values when things break
    /* document.getElementById("testP").innerHTML = 
    firstCalNum + "<br>" + secondCalNum;
    */

    // prints answer for the user inputted numbers
    if (firstCalNum != null && secondCalNum != null) {
        document.getElementById("calProduct").innerHTML =
        firstCalNum / secondCalNum;
    }
}