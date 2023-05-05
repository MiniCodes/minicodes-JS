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




/* function to display value of Scientific calculator
buttons */
function sciDisplay(val) {
    document.getElementById("calResults").value += val
}

// function to solve equation in Scientific calculator
function sciSolve() {
    calResults.value = eval(calResults.value)
}

/* function to delete 1 character from the Science 
Calculator; a backspace button */
function backspace() {
    calResults.value = calResults.value.substr(0, calResults.value.length-1);
}


// adds the Trig. sin function to science calculator
function sin() {
    calResults.value = Math.sin(calResults.value);
}

// adds the Trig. cos function to science calculator
function cos() {
    calResults.value = Math.cos(calResults.value);
}

// adds the Trig. tan function to science calculator
function tan() {
    calResults.value = Math.tan(calResults.value);
}


// adds the PI function to science calculator
function pi() {
    calResults.value += Math.PI;
}


/* function that square roots the current numbers in science 
calculator */
function sqrt() {
    calResults.value = Math.sqrt(calResults.value, 2);
}

// squares the current numbers in science calculator by 2
function squared() {
    calResults.value = Math.pow(calResults.value, 2);
}

/* function finds the factorial of a positive integer; finds 
the factorial of the numbered entered in science calculator */
function fact() {
    var i, num, f;

    f = 1;
    num = calResults.value;

    for(i=1; i<=num; i++) {
        f = f*i;
    }

    i = i-1;

    calResults.value = f;
}


// adds the log function to science calculator
function log() {
    calResults.value = Math.log(calResults.value);
}

// Adds the log base 2 function to science calculator 
function logBase2() {
    calResults.value = Math.log2(calResults.value);
}

// Adds the log base 10 function to science calculator 
function logBase10() {
    calResults.value = Math.log10(calResults.value);
}


/* Function takes 10 to the power of what the user enters into
the science calcualtor */
function tenPowers() {
    calResults.value = Math.pow(10, calResults.value);
}

/* function returns the exponent of what's entered into the
science calculator */
function exponent() {
    calResults.value = Math.exp(calResults.value);
}

// function finds the absolute of the entered number
function absolute() {
    calResults.value = Math.abs(calResults.value);
}