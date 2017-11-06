function initUsu(){
	if(window.addEventListener){
		window.addEventListener("load", Usulutan, false);
	}
	else if(window.attachEvent){
		window.attachEvent("onload",Usulutan,false);
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
function Usulutan(){
	Departamento = new Array('<p>Usulutan</p>');
	Historia = new Array('<p class="text-justify">Usulután ubicado en la zona oriental es uno de los catorce departamentos que conforman la República de El Salvador. Su cabecera (ciudad principal) es Usulután que cuenta con una población de 73 064 habitantes según censo del 2007, ocupando la posición número 15 en población. Sus lugares turísticos más importantes son el volcán de Usulután, la laguna de Alegría en el volcán Tecapa y la bahía de Jiquilisco pero la ciudad más pintoresca es la Ciudad de Jucuapa que cuenta con el Cerro el Tigre, la frescura y el sabor del oriente con el incomparable paisaje de sus cafetales y el calor de su gente hospitalaria que hacen de Jucuapa una ciudad única al norte del departamento de Usulután con acceso en la parte Norte por la autopista Panamericana a solo 118 kilómetros de Ciudad Capital San Salvador y por el sector Sur por la Autopista Litoral cruzando el Municipio de Santa Elena.</p>');
	/*Declaracion de Variable Interna para recorrer el arreglo de Municipios,
	de la Misma manera para recorrer los elementos de otros arreglos*/
	var Municipioss, Municipioss2, rios, lagos, volcanes, centertour, personaje;
	Municipioss = "";
	Municipios = new Array('<ol><span class="glyphicon glyphicon-home"></span> Alegria</ol>','<ol><span class="glyphicon glyphicon-home"></span> Berlin</ol>', '<ol><span class="glyphicon glyphicon-home"></span> California</ol>','<ol><span class="glyphicon glyphicon-home"></span> Concepcion Batres</ol>','<ol><span class="glyphicon glyphicon-home"></span> El triunfo</ol>', '<ol><span class="glyphicon glyphicon-home"></span> Ereguayquin</ol>', '<ol><span class="glyphicon glyphicon-home"></span> Estanzuelas</ol>', '<ol><span class="glyphicon glyphicon-home"></span> Jiquilisco </ol>','<ol><span class="glyphicon glyphicon-home"></span> Jucuaran </ol>');
	for(i = 0;  i < Municipios.length; i++){
		Municipioss += Municipios[i];
	}
	Municiipios2 = new Array('<ol><span class="glyphicon glyphicon-home"></span> Usulután</ol>','<ol><span class="glyphicon glyphicon-home"></span> Mercedez Umaña</ol>', '<ol><span class="glyphicon glyphicon-home"></span> Nueva Granada</ol>','<ol><span class="glyphicon glyphicon-home"></span> Ozatlan</ol>','<ol><span class="glyphicon glyphicon-home"></span> Puerto el triunfo</ol>', '<ol><span class="glyphicon glyphicon-home"></span> San Agustin</ol>', '<ol><span class="glyphicon glyphicon-home"></span> San Buenaventura</ol>', '<ol><span class="glyphicon glyphicon-home"></span> San Dioniso</ol>','<ol><span class="glyphicon glyphicon-home"></span> San Francisco Javier</ol>');
	for(m = 0; m< Municiipios2.length; m++){
		Municipioss2 += Municiipios2[m];
	}
	Rios = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Rio El Molino</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Playa El Espino</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Bahia de Jiquilisco</ol>');
	rios = "";
	for(j = 0; j < Rios.length; j++){
		rios += Rios[j];
	}
	Lagos = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Laguna del Palo Galan</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Lago La Alegria</ol>');
	lagos = "";
	for(l = 0; l < Lagos.length; l++){
		lagos += Lagos[l];
	}
	Volcanes = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Volcan de Usulutan</ol>');
	Personajes = new Array('<ol><span class="glyphicon glyphicon-ok"></span> Pedro Alvarado</ol>', '<ol><span class="glyphicon glyphicon-ok"></span> Diego Rojas</ol>', '<ol><span class="glyphicon glyphicon-ok"></span> Diego de Holguin</ol>');
	personaje = "";
	for(k = 0; k < Personajes.length; k++){
		personaje += Personajes[k];
	}
	CentroTour = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>  Bosque Nancuchiname</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Parque Acuatico Santa Elena</ol>');
	centertour = "";
	for(c = 0; c < CentroTour.length; c++){
		centertour += CentroTour[c];
	}

	document.getElementById("Departament").innerHTML = Departamento[0];
	document.getElementById("HistoryUs").innerHTML = Historia[0];
	document.getElementById("Municipio").innerHTML = Municipioss;
	document.getElementById("Municipio2").innerHTML = Municipioss2;
	document.getElementById("centro").innerHTML = centertour;
	document.getElementById("Persons").innerHTML = personaje;
	document.getElementById("river").innerHTML = rios;
	document.getElementById("laguna").innerHTML = lagos;
	document.getElementById("volca").innerHTML = Volcanes[0];
}

window.onload = initUsu();