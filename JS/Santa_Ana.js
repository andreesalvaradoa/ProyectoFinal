function init(){
	if(window.addEventListener){
		window.addEventListener("load", Santa_Ana, false);
	}
	else if(window.attachEvent){
		window.attachEvent("onload",Santa_Ana,false);
	}
}

/*Declaracion de Variables*/
var Historia;
var Departamento;
var Municipios;
var Rios;
var Lagos;
var Volcanes;
var Lagos;
var cerros;
var Personajes;
var CentroTour;

/*Declaracion de Funcion San Miguel*/
function Santa_Ana(){
	Departamento = new Array('<p>Santa Ana</p>');
	Historia = new Array('<p class="text-justify">El nombre antiguo de este lugar era Sihuateguacan que en nahuat significa "Ciudad de Sacerdotistas". Este departamento esta hubicado en la zona occidental de la repubica de El Salvador. El departemento de Santa Ana posee una extension territorial es de 2,023 km².</p>');
	/*Declaracion de Variable Interna para recorrer el arreglo de Municipios,
	de la Misma manera para recorrer los elementos de otros arreglos*/
	var Municipioss, rios, lagos, volcanes, centertour, personaje;
	Municipioss = "";
	Municipios = new Array('<ol><span class="glyphicon glyphicon-home"></span> Candelaria de la Frontera</ol>','<ol><span class="glyphicon glyphicon-home"></span> Coatepeque</ol>', '<ol><span class="glyphicon glyphicon-home"></span> Chalchuapa</ol>','<ol><span class="glyphicon glyphicon-home"></span> El Congo</ol>','<ol><span class="glyphicon glyphicon-home"></span> El Provenir</ol>', '<ol><span class="glyphicon glyphicon-home"></span> Masahuat</ol>', '<ol><span class="glyphicon glyphicon-home"></span> Metapan </ol>', '<ol><span class="glyphicon glyphicon-home"></span> San Antonio Pajona </ol>','<ol><span class="glyphicon glyphicon-home"></span> San Sebastian Salitrio </ol>','<ol><span class="glyphicon glyphicon-home"></span> Santa Ana </ol>','<ol><span class="glyphicon glyphicon-home"></span> Santa Rosa Guachipilin </ol>');
	for(i = 0;  i < Municipios.length; i++){
		Municipioss += Municipios[i];
	}
	Rios = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Rio Suquiapa</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Rio Apachacal</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Rio Lempa</ol>');
	rios = "";
	for(j = 0; j < Rios.length; j++){
		rios += Rios[j];
	}
	Lagos = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Lago Coatepeque</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Lago Guija</ol>');
	lagos = "";
	for(l = 0; l < Lagos.length; l++){
		lagos += Lagos[l];
	}
	Volcanes = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Volcan Llamatepe</ol>');
	Personajes = new Array('<ol><span class="glyphicon glyphicon-ok"></span> General Tomas Regalado</ol>', '<ol><span class="glyphicon glyphicon-ok"></span> Pedro Jose Escalon</ol>', '<ol><span class="glyphicon glyphicon-ok"></span> David Granadino</ol>', '<ol><span class="glyphicon glyphicon-ok"></span> Pancho Lara</ol>');
	personaje = "";
	for(k = 0; k < Personajes.length; k++){
		personaje += Personajes[k];
	}
	CentroTour = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>  El lago de Coatepeque</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Parque acuatico Galicia</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>Catedral de Santa Ana </ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Parque Ecologico San Lorenzo</ol>');
	centertour = "";
	for(c = 0; c < CentroTour.length; c++){
		centertour += CentroTour[c];
	}

	document.getElementById("Departament").innerHTML = Departamento[0];
	document.getElementById("History").innerHTML = Historia[0];
	document.getElementById("Municipio").innerHTML = Municipioss;
	document.getElementById("centro").innerHTML = centertour;
	document.getElementById("Persons").innerHTML = personaje;
	document.getElementById("river").innerHTML = rios;
	document.getElementById("laguna").innerHTML = lagos;
	document.getElementById("volca").innerHTML = Volcanes[0];
}

window.onload = init();