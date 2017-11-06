function initUsu(){
	if(window.addEventListener){
		window.addEventListener("load", paz, false);
	}
	else if(window.attachEvent){
		window.attachEvent("onload",paz,false);
	}
}

/*Declaracion de Variables*/
var Historia;
var Departamento;
var Municipios;
var Municiipios2;
var Rios;
var Lagos;
var Volcanes;
var Lagos;
var cerros;
var Personajes;
var CentroTour;

/*Declaracion de Funcion San Miguel*/
function paz(){
	Departamento = new Array('<p>La Paz</p>');
	Historia = new Array('<p class="text-justify">La Paz es un departamento de El Salvador ubicado en la zona oriental del país. Limita al Norte con la república de Honduras; al Sur y al Oeste con el departamento de San Miguel, y al Sur y al Este con el departamento de La Unión. Su cabecera departamental es San Francisco. Morazán comprende un territorio de 1 447 km² y cuenta con una población de 181 285 habitantes.</p>');
	/*Declaracion de Variable Interna para recorrer el arreglo de Municipios,
	de la Misma manera para recorrer los elementos de otros arreglos*/
	var Municipioss, Municipioss2, rios, lagos, volcanes, centertour, personaje;
	Municipioss = "";
	Municipios = new Array('<ol><span class="glyphicon glyphicon-home"></span> La Union</ol>','<ol><span class="glyphicon glyphicon-home"></span> Yucuaiquin</ol>', '<ol><span class="glyphicon glyphicon-home"></span> Intipuca</ol>','<ol><span class="glyphicon glyphicon-home"></span> El Carmen</ol>','<ol><span class="glyphicon glyphicon-home"></span> Bolivar</ol>', '<ol><span class="glyphicon glyphicon-home"></span> Santa Rosa de Lima</ol>', '<ol><span class="glyphicon glyphicon-home"></span> Anamoros</ol>', '<ol><span class="glyphicon glyphicon-home"></span> Concepcion de Oriente</ol>','<ol><span class="glyphicon glyphicon-home"></span> Lislique </ol>');
	for(i = 0;  i < Municipios.length; i++){
		Municipioss += Municipios[i];
	}
	Municiipios2 = new Array('<ol><span class="glyphicon glyphicon-home"></span> San Alejo</ol>','<ol><span class="glyphicon glyphicon-home"></span> Conchagua</ol>', '<ol><span class="glyphicon glyphicon-home"></span> San Jose</ol>','<ol><span class="glyphicon glyphicon-home"></span> Yayantique</ol>','<ol><span class="glyphicon glyphicon-home"></span> Meanguera del Golfo</ol>', '<ol><span class="glyphicon glyphicon-home"></span> Pasaquina</ol>', '<ol><span class="glyphicon glyphicon-home"></span> Nueva Esparta</ol>', '<ol><span class="glyphicon glyphicon-home"></span> Poloros</ol>');
	for(m = 0; m< Municiipios2.length; m++){
		Municipioss2 += Municiipios2[m];
	}
	Rios = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> PLaya El Jaguey</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Playa Blanca</ol>');
	rios = "";
	for(j = 0; j < Rios.length; j++){
		rios += Rios[j];
	}
	Volcanes = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Volcan Conchagua</ol>');
	Personajes = new Array('<ol><span class="glyphicon glyphicon-ok"></span> Antonio Grau Mora</ol>', '<ol><span class="glyphicon glyphicon-ok"></span> Maria Cegarra Salcedo</ol>', '<ol><span class="glyphicon glyphicon-ok"></span> Asensio Saez</ol>');
	personaje = "";
	for(k = 0; k < Personajes.length; k++){
		personaje += Personajes[k];
	}
	CentroTour = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>  Parque de la Familia</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Bosque Conchagua</ol>');
	centertour = "";
	for(c = 0; c < CentroTour.length; c++){
		centertour += CentroTour[c];
	}

	document.getElementById("Departament").innerHTML = Departamento[0];
	document.getElementById("History").innerHTML = Historia[0];
	document.getElementById("Municipio").innerHTML = Municipioss;
	document.getElementById("Municipio2").innerHTML = Municipioss2;
	document.getElementById("centro").innerHTML = centertour;
	document.getElementById("Persons").innerHTML = personaje;
	document.getElementById("river").innerHTML = rios;
	document.getElementById("volca").innerHTML = Volcanes[0];
}

window.onload = initUsu();