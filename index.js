window.addEventListener('load', function() {
const menuIcon =document.querySelector(".content");    
let bandera = 1
menuIcon.addEventListener("click",menuop)
function menuop() {
    const nav = document.querySelector(".nav").classList.toggle("activar");
if (bandera == 1){
    const bar1 = document.querySelector("#bar1").classList.toggle("active");
    document.querySelector("#bar1").classList.remove("default");
    const bar2 = document.querySelector("#bar2").classList.toggle("active");
    document.querySelector("#bar2").classList.remove("default");
    const bar3 = document.querySelector("#bar3").classList.toggle("active");
    document.querySelector("#bar3").classList.remove("default");
    document.querySelector("#nav");
    bandera = 2
} else {
    document.querySelector("#bar1").classList.toggle("active");
    document.querySelector("#bar1").classList.toggle("default");
    document.querySelector("#bar2").classList.toggle("active");
    document.querySelector("#bar2").classList.toggle("default");
    document.querySelector("#bar3").classList.toggle("active");
    document.querySelector("#bar3").classList.toggle("default");
    bandera = 1
}}});

