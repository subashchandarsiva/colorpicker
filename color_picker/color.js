var c1 = document.getElementById("color1");
var c2 = document.getElementById("color2");
var body = document.getElementById("body");
var c = document.getElementById("colors");


console.log(body.style.background);
//console.log(c1,c2);
//console.log(body.style);
c1.addEventListener("input",function(){
    body.style.background = 
	"linear-gradient(to right, " 
	+ c1.value 
	+ ", " 
	+ c2.value 
	+ ")";
    console.log(body.style.background);
    var h3el = document.createElement("h2");
var nodeval= document.createTextNode(body.style.background);


h3el.appendChild(nodeval);

colors.appendChild(h3el);
})
c2.addEventListener("input",function(){
   body.style.background = 
	"linear-gradient(to right, " 
	+ c1.value 
	+ ", " 
	+ c2.value 
	+ ")";
    console.log(body.style.background);
    var h3el = document.createElement("h2");
var nodeval= document.createTextNode(body.style.background);


h3el.appendChild(nodeval);

colors.appendChild(h3el);
})

