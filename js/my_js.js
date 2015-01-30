
// Validating Empty Field
function check_empty()
{
if (document.getElementById('fullname').value == "" || document.getElementById('effatemail').value == "" || document.getElementById('id').value == ""){
alert("Please enter a name, an effat email and your student ID to join");
} 
else if(!validateEmail())
{
	alert("You have entered an incorrect email address");
	document.getElementById('effatemail').focus();
}
else if(!validateId())
{
	alert("You have entered an incorrect student ID");
	document.getElementById('id').focus();
}
else if(!validateMemberType(document.forms["form"]["type"]))
{
	alert("Do you want to a be a full member or a partial member?");
	document.getElementById('fullmember').focus();
}
else 
{
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
	var expression = /^\w+([\.-]?\w+)*@[effatuniversity]*(\.\w{2,3})+$/;
	if(email.value.match(expression))
	{
		return true;
	}
	else 
		return false;
}

function validateId()
{
	var id = document.getElementById('id');
	var expression = /^[sS]+[0-9]/;
	if(id.value.match(expression))
	{
		return true;
	}
	else return false;
}

function validateMemberType(radios)
{
	var len = radios.length;
	var checked = false;
	for(i = 0; i<len; i++)
	{
		if(radios[i].checked) checked = true;
	}

	if(checked)
	{
		return true;
	}
	else return false;
}

