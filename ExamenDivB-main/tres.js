/*
Enunciado:
Llegan 10 vuelos con vacunas de distintos lugares del mundo
Se debe registrar de cada vuelo:
-Origen (“Asia”, “Europa”, “USA”)
-Cantidad de vacunas (no puede ser 0)
-Costo del vuelo (entre 1 millón y 5 millones de pesos)
Informar:
a- El origen que envió mayor cantidad de vacunas
b- El promedio de vacunas llegadas de Asia
c- El total sin descuentos a pagar por los gastos de los viajes
d- Si en total se recibieron mas de 4 millones de vacunas se hace un descuento de 30%, Si se recibieron entre 2 y 4 millones el descuento es del 20% con menor cantidad no hay descuento.
Informar si hubo descuento de cuanto fue y el importe final con descuento
*/

function mostrar()
{
	let origen;
	let cantidad;
	let costo;

	let maxOrigen; // a

	let acumAsia = 0; // a) // b)
	let acumEuropa = 0; // a)
	let acumUsa = 0; // a)
	let vacunasTotal;

	let promedio; // asia

	let importe; // c)
	let importeBruto = 0; // c)

	let importeNeto = 0;

	let descuento;

	


	for(let i = 1; i <= 10; i++){

		origen = prompt("Ingrese el origen. 'asia' , 'europa' o 'usa' ").toLowerCase();
			while(!(origen == "asia" || origen == "europa" || origen == "usa")){
				origen = prompt("Origen invalido.Ingrese el origen. 'asia , 'europa' o 'usa'").toLowerCase();
			}
		

		cantidad = parseInt(prompt("Ingrese cantidad de vacunas"));
			while(isNaN(cantidad) || cantidad <= 0){
				cantidad = parseInt(prompt("Cantidad invalida.Ingrese cantidad de vacunas"));
			}


		costo = parseInt(prompt("Ingrese el costo. entre 1 millon y 5 millones de pesos"));
			while(isNaN(costo) || costo < 1000000 || costo > 5000000){
				costo = parseInt(prompt("Costo invalido.Ingrese el costo. entre 1 millon y 5 millones de pesos"));
			}



			importe = cantidad * costo; // c
			importeBruto += importe; // c




		if(origen == "asia"){
			acumAsia += cantidad;
		}
		else if(origen == "europa "){
			acumEuropa += cantidad;
		}
		else{
			acumUsa += cantidad;
		}






	}

// origen mas vacunas

	if(acumAsia > acumEuropa && acumAsia > acumUsa){
		maxOrigen = "asia";
	}
	else if(acumEuropa >= acumAsia && acumEuropa > acumUsa){
		maxOrigen = "europa";
	}
	else{
		maxOrigen = "usa";
	}





 // promedio
	vacunasTotal = acumAsia + acumEuropa + acumUsa;

	promedio = acumAsia * 100 / vacunasTotal;

// dewcuento

	if(vacunasTotal > 4000000){
		descuento = importeBruto * 0.3;
	}
	else if(vacunasTotal <= 4000000 && vacunasTotal >= 2000000){
		descuento = importeBruto * 0.2;
	}
	else
	{
		descuento = 0;
	}
	
	importeNeto = importeBruto - descuento;
	


	console.log("a) El origen que envio mayor cantidad de vacunas es : " + maxOrigen);

	console.log("b) El promedio de vacunas llegas de asia es : %" + promedio);

	console.log("c) El importe bruto es igual a : $" + importeBruto);

	if(descuento > 0){
		console.log("d) El importe neto con descuento es : $" + importeNeto);
	}


}
