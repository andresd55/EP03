function conversionGalones(){
  var galones = document.getElementById("galones").value;
  var litros=galones*3.7854;
  alert("Numero de litros: " +litros);
}
///////////////////////////////////////SEGUNDO
function centigradosFahrenheit(){
  var centigrados = document.getElementById("centigradosF").value;
  var fahrenheit = (centigrados * 9/5) + 32;
  alert("Grados fahrenheit: " + fahrenheit);
}
function centigradosKelvin(){
  var centigrados = document.getElementById("centigradosK").value;
  var kelvin = parseFloat(centigrados) + 273.15;
  alert("Grados kelvin: " + kelvin);
}
function fahrenheitCentigrados(){
  var fahrenheit = document.getElementById("fahrenheitC").value;
  var centigrados = (fahrenheit - 32) * 5/9;
  alert("Grados centigrados: " + centigrados);
}
function fahrenheitKelvin(){
  var fahrenheit = document.getElementById("fahrenheitK").value;
  var kelvin = (fahrenheit - 32) * 5/9 + 273.15;
  alert("Grados kelvin: " + kelvin);
}
function KelvinFahrenheit(){
  var kelvin = document.getElementById("kelvinF").value;
  var fahrenheit = (kelvin - 273.15) * 9/5 + 32;
  alert("Grados fahrenheit: " + fahrenheit);
}
function KelvinCentigrados(){
  var kelvin = document.getElementById("kelvinC").value;
  var centigrados=kelvin - 273.15;
  alert("Grados centigrados: " + centigrados);
}
//////////////////////////////TERCERO
function pesoLuna(){
  var pesoT = document.getElementById("peso").value;
  var pesoL=pesoT*0.17;
  alert("Peso efectivo en la luna es: " +pesoL + " kg");
}
////////////////////////////////////////CUARTO
function areaCirculo(){
  var radio = document.getElementById("radio").value;
  var pi = Math.PI;
  var area = pi * (radio * radio);
  alert("Area del circulo: " + area);
}
function areaTriangulo(){
  var base = document.getElementById("base").value;
  var altura = document.getElementById("altura").value;
  var area=(base*altura)/2;
  alert("Area del triangulo: " + area);
}
function areaCuadrado(){
  var lado = document.getElementById("lado").value;
  var area=lado*lado;
  alert("Area del cuadrado: " + area);
}
//////////////////////////////QUINTO
function cantidadVocales(){
  var palabra = document.getElementById("palabra").value;
  var patron = /[aeiou]/gi;
  var vocales = palabra.match(patron);
  var numeroVocales = vocales.length;
  alert("La palabra contiene " + numeroVocales +" vocales");
}

function cantidadVocales2(){
  var palabra = document.getElementById("palabra").value;
  var numeroVocales = 0;
  var vocalA = 0;
  var vocalE = 0;
  var vocalI = 0;
  var vocalO = 0;
  var vocalU = 0;
  palabra = palabra.toLowerCase();
  for(var i=0; i < palabra.length; i++){
  	if(palabra.charAt(i) == 'a'){
  		vocalA++;
  	}
  	if(palabra.charAt(i) == 'e'){
  		vocalE++;
  	}
  	if(palabra.charAt(i) == 'i'){
  		vocalI++;
  	}
  	if(palabra.charAt(i) == 'o'){
  		vocalO++;
  	}
  	if(palabra.charAt(i) == 'u'){
  		vocalU++;
  	}
  }
  numeroVocales = vocalA + vocalE + vocalI + vocalO + vocalU;
  alert("La palabra contiene " + vocalA +" A, " + vocalE +" E, " + vocalI +" I, " + vocalO +" O y " + vocalU +" U, en total " + numeroVocales +" vocales");
}