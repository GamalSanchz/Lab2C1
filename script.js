const $id = (id) => document.getElementById(id);
const $$ = (sel) => document.querySelectorAll(sel);

// Tarjeta 1: Cambio de teme a imagen
$id("selTema").addEventListener("change", (e) => {
  const tema = e.target.value;
  if (tema === "oscuro") {
    document.body.classList.add("dark");
    $id("imgTema").setAttribute("src", "img/dbz.jpg");
  } else {
    document.body.classList.remove("dark");
    $id("imgTema").setAttribute("src", "img/onepiece.jpg");
  }
});

// TARJETA 2: Toggle panel (click)
$id("btnToggle").addEventListener("click", () => {
  $id("panel").classList.toggle("hidden");
});

// TARJETA 3: Validación en vivo (keyup)
$id("txtValidar").addEventListener("keyup", () => {
  const val = $id("txtValidar").value.trim();
  $id("msgValidar").textContent = (val.length >= 3)
    ? "✅ Correcto"
    : "❌ Mínimo 3 caracteres";
});

// Tarjeta 4: Agregar a lista (click) 
$id("btnAgregar").addEventListener("click", () => {
  const txt = $id("txtItem").value.trim();
  if (txt.length < 1) return;

  const li = document.createElement("li");
  li.className = "item";
  li.innerHTML = `<span>${txt}</span>`;
  $id("lista").appendChild(li);

  $id("txtItem").value = "";
});

// Tarjeta 5: Eliminar último (click) remove()
$id("btnEliminarUltimo").addEventListener("click", () => {
  const lista = $id("lista");
  if (lista.lastElementChild) {
    lista.lastElementChild.remove();
    $id("msgEliminar").textContent = "✅ Se eliminó el último elemento.";
  } else {
    $id("msgEliminar").textContent = "⚠ No hay elementos para eliminar.";
  }
});

// Tarjeta 6: Calculadora
$id("btnSumar").addEventListener("click", () => {
  const n1 = Number($id("num1").value);
  const n2 = Number($id("num2").value);

  if (!isNaN(n1) && !isNaN(n2)) {
    $id("resultado").textContent = "Resultado: " + (n1 + n2);
  } else {
    $id("resultado").textContent = "Ingresa números válidos.";
  }
});

// Tarjeta 7: Resaltar 
$id("btnResaltar").addEventListener("click", () => {
  const items = $$("#lista .item");
  items.forEach(li => li.style.outline = "3px solid rgba(37,99,235,.35)");
  $id("msgResaltar").textContent = `Total resaltados: ${items.length}`;
});

$id("btnQuitar").addEventListener("click", () => {
  const items = $$("#lista .item");
  items.forEach(li => li.style.outline = "none");
  $id("msgResaltar").textContent = "Resaltado quitado.";
});

// Tarjeta 8 : Cambio de color de texto
$id("selColor").addEventListener("change", (e) => {
  $id("textoColor").style.color = e.target.value;
});