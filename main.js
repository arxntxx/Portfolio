let projectList = document.getElementById("project-list");
let seleccion = document.getElementById("seleccion");
let titulo = document.getElementById("titulo");
let imgSeleccionada = document.getElementById("projectImg");
let lenguajes = document.getElementById("lenguajes");

document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.querySelector('.theme-checkbox');
  
    function toggleTheme() {
        if (checkbox.checked) {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            
        } else {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
        }
    }
  
    checkbox.addEventListener('change', toggleTheme);
    toggleTheme();
  });
  
  function cargar(item) {
    if (window.innerWidth > 599) {
        quitarBordes();
        projectList.style.width = "60%";
        seleccion.style.width = "40%";
        seleccion.style.opacity = "1";

        imgSeleccionada.src = item.getElementsByTagName("img")[0].src;
        titulo.innerHTML = item.getElementsByTagName("h2")[0].innerHTML;
        lenguajes.innerHTML = item.getElementsByClassName("lang")[0].innerHTML;

        item.style.border = "2px solid blue"; // Indicar el elemento seleccionado
    }
}

function cerrar() {
    if (window.innerWidth > 599) {
        projectList.style.width = "100%";
        seleccion.style.width = "0%";
        seleccion.style.opacity = "0";
        quitarBordes();
    }
}

function quitarBordes() {
    let items = document.getElementsByClassName("item");
    for (let i = 0; i < items.length; i++) {
        items[i].style.border = "none";
    }
}

  function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var namePattern = /^[A-Za-z\s]+$/;

    if (!namePattern.test(name)) {
        alert("Nombre Invalido.");
        return false;
    }

    if (email == "") {
        alert("Email sin rellenar.");
        return false;
    }

    return true;
}
