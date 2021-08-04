/*
Enunciado:
Se necesita llevar el registro de un vacunatorio. Para ello se podrá registrar los datos de las personas vacunadas mientras el usuario quiera.
De cada vacunado se solicita:
-nombre (entre 3 y 10 caracteres)
-edad ( mayor o igual a 12)
-vacuna (“rusa”, “china”, “americana”)
Si la edad esta entre 12 y 17 años ambos incluidos solo se permite la vacuna americana
-dosis (“p” en caso de ser la primer dosis o “s” en caso de ser la segunda dosis)
-sexo( “f” o “m” )
Informar:
a- Promedio de edad de los que se vacunaron con la rusa
b- Nombre y vacuna de la mujer con más edad
c- De las personas que recibieron la vacuna americana que porcentaje son mayores de edad
d- Porcentaje de los que están vacunados con 2 dosis sobre el total de vacunados
e- Vacuna menos inoculada
*/
function mostrar()
{
	
let nombre;
let edad;
let vacuna;
let dosis;
let sexo;

let acumEdadRusa = 0;// a
let contadorRusa = 0; // a
let promedio; // a

let maxEdad; // b
let maxNombre; // b
let maxVacuna;
let flag = 1;

let porcentajeA; // c
let contadormayoresA = 0;
let contadorPersonasA = 0;

let porcentaje2; // d

let minVacuna; // e

let contadorAmericana = 0; // c
let contadorChina = 0;

let contadorPD = 0;
let contadorSD = 0;
let totalVacunados;


let respuesta;






do{
    nombre = prompt("Ingrese su nombre, de 3 a 10 caracteres.");
        while(!(nombre.length >= 3 && nombre.length <= 10)){
            nombre = prompt("Nombre invalido.Ingrese su nombre, de 3 a 10 caracteres.");
        }

    edad = parseInt(prompt("Ingrese su edad"));
        while(isNaN(edad) || edad < 12){
            edad = parseInt(prompt("Edad invalida.Ingrese su edad"));
        }
    
    if(edad > 17){ 
    vacuna = prompt("Ingrese la vacuna. 'rusa' , 'china' o 'americana' ").toLowerCase();
        while(!(vacuna == "rusa" || vacuna == "china" || vacuna == "americana")){
            vacuna = prompt("Ingrese la vacuna. 'rusa' , 'china' o 'americana' ").toLowerCase();
        } 
    }
    else
    {
        alert("La vacuna ingresada en su rango de edad es la Americana");
        vacuna = "americana";
    }
    

    dosis = prompt("Ingrese que dosis es, 'p' = primera o 's' = segunda ").toLowerCase(); 
        while(!(dosis == 'p' || dosis == 's')){
            dosis = prompt("Dosis invalida.Ingrese que dosis es, 'p' = primera o 's' = segunda ").toLowerCase();
        }

    sexo = prompt("Ingrese su sexo 'f' o 'm' ").toLowerCase();
        while(!(sexo == 'f' || sexo == 'm')){
            sexo = prompt("Sexo invalido.Ingrese su sexo 'f' o 'm' ").toLowerCase()
        }
    


        if(dosis == 'p'){
            contadorPD++;
        }
        else{
            contadorSD++;
        }




    if(vacuna == "rusa"){ // a
        acumEdadRusa += edad;
        contadorRusa++;

    }
    else if(vacuna == "americana")
    {
        contadorAmericana++;


        contadorPersonasA++;

        if(edad >= 18 ){
         contadormayoresA++;
        }
        
    }
    else
    {
        contadorChina++;
    }





    if(flag == 1 || (sexo == "f" && edad > maxEdad)){ // b

        maxEdad = edad;
        maxNombre = nombre;
        maxVacuna = vacuna;
        flag = 0;
    }


    


   respuesta = prompt("Quiere seguir ingresando? 's' o 'n' ").toLowerCase();  
}while(respuesta == 's');




// porcentaje mayores americana.
 // c)

porcentajeA = contadormayoresA * 100 / contadorPersonasA;



totalVacunados = contadorPD + contadorSD; // d)

porcentaje2 = contadorSD * 100 / totalVacunados;

promedio = acumEdadRusa / contadorRusa;


if(contadorRusa < contadorChina && contadorRusa < contadorAmericana){ // e
    minVacuna = "Rusa";

}
else if( contadorChina <= contadorRusa && contadorChina < contadorAmericana){
    minVacuna = "China";
}
else{
    minVacuna = "Americana";
}


if(isNaN(promedio)){
    promedio = 0;
}

console.log("a) El promedio de edad de los que se vacunaron con la rusa es : " + promedio);

console.log("b) El nombre de la mujer con mas edad es : " + maxNombre + " y su vacuna es : " + maxVacuna);

if(isNaN(porcentajeA)){
    porcentajeA = 0;
}
console.log("c) El porcentaje de mayores de edad que recibieron la vacuna americana es : %" + porcentajeA);

console.log("d) El porcentaje de vacunas con la 2da dosis es : %" + porcentaje2);

console.log("e) La vacuna menos inoculada es : " + minVacuna);

	
}



