let salud = 0;

function MetodoCuracion() {
  salud = 100;
  alert("Te has curado. Tu salud ahora es " + salud);
}

console.log("Salud: "+salud);

const accion = prompt("Ejecuta tu acción:");

if (accion === "curarse") {
  MetodoCuracion();
  console.log("Salud: "+salud);
} else {
  alert("La acción ingresada no es válida");
}
