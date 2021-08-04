/*
Enunciado:
El centro de hisopado de Ezeiza recibe una tripulación de 8 personas.
Al ser hisopadas se ingresan sus datos en la aplicación:
-nacionalidad ("argentina", "extranjero")
-resultado("positivo", "negativo")
-edad(entre 18 y 65)
-cepa("delta", "alfa", "beta", "ninguna")
Para poder ingresar ninguna el resultado debe ser negativo
Luego del ingreso informar:
a- Porcentaje de positivos
b- Porcentaje de negativos
c- Cuál es la cepa más encontrada
d- Edad del mayor extranjero contagiado
e- Cantidad de personas argentinas contagiadas con la delta
*/

function mostrar()
{
    let nacionalidad;
    let resultado;
    let edad;
    let cepa;

    let contadorP = 0; // a
    let contadorN = 0; // b
    let totalPYN; // a y b
    let porcentajeP; // a
    let porcentajeN; // b

    let contadorDelta = 0; // c
    let contadorAlfa = 0;
    let contadorBeta = 0;
    let cepaMax; // c

    let edadMax; // d
    let flag = 1;

    let contadorArgD = 0;


    for(let i = 1; i <= 8; i++){

        nacionalidad = prompt("Ingrese nacionalidad. 'argentina' o 'extranjero' ").toLowerCase();
            while(!(nacionalidad == "argentina" || nacionalidad == "extranjero")){
                nacionalidad = prompt("Nacionalidad invalida.Ingrese nacionalidad. 'argentina' o 'extranjero' ").toLowerCase();
            }


        resultado = prompt("Cual fue su resultado? 'positivo' o 'negativo' ").toLowerCase();
            while(!(resultado == "positivo" || resultado == "negativo")){
                resultado = prompt("Resultado invalido.Cual fue su resultado? 'positivo' o 'negativo' ").toLowerCase();
            }


        edad = parseInt(prompt("Ingrese su edad. Entre 18 y 65."));
            while(isNaN(edad) || edad < 18 || edad > 65){
                edad = parseInt(prompt("Edad invalida.Ingrese su edad. Entre 18 y 65."));
            }

        if(resultado == "positivo"){
            cepa = prompt("Ingrese cepa. 'alfa' , 'delta' o 'beta' ").toLowerCase();
                while(!(cepa == "alfa" || cepa == "delta" || cepa == "beta")){
                    cepa = prompt("Cepa invalida.Ingrese cepa. 'alfa' , 'delta' o 'beta' ").toLowerCase();
                }
        }
        else
        {
            cepa = prompt("Ingrese cepa. 'alfa' , 'delta' , 'beta' o 'ninguno'").toLowerCase();
                 while(!(cepa == "alfa" || cepa == "delta" || cepa == "beta" || cepa == 'ninguno')){
                    cepa = prompt("Cepa invalida.Ingrese cepa. 'alfa' , 'delta' , 'beta' o 'ninguno' ").toLowerCase();
                }
        }
        




        if(resultado == "positivo"){
            contadorP++;
        }
        else
        {
            contadorN++;
        }


        switch(cepa){

            case "delta":
                contadorDelta++;

                if(nacionalidad == "argentina"){
                    contadorArgD++;
                }

            break;

            case "alfa":
                contadorAlfa++;

            break;

            case "beta":
                contadorBeta++;
            
        }


        if(nacionalidad == "extranjero"){

            if(flag == 1  || edad > edadMax){
                edadMax = edad;
                flag = 0;
            }
            
        }



    }



        // porcentajes
        totalPYN = contadorP + contadorN;

        porcentajeP = contadorP * 100 / totalPYN;

        porcentajeN = contadorN * 100 / totalPYN;

        // cepa max

        if(contadorDelta > contadorBeta && contadorDelta > contadorAlfa){
            cepaMax = "Delta";
        } 
        else if(contadorBeta >= contadorDelta && contadorBeta > contadorAlfa){
            cepaMax = "Beta";
        }
        else{
            cepaMax = "Alfa";
        }

    

    

        console.log("a) El porcentaje de positivos es : %" + porcentajeP);

        console.log("b) El porcentaje de negativos es : %" + porcentajeN);

        console.log("c) La cepa mas encontrada es la : " + cepaMax);

        console.log("d) La edad del mayor extranjero contagiado es : " + edadMax );

        console.log("e) La cantidad de personas argentinas contagiadas con la delta es : " + contadorArgD);







}



    









    
