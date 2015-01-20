
// Validating Empty Field
function check_empty() {
if (document.getElementById('fullname').value == "" || document.getElementById('effatemail').value == "") {
alert("Please enter a name and an Effat email to join.");
} else {
document.getElementById('form').submit();
alert("Submitted Successfully!");
}
}
//Function To Display Popup
function div_show() {
document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
document.getElementById('abc').style.display = "none";
}