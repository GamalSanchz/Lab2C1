
document.getElementById("btnColor").addEventListener("click", function() {
    document.getElementById("titulo").style.color = "red";
});

document.querySelector("#btnSaludo").addEventListener("click", function() {
    let nombre = document.querySelector("#nombre").value;

    if(nombre === "") {
        alert("Escribe tu nombre");
    } else {
        document.querySelector("#saludo").innerHTML = "Hola " + nombre;
    }
});
document.querySelector(".btnAgregar").addEventListener("click", function() {
    let nuevo = document.createElement("li");
    nuevo.innerHTML = "Elemento nuevo";
    document.querySelector("#lista").appendChild(nuevo);
});

document.getElementById("btnEliminar").addEventListener("click", function() {
    let lista = document.getElementById("lista");
    if(lista.lastElementChild) {
        lista.lastElementChild.remove();
    }
});

document.getElementById("btnContar").addEventListener("click", function() {
    let cuadros = document.querySelectorAll(".cuadro");

    cuadros.forEach(function(elemento) {
        elemento.style.backgroundColor = "green";
    });

    document.getElementById("resultado").innerHTML =
        "Total de cuadros: " + cuadros.length;
});