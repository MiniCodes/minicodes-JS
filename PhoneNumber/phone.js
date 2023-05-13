var person = {firstName:'', lastName:'', address:'', email:'', phoneNum:''};

// Creates new user account
function createNewAcc() {
    person.firstName = document.getElementsByName('userFName');

    person.lastName = document.getElementsByName('userLName');

    person.address = document.getElementsByName('userHomeAddress');
}

// prints contact information
function printContactInfo() {

    createNewAcc()
    

    document.getElementById('contactPrint').innerHTML = 
    "Hello " + person.firstName + "" + person.lastName + 
    ", thank you for making a new account with us!" + "<br>" +
    "We will be sending a welcome package to this address: " + 
    person.address + "!"
}