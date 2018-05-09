console.log("connected");

var varNavBttn = document.getElementById("ver-nav-toggle");
var varNavBar = document.querySelectorAll("span#ver-nav");

varNavBttn.addEventListener("click",function()
{
	for( let i=0; varNavBar.length; i++)
	{
	varNavBar[i].classList.toggle("hide");
	}
})
