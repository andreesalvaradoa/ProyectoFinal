function init(){
	if(window.addEventListener){
		window.addEventListener("load", San_miguel, false);
	}
	else if(window.attachEvent){
		window.attachEvent("onload",San_miguel,false);
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
function San_miguel(){
	Departamento = new Array('<p>San Miguel</p>');
	Historia = new Array('<p class="text-justify">San Miguel es un departamento de El Salvador. Su cabecera departamental es San Miguel, ciudad que se encuentra a 138 km de San Salvador. Limita al Norte con la República de Honduras; al Este con los departamentos de Morazán y La Unión; al Oeste con los departamentos de Cabañas y Usulután; y al Sur con el océano Pacífico. Cubre un área de 2.077,1 km² y tiene una población que sobrepasa los 480.000 habitantes.</p>');
	/*Declaracion de Variable Interna para recorrer el arreglo de Municipios,
	de la Misma manera para recorrer los elementos de otros arreglos*/
	var Municipioss, Municipioss2, rios, lagos, volcanes, centertour, personaje;
	Municipioss = "";
	Municipios = new Array('<ol><span class="glyphicon glyphicon-home"></span> Carolina</ol>','<ol><span class="glyphicon glyphicon-home"></span> Chapeltique</ol>', '<ol><span class="glyphicon glyphicon-home"></span> Chinameca</ol>','<ol><span class="glyphicon glyphicon-home"></span> Chirilagua</ol>','<ol><span class="glyphicon glyphicon-home"></span> Ciudad Barrios</ol>', '<ol><span class="glyphicon glyphicon-home"></span> Comacaran</ol>', '<ol><span class="glyphicon glyphicon-home"></span> El Transito </ol>', '<ol><span class="glyphicon glyphicon-home"></span> Lolotique </ol>','<ol><span class="glyphicon glyphicon-home"></span> Moncagua </ol>');
	for(i = 0;  i < Municipios.length; i++){
		Municipioss += Municipios[i];
	}
	Municiipios2 = new Array('<ol><span class="glyphicon glyphicon-home"></span> Nueva Guadalupe</ol>','<ol><span class="glyphicon glyphicon-home"></span> Nuevo Eden</ol>', '<ol><span class="glyphicon glyphicon-home"></span> Quelepa</ol>','<ol><span class="glyphicon glyphicon-home"></span> San Antonio</ol>','<ol><span class="glyphicon glyphicon-home"></span> San Gerardo</ol>', '<ol><span class="glyphicon glyphicon-home"></span> San Jose</ol>', '<ol><span class="glyphicon glyphicon-home"></span> San Luis de la Reina </ol>', '<ol><span class="glyphicon glyphicon-home"></span> San Miguel </ol>','<ol><span class="glyphicon glyphicon-home"></span> San Rafael Oriente </ol>');
	for(m = 0; m< Municiipios2.length; m++){
		Municipioss2 += Municiipios2[m];
	}
	Rios = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Rio Torala</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Rio Lempa</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Rio La Vega y El Pulido</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Rio Grande de San Miguel</ol>');
	rios = "";
	for(j = 0; j < Rios.length; j++){
		rios += Rios[j];
	}
	Lagos = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Lago Olomega</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Lago El Jocotal</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Lago San Juan El Gozo</ol>');
	lagos = "";
	for(l = 0; l < Lagos.length; l++){
		lagos += Lagos[l];
	}
	Volcanes = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Volcan Chaparrastique</ol>');
	Personajes = new Array('<ol><span class="glyphicon glyphicon-ok"></span> Monseñor Oscar Arnulfo Romero</ol>', '<ol><span class="glyphicon glyphicon-ok"></span> Capitan general Jose Gerardo Barrios</ol>', '<ol><span class="glyphicon glyphicon-ok"></span> Doctor David j. Guzman</ol>', '<ol><span class="glyphicon glyphicon-ok"></span> Doctor don Salvador Valenzuela</ol>');
	personaje = "";
	for(k = 0; k < Personajes.length; k++){
		personaje += Personajes[k];
	}
	CentroTour = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>  Parque Recreativo Montegrande</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>  Sendero Posada de los Pajaros</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>  Parque Recreativo AQUA PARK</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>  Ruinas Arqueologicas de Moncagua</ol>');
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
	document.getElementById("laguna").innerHTML = lagos;
	document.getElementById("volca").innerHTML = Volcanes[0];
}

window.onload = init();