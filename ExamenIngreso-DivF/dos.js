function mostrar()
{
  let nombre;
  let situacion;
  let cantidad;
  let sexo;
  let nota;
  let edad;
  let respuesta;
  let notamax = 0;
  let flagnotamax = 0;
  let nombremax = 0;
  let flagviejo = 0;
  let edadviejo = 0;
  let nombreviejo = 0;
  let notaB = 0;
  let notaT = 0;
  let notaSE = 0;
  let contB = 0;
  let contT = 0;
  let contSe = 0;
  let promedioB = 0;
  let promedioT = 0;
  let promedioSE = 0;
  let flagMM = 0;
  let cantmin = 0;
  let edadmin = 0;
  let nombremin = 0;







do{
  nombre = prompt("Ingrese el nombre");
  situacion = prompt("Ingrese  la situacion laboral: buscando / trabajando / solo estudiante");
  while(!( situacion == "buscando" || situacion == "trabajando" || situacion == "solo estudiante")){
    situacion = prompt("Error. Ingrese  la situacion laboral: buscando / trabajando / solo estudiante");
  }
  cantidad = parseInt(prompt("Ingrese la cantidad de materias: (1 - 7)"));

  while(isNaN(cantidad) || cantidad < 1 || cantidad > 7 ){
    cantidad = parseInt(prompt("Error. Ingrese la cantidad de materias: (1 - 7)"));
  }
sexo = prompt("Ingrese el sexo: masculino / femenino / no binario")

while(!(sexo == "masculino"  ||  sexo == "femenino"  ||  sexo == "no binario")){
  sexo = prompt("Error. Ingrese el sexo: masculino / femenino / no binario")
}
nota = parseInt(prompt("Ingrese su nota promedio: (0 - 10)"));
while(isNaN(nota) || nota < 0 || nota > 10){
  nota = parseInt(prompt("Error. Ingrese su nota promedio: (0 - 10)"));
}

edad = parseInt(prompt("Ingrese su edad: "));
while(isNaN(edad) || edad <= 0){
  edad = parseInt(prompt("Error. Ingrese su edad: "));
}

if(situacion == "solo estudiante" && (flagnotamax == 0 ||  nota > notamax)){
 notamax = nota
 nombremax = nombre
 flagnotamax = 1
}
if(situacion == "solo estudiante" && (flagviejo == 0 || edad > edadviejo )){
edadviejo = edad
nombreviejo = nombre;
flagviejo = 1;

}if(situacion == "buscando"){
  notaB = notaB + nota
  contB ++;
} else if (situacion == "trabajando"){
  notaT = notaT + nota
  contT ++;
} else {
  notaSE = notaSE + nota
  contSe ++;
}

if(situacion == "buscando" && (flagMM == 0 || cantidad < cantmin)){

  cantmin = cantidad
  edadmin = edad
  nombremin = nombre
  flagMM = 1

}










  respuesta = prompt("¿Desea agregar mas datos?")
}while(respuesta != "no")





promedioB = notaB / contB
promedioT = notaT / contT
promedioSE = notaSE /  contSe



if(notamax == 0){

  console.log("a)No hay Solo estudiantes, por lo tanto no hay promedio")
} else {
  console.log("a)El nombre del mejor promedio es " + nombremax);
}

if (edadviejo == 0){

  console.log("b) No hay solo estudiantes")
} else {
  console.log("b)El nombre del mas viejo de los alumnos que solo sea estudiantes es " + nombreviejo);
}


if(contB == 0){
  console.log("c) No se pudo calcular el promedio de los buscando")
} else {
console.log("c)El promedio de nota de los buscando es " + promedioB);
}

if (contT == 0){
  console.log("c) No se pudo calcular el promedio de los trabajando")
} else {
console.log("c)El promedio de nota de los trabajando es " + promedioT);
}
if(contSe == 0){
  console.log("c) No se pudo calcular el promedio de los solo estudiantes")

} else {
console.log("c)El promedio de nota de los solo estudiantes es " + promedioSE);
}
if (cantmin == 0){
  console.log("d)No hay personas trabajando en el ingreso.")

} else {
console.log("d) " +  nombremin + " es la persona con menor cantidad de materias y su edad es  " + edadmin + " y se encuentra buscando trabajo");
}





}
