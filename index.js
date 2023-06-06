const menuIcon =document.querySelector(".content");
const nav = document.querySelector(".nav");

let bandera = 1
menuIcon.addEventListener("click",menuop)
function menuop() {
if (bandera == 1){
    console.log("funciona")
    const bar1 = document.querySelector("#bar1").classList.toggle("active");
    document.querySelector("#bar1").classList.remove("default");
    const bar2 = document.querySelector("#bar2").classList.toggle("active");
    document.querySelector("#bar2").classList.remove("default");
    const bar3 = document.querySelector("#bar3").classList.toggle("active");
    document.querySelector("#bar3").classList.remove("default");
    document.querySelector("#nav");
    nav.classList.toggle("mostrar");
    nav.classList.remove("ocultar");
    bandera = 2
} else {
    console.log("tukituki")
    document.querySelector("#bar1").classList.toggle("active");
    document.querySelector("#bar1").classList.toggle("default");
    document.querySelector("#bar2").classList.toggle("active");
    document.querySelector("#bar2").classList.toggle("default");
    document.querySelector("#bar3").classList.toggle("active");
    document.querySelector("#bar3").classList.toggle("default");
    nav.classList.remove("mostrar");
    nav.classList.toggle("ocultar");
    bandera = 1
}
    nav.classList.toggle("inactive")
}
