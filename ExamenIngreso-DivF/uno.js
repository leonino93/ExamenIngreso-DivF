
function mostrar()
{
	let tipo;
	let precio;
	let cantidad;
	let categoria;
	let fabricante;
	let contA = 0;
	let contI = 0;
	let contQ = 0;
	let cantA = 0;
	let cantI = 0;
	let cantQ = 0;
	let promedioA;
	let promedioI;
	let promedioQ;
	let cantDesinfectante = 0;
	let cantBactericida = 0;
	let cantDetergente = 0;
	let cantDMAX = 0;
	let flagPreciomax = 0
	let preciomax = 0;
	let fabMax = 0;
	let categMax = 0;


	for(let i = 1; i< 5; i++){

		tipo = prompt("Ingrese el tipo: (ALCOHOL/IAC/QUAT");

		while(!(tipo == "ALCOHOL" || tipo == "IAC" || tipo == "QUAT")){
			
		tipo = prompt("Error. Ingrese el tipo: (ALCOHOL/IAC/QUAT");
		}
		precio = parseFloat(prompt("Ingrese el precio (100 - 300)"));

		while(isNaN(precio) || precio >300 || precio < 100){
			precio = parseFloat(prompt("Error. Ingrese el precio (100 - 300)"));
		}
		cantidad = parseInt(prompt("Ingrese la cantidad; (1 - 1000)"))
		while(isNaN(cantidad) || cantidad < 1 || cantidad > 1000){
			cantidad = parseInt(prompt("Error. Ingrese la cantidad; (1 - 1000)"))
		}
		categoria = prompt("Ingrese la categoria: (desinfectante/bactericida/detergente");

		while (!(categoria == "desinfectante" || categoria == "bactericida" || categoria == "detergente")){
			categoria = prompt("Error. Ingrese la categoria: (desinfectante/bactericida/detergente");

		}
		fabricante = prompt("Ingrese el fabricante");


		switch (tipo){

			case "ALCOHOL":

			contA ++;
			cantA = cantA + cantidad


			break;
			case "IAC":
			contI ++;
			cantI = cantI + cantidad

			break;
			case "QUAT":

			contQ ++;
			cantQ = cantQ + cantidad
			


			break;


		}
		if(categoria == "desinfectante"){
			cantDesinfectante = cantDesinfectante + cantidad
		} else if (categoria == "bactericida"){
			cantBactericida = cantBactericida + cantidad
		} else {
			cantDetergente = cantDetergente + cantidad
		}

		if(categoria == "detergente" && precio <= 200){
			cantDMAX = cantidad;
		}

	}

	if (cantDesinfectante > cantDetergente && cantDesinfectante > cantBactericida){

		console.log("La categoria con mayor cantidad de unidades en la compra es Desinfectante" )
	} else if (cantBactericida > cantDesinfectante && cantBactericida > cantDetergente){

		console.log("La categoria con mayor cantidad de unidades en la compra es Bactericida" )
	}	else {
		console.log("La categoria con mayor cantidad de unidades en la compra es Detergente" )

	}
	if(flagPreciomax = 0 && precio > preciomax){

		preciomax = precio
		fabMax = fabricante
		categMax = categoria

		flagPreciomax = 1

	}
	
	promedioA = cantA / contA
	promedioI = cantI / contI
	promedioQ = cantQ / contQ




	console.log("EL promedio de Alcohol es " + promedioA);
	console.log("EL promedio de Iac es " + promedioI);
	console.log("EL promedio de Quat es " + promedioQ);
	console.log("Se compraron en total " + cantDMAX + " de detergente con valor inferior a $200 inclusive");
	
	
}
