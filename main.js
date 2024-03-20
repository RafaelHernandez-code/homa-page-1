const nav = document.querySelector("#abrirIc");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", ()=>{
    abrir.classList.add("hidden")
    nav.classList.remove('hidden')
    nav.classList.add('grid');
});
cerrar.addEventListener("click", ()=>{
    abrir.classList.remove("hidden")
 nav.classList.remove("flex")
 nav.classList.add("hidden");
});
