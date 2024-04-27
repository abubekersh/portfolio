var menu = document.getElementById("nav-mu");
var nav = document.getElementById("nav");
var close = document.getElementById("close")
var overlay = document.createElement("div");
var li =  document.getElementById("top");
var foo = document.getElementById("contact");
menu.addEventListener("click",function() {
     overlay.id="overlay";
     nav.style.display="block";
     overlay.appendChild(nav);
     document.body.appendChild(overlay);
})
close.addEventListener("click",function(){
    nav.style.display="none";
    overlay.id="";
})
foo.addEventListener("click",function(){
    nav.style.display="none";
    overlay.id="";
})