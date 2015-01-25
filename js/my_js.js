
// Validating Empty Field
function check_empty() {
if (document.getElementById('fullname').value == "" || document.getElementById('effatemail').value == "") {
alert("Please enter a name and an effat email to join.");
} 
else if(!validateEmail())
{
	alert("You have entered an incorrect email address");
	document.getElementById('effatemail').focus();
}
else {
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

function validateEmail(){
	var email = document.getElementById('effatemail');
	var expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(email.value.match(expression))
	{
		return true;
	}
	else 
		return false;
}