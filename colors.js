var num=6
var colors =generatrandom(num);
var square =document.querySelectorAll(".square");
var h1 =document.querySelector("h1");
var dis =document.querySelector("#dis");
var picked =document.querySelector("#picked");
var neww =  document.querySelector("#new");
var easy =  document.querySelector("#easy");
var hard =  document.querySelector("#hard");
pickrandom(num);
logic();
// pickedcolor=colors[0];
easy.addEventListener("click",function(){
	num =3
h1.style.backgroundColor = "steelblue";
 neww.textContent="new colors";dis.textContent="";
 colors = generatrandom(num);pickrandom(num);
 square[3].classList.add("d")
 square[4].classList.add("d")
 square[5].classList.add("d")
 logic();
 easy.classList.add("y")
 hard.classList.remove("y")
})

hard.addEventListener("click",function(){
 num =6
 h1.style.backgroundColor = "steelblue";
 neww.textContent="new colors";dis.textContent="";
 square[3].classList.remove("d")
 square[4].classList.remove("d")
 square[5].classList.remove("d")
 colors = generatrandom(num);logic(); pickrandom(num);
 hard.classList.add("y")
 easy.classList.remove("y")
})


function logic(){
square.forEach(function(s,i){
if(colors[i]){	
  s.style.backgroundColor = colors[i]
	square[i].addEventListener("click",function(){
	if(this.style.backgroundColor==pickedcolor)
	{   dis.textContent="correct !"
        neww.textContent="play again !"
		changecolors(pickedcolor)}
    else { dis.textContent="try again !";
    this.style.backgroundColor="#232323"; }
})
}	
})
}

function changecolors(color){
	square.forEach(function(s){
  s.style.backgroundColor = color

})
h1.style.backgroundColor = color	
}
function pickrandom(num){var x= Math.floor(Math.random()*num);
pickedcolor=colors[x];
picked.textContent = pickedcolor;
}
function generatrandom(num){
	var arr =[];
 for (var i = 0; i<num; i++) {
 	arr.push(randcolor())
 }
return arr;
}
function randcolor(){
 var red = Math.floor(Math.random()*256);
 var green = Math.floor(Math.random()*256);
 var blue = Math.floor(Math.random()*256);
 var mycolor = "rgb("+String(red)+", "+String(green)+", "+String(blue)+")";
 return mycolor;	
}
neww.addEventListener("click",function(){h1.style.backgroundColor = "steelblue";
 neww.textContent="new colors";dis.textContent="";
 colors = generatrandom(num);logic(); pickrandom(num);})

