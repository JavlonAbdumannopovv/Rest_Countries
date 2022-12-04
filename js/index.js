let darkMode = document.querySelector(".dark_light");
darkMode.onclick = function(){
    document.querySelector("body").classList.toggle("dark_mode");

}

document.querySelector(".filter").onclick = function(){
    document.querySelector(".filter_down").classList.toggle("show");
}