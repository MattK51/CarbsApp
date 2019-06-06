window.onload = function()
{
	var name = sessionStorage.getItem('name')
	var fat = sessionStorage.getItem('fat')
	var carbs = sessionStorage.getItem('carbs')
	var protein = sessionStorage.getItem('protein')
	var sugars = sessionStorage.getItem('sugar')
	
	document.getElementById("fname").innerHTML=name;
	document.getElementById("ffat").innerHTML="Fat: " + fat + "g";
	document.getElementById("fcarbs").innerHTML="Carbs: "+ carbs + "g";
	document.getElementById("fprotein").innerHTML="Protein: " + protein + "g";
	document.getElementById("fsugars").innerHTML="Sugars: " + sugars + "g";
	
}