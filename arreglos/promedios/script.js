/*
Una cátedra de la facultad necesita calcular automáticamente los promedios de los 3 exámenes dados por los alumnos en este cuatrimestre. 
Para esto es necesario que se ingrese al sistema las 3 notas y guardarlas en un arreglo. 
Además se debe verificar que los datos ingresados sean validos (números entre 1 y 10) y pedir en caso contrario la nota nuevamente.

Extra: reutilizar la misma lógica para poder ingresar las notas de 4 alumnos y luego mostrar el promedio general de todas las notas de todos los alumnos.

*/
const CANTIDAD_NOTAS = 3
const CANTIDAD_ALUMNOS = 4

/**
 * Función principal
 */
function main () {
  let totalNotasAlumnos = obtenerTotalNotasAlumnos ();
  let promedioTotalAlumnos = calcularTotalPromedios(totalNotasAlumnos);
  console.log(totalNotasAlumnos); //Abrir consola para ver cómo queda este arreglo de arreglos.
  alert('El promedio total de los ' + CANTIDAD_ALUMNOS + ' alumnos es de: ' + promedioTotalAlumnos);
}

/**
 * @param numeroDeAlumno: número de alumno al cual se va a solicitar las notas.
 * @return notasAlumno: arreglo unidimensional con las notas del alumno.
 */
function obtenerNotasAlumno (numeroDeAlumno) {
  let notasAlumno = [];
  while (notasAlumno.length < CANTIDAD_NOTAS) {
    let notaIngresada = parseInt(prompt("Ingrese la nota N°" + (notasAlumno.length+1) + " del alumno N°" + (numeroDeAlumno+1) + "."));
    if (esNotaValida(notaIngresada)) {
      notasAlumno.push(notaIngresada);
    }
  }
  return notasAlumno;
}

/**
 * @param nota: nota a validar
 * @return true si la nota es válida, false en caso contrario.
 */
function esNotaValida (nota) {
  if (!isNaN(nota) && nota >= 1 && nota <= 10) {
    return true;
  }
  return false;
}

/**
 * @param listaNumeros: arreglo de números.
 * @return promedio de los números recibidos en "listaNumeros".
 */
function calcularPromedio (listaNumeros) {
  let sumatoria = 0;
  for (let i = 0; i < listaNumeros.length; i++) {
    sumatoria += listaNumeros[i];
  }
  return parseFloat((sumatoria / listaNumeros.length).toFixed(2));
}

/**
 * @param listaNotasTodosAlumnos: arreglo que contiene en cada uno de sus elementos, un arreglo con las notas correspondientes a un alumno.
 * @return promedio total de todas las notas de todos los alumnos.
 */
function calcularTotalPromedios (listaNotasTodosAlumnos) {
  let listaPromedios = [];
  for (let i=0; i<listaNotasTodosAlumnos.length; i++) {
    listaPromedios.push(calcularPromedio(listaNotasTodosAlumnos[i]))
  }
  return calcularPromedio(listaPromedios)
}

/**
 * @return arreglo de arreglos de notas.
 */
function obtenerTotalNotasAlumnos () {
  let totalNotasAlumnos = [];
  while (totalNotasAlumnos.length < CANTIDAD_ALUMNOS) {
    totalNotasAlumnos.push(obtenerNotasAlumno(totalNotasAlumnos.length));
  }
  return totalNotasAlumnos;
}

window.onload = main();