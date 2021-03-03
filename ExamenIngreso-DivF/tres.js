function mostrar()
{
	let nombre;
	let obrasocial;
	let edad;
	let temperatura;
	let sexo;
	let precio = 600
	let respuesta;
	let contViejo = 0;
	let flagedadjoven = 0;
	let nombrejoven = 0;
	let edadjoven = 0;
	let temperaturajoven = 0;
	let contPasa = 0;
	let PrecioBruto;
	let contPAMI = 0;
	let mitad;
	let preciodescuento;




		do{
			nombre = prompt("Ingrese un nombre");
			obrasocial = prompt("Ingrese su obra social: (PAMI / OSDE / otras)");
			while (!(obrasocial == "PAMI"  || obrasocial == "OSDE" || obrasocial == "otras"	)){
				obrasocial = prompt("Error. Ingrese su obra social: (PAMI / OSDE / otras)");
			}
			edad = parseInt(prompt("Ingrese su edad"));

			while(isNaN(edad) || edad < 1){
				edad = parseInt(prompt("Error. Ingrese su edad"));

			}
			temperatura = parseFloat(prompt("Ingrese su temperatura corporal: "));

			while (isNaN(temperatura) || temperatura < 1 ){
				temperatura = parseFloat(prompt("Error. Ingrese su temperatura corporal: "));
			}
			sexo = prompt("Ingrese su sexo: (masculino ó femenino)");
			while (!(sexo == "masculino" || sexo == "femenino")){
				sexo = prompt("Error. Ingrese su sexo: (masculino ó femenino)");

			}

			if(obrasocial == "OSDE" && edad > 60){

				contViejo ++;
			}

			if(sexo == "femenino" && obrasocial == "PAMI" && (flagedadjoven == 0 || edad < edadjoven)){
				edadjoven = edad
				nombrejoven = nombre
				temperaturajoven = temperatura
				flagedadjoven = 1

			}
			if(obrasocial == "PAMI" || obrasocial == "OSDE" || obrasocial == "otras"){
				contPasa ++;
			}

			if(obrasocial == "PAMI"){
				contPAMI ++;
			}













			PrecioBruto = contPasa * 600
			mitad = contPasa / 2






		respuesta = prompt("¿Desea ingresar mas datos?")
	}while (respuesta != "no")


	if(contViejo == 0){
		console.log("a)No hay personas con OSDE y mayores de 60 años ")
	} else {
		console.log("a)La cantidad de personas con OSDE de mas de 60 años es " + contViejo);
	}



if(edadjoven == 0){
	console.log("b)No hay mujeres Jovenes con PAMI");

}else {
	
	console.log("b)La mujer mas joven con PAMI es " + nombrejoven + " y su temperatura es " + temperaturajoven);
}


	console.log("c)El precio total sin descuentos es $" + PrecioBruto);

	
	if(mitad < contPAMI){
		preciodescuento = contPasa *600 - (contPasa * 600 * .25)

		console.log("d)Se aplica el descuento y el precio final es $" + preciodescuento);

	} else {
		console.log("d)No se aplico el descuento y el precio final es el bruto, o sea $" + PrecioBruto);
	}
































}
