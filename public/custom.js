var food = {};
function handleSuccess()
{
	
	var data = JSON.parse(this.responseText);
	for (var item in data)
	{
		if(data.hasOwnProperty(item))
		{
		var li = document.createElement("li");
		li.className += "collection-item avatar";
		
		var item1 = document.createElement("i");
		item1.className += "material-icons circle green";
		item1.textContent = "brightness_1"
		
		var item2 = document.createElement("span");
		item2.className += "title";
		item2.textContent = data[item]['name'];
		
		var item3 = document.createElement("p");
		item3.textContent = "Carbohydrate Value: " + data[item]['nutritionper100gcarbohydrate'];
		
		var item4 = document.createElement("p");
		item4.textContent = "Protein: " + data[item]['nutritionper100gprotein'];
		
		var item5 = document.createElement("p");
		item5.textContent = "Sugras: " + data[item]['nutritionper100gsugars'];
		
		var item6 = document.createElement("p");
		item6.textContent = "Fat: " + data[item]['nutritionper100gfat']; 
	 
		var item7 = document.createElement("a");
		item7.href = "/food";
		item7.className += "secondary-content food-item";
		item7.setAttribute("dataname", data[item]['name']);
		item7.setAttribute("datafat", data[item]['nutritionper100gfat']);
		item7.setAttribute("datasugars", data[item]['nutritionper100gsugars']);
		item7.setAttribute("dataprotein", data[item]['nutritionper100gprotein']);
		item7.setAttribute("datacarbs", data[item]['nutritionper100gcarbohydrate']);
		
		var item7child = document.createElement("i");
		item7child.className = "material-icons";
		item7child.innerHTML = "grade";
		
		li.appendChild(item1);
		li.appendChild(item2);
		li.appendChild(item3);
		li.appendChild(item4);
		li.appendChild(item5);
		li.appendChild(item6);
		li.appendChild(item7);
		item7.appendChild(item7child);
		
		
		var result = document.getElementById("foods");
		result.appendChild(li);
		}
		//check eventListener
	if(item7.addEventListener)
	{
		item7.addEventListener("click", function(event)
		{
			var target = event.currentTarget;
			sessionStorage.clear();

			sessionStorage.setItem('name', target.getAttribute('dataname'));
			sessionStorage.setItem('fat', target.getAttribute('datafat'));
			sessionStorage.setItem('protein', target.getAttribute('dataprotein'));
			sessionStorage.setItem('sugar', target.getAttribute('datasugars'));
			sessionStorage.setItem('carbs', target.getAttribute('datacarbs'));
			console.log(sessionStorage.getItem('name'));
		});
	}
	
	}
}

function handleError()
{
	var h5 = document.getElementsByID("list");
	h5.style.color = "red";
	h5.innerHTML=" An Error Occured"
	var Error = document.getElementById("main");
	error.appendChild(h5);
}



//create an xhr object
const xhr = new XMLHttpRequest();
xhr.open('get','/foods');
xhr.onload=handleSuccess;
xhr.onerror = handleError;
xhr.send();