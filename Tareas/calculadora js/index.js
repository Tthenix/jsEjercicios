let tipo = prompt("que tipo de operacion quieres realizar suma,resta,multiplicacion,division:");
let nuno = parseInt(prompt("Ingresar numero 1: "));
let ndos = parseInt(prompt("Ingresar numero 2: "));

function suma(nuno, ndos) {
    var operacion = nuno + ndos;
    console.log(operacion);
}


function resta(nuno, ndos) {
    var operacion = nuno - ndos;
    console.log(operacion);
}


function multiplicacion(nuno, ndos) {
    var operacion = nuno * ndos;
    console.log(operacion);
}


function division(nuno, ndos) {
    var operacion = nuno / ndos;
    console.log(operacion);
}


if (tipo == "suma") {
    suma(nuno, ndos)
} else if (tipo == "resta") {
    resta(nuno, ndos)
} else if (tipo == "multiplicacion") {
    multiplicacion(nuno, ndos)
} else if (tipo == "division") {
    division(nuno, ndos)
}