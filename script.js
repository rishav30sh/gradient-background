color0=document.getElementsByTagName('input')[0]
color1=document.getElementsByTagName('input')[1]
css=document.getElementsByTagName('h3')[0];
body=document.getElementsByTagName('body')[0];



function setgradient() {
	
	body.style.background='linear-gradient(to right ,'+ color0.value +',' + color1.value+')';
css.innerHTML=body.style.background +';'  //css.textContent
} 

color0.addEventListener("input",setgradient);

color1.addEventListener("input",setgradient);

