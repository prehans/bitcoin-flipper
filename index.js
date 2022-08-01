randomnumber=Math.floor(Math.random()*4)+1;
var randomimage=`images/img${randomnumber}.jpg`;
var image1=document.querySelector("img");
image1.setAttribute("src",randomimage);
if(randomnumber==2)
document.querySelector("h2").innerHTML="ETHEREUM !!";
else if(randomnumber==3)
document.querySelector("h2").innerHTML="DOGECOIN !!"
else if(randomnumber==4)
document.querySelector("h2").innerHTML="MONERO !!"

