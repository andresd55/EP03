window.onload = function()
{
    var trianguloPascal = function(niveles)
    {
        var capicua = "111111111"; 
        var triangulo = [];
        var operaNivel = [];
        for(var i = 1; i <= niveles; i++)
        {
            operaNivel = [];
            var numero = capicua.substring(1, i+1); 
            var multiplicacion = (numero*numero)+"";
            for(var c = 0; c < multiplicacion.length; c++)
            {
                operaNivel.push(multiplicacion.charAt(c));
                if(niveles == 9 && i == 9 && multiplicacion.charAt(c) == 8){
                    operaNivel.push(9);
                    operaNivel.push(8);
                }
            }
            triangulo.push(operaNivel);
        }
        return triangulo;
    };

    var randomColor = function()
    {
        return '#'+(function lol(m,s,c){return s[m.floor(m.random() * s.length)] +
        (c && lol(m,s,c-1));})(Math,'0123456789ABCDEF',4);
    };

    var imprimeTriangulo = (function imprimeTriangulo(nivel)
    {
        var txt = "";
        var triangulo = trianguloPascal(nivel);
        var colorCelda = "";
        nom_div("pascal").innerHTML = "";
        for(var i = 0; i < triangulo.length; i++)
        {
            txt += "<div align = 'center' class = 'nivel' style = 'padding-bottom: 10px;'>";
            for(var c = 0; c < triangulo[i].length; c++)
            {
                colorCelda =  "background-color:" + randomColor();
                txt += "<div style = 'display: inline-block; "+(colorCelda)+"' class = 'celda'"+"'>" + 
                            (triangulo[i][c]) + 
                        "</div>";
            }
            txt += "</div>";
        }
        nom_div("pascal").innerHTML = txt;
        return imprimeTriangulo;
    })(2);

    nom_div("rango").addEventListener('change', function(event)
    {
        nom_div("txtrango").innerHTML = this.value;
        imprimeTriangulo(Number(this.value));
    });

    function nom_div(div)
    {
        return document.getElementById(div);
    }
};