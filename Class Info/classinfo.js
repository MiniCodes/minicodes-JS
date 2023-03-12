/* function to print class information for 
My first Java page */
function PrintClassInfo() {
    /* variables for my name, my teacher's name & 
    course name */
    let x = "Aunna"
    let y = "Kim Gross"
    let z = "Web Design II"

    // prints the name for class information
    document.getElementById("name").innerHTML = 
    "Name:" + " " + x;

    // prints the teacher's name for class information
    document.getElementById("teacherName").innerHTML = 
    "Course Name:" + " " + y;

    // prints the course's name for class information
    document.getElementById("courseName").innerHTML = 
    "Teacher Name:" + " " + z;
}