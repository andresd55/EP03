var opera = function (){
    var signo = nom("operador").value;

    if (nom("den1").value == 0 || nom("den2").value == 0)
    {
        alert('El denominador no puede ser igual a cero.');
    }
    else{
        if(signo == "+"){
            sumaFracciones();
        }
        if(signo == "-"){
            restaFracciones();
        }
        if(signo == "*"){
            multiplicacionFracciones();
        }
        if(signo == "/"){
            divisionFracciones();
        }
    }
    
    function sumaFracciones(){
         var result = "0";
         var numerador = 0;
         var denominador = 0;
         if(nom("den1").value == nom("den2").value){
            numerador = Number(nom("num1").value) + Number(nom("num2").value);
            denominador = nom("den1").value;
         }
         else{
            numerador = ((nom("num1").value * nom("den2").value) + 
            (nom("num2").value * nom("den1").value));
            denominador = (nom("den1").value * nom("den2").value);
         }
         result = numerador + "/" + denominador;
         result = simplificaFraccionario(result);
         alert("El resultado es: " + result);
    }

    function restaFracciones(){
         var result = "0";
         var numerador =0;
         var denominador =0;
         if(nom("den1").value == nom("den2").value){
            numerador = Number(nom("num1").value) - Number(nom("num2").value);
            denominador = nom("den1").value;
         }
         else{
            numerador = ((nom("num1").value * nom("den2").value) - 
            (nom("num2").value * nom("den1").value));
            denominador = (nom("den1").value * nom("den2").value);
         }
         result = numerador + "/" + denominador;
         result = simplificaFraccionario(result);
         alert("El resultado es: " + result);
    }

    function multiplicacionFracciones(){
         var numerador = (nom("num1").value * nom("num2").value);
         var denominador = (nom("den1").value * nom("den2").value);
         var result = numerador + "/" + denominador;
         result = simplificaFraccionario(result);
         alert("El resultado es: " + result);
    }

    function divisionFracciones(){
         var numerador = (nom("num1").value * nom("den2").value);
         var denominador = (nom("num2").value * nom("den1").value);
         var result = numerador + "/" + denominador;
         result = simplificaFraccionario(result);
         alert("El resultado es: " + result);
    }

    function nom(id)
    {
        return document.getElementById(id);
    }

    function simplificaFraccionario(val){
        var parteVal = val.split("/");
        var numerador = Number(parteVal[0]);
        var denominador = Number(parteVal[1]);
        var M = mcd(numerador,denominador);
        numerador/= M;
        denominador /= M;
        var respuesta = numerador + "/" +denominador;
        if(denominador === 1){
            respuesta = numerador;
        }
        return respuesta;
    };

    function mcd(a,b){
        var r = a % b;
        if(r == 0){
            return b;
        }
        else{
            return mcd(b,r);
        }
    }
}
