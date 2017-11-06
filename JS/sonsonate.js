function init(){
	if(window.addEventListener){
		window.addEventListener("load", Sonsonate, false);
	}
	else if(window.attachEvent){
		window.attachEvent("onload", Sonsonate,false);
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
function Sonsonate(){
	Departamento = new Array('<p>Sonsonate</p>');
	Historia = new Array('<p class="text-justify">Sonsonate es una antigua provincia de la Capitanía General de Guatemala que obtuvo su independencia de España en 1821 y que a partir de 1824 junto con la provincia de San Salvador formaron el país que hoy es llamado El Salvador.</p>');
	/*Declaracion de Variable Interna para recorrer el arreglo de Municipios,
	de la Misma manera para recorrer los elementos de otros arreglos*/
	var Municipioss, rios, lagos, volcanes, centertour, personaje;
	Municipioss = "";
	Municipios = new Array('<ol><span class="glyphicon glyphicon-home"></span> Acajutla</ol>','<ol><span class="glyphicon glyphicon-home"></span> Armenia</ol>', '<ol><span class="glyphicon glyphicon-home"></span> Caluco</ol>','<ol><span class="glyphicon glyphicon-home"></span> Cushinahuat</ol>','<ol><span class="glyphicon glyphicon-home"></span> Izalco</ol>', '<ol><span class="glyphicon glyphicon-home"></span> Juayua</ol>', '<ol><span class="glyphicon glyphicon-home"></span> Nahuizalco </ol>', '<ol><span class="glyphicon glyphicon-home"></span> Nahuilingo </ol>','<ol><span class="glyphicon glyphicon-home"></span> Sonsonate </ol>','<ol><span class="glyphicon glyphicon-home"></span> Sonzacate </ol>');
	for(i = 0;  i < Municipios.length; i++){
		Municipioss += Municipios[i];
	}
	Rios = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Rio Acachapa</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Rio Agua Caliente</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Rio Atecozol</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Rio Negro</ol>');
	rios = "";
	for(j = 0; j < Rios.length; j++){
		rios += Rios[j];
	}
	Lagos = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Lago Coatepeque</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Lago Guija</ol>');
	lagos = "";
	for(l = 0; l < Lagos.length; l++){
		lagos += Lagos[l];
	}
	Volcanes = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Volcan Llamatepec</ol>','<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Volcan Izalco</ol>');
	Personajes = new Array('<ol><span class="glyphicon glyphicon-ok"></span> Salvador Salazar Arrue</ol>', '<ol><span class="glyphicon glyphicon-ok"></span> Rafael Campos</ol>', '<ol><span class="glyphicon glyphicon-ok"></span> Oscar Osorio</ol>', '<ol><span class="glyphicon glyphicon-ok"></span> Pancho Lara</ol>');
	personaje = "";
	for(k = 0; k < Personajes.length; k++){
		personaje += Personajes[k];
	}
	CentroTour = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>  Ruta de las Flores</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Atecozol </ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Los Chorreos de las Calera</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>  Puerto Acajutla</ol>');
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