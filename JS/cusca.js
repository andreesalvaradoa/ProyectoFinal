function init(){
	if(window.addEventListener){
		window.addEventListener("load", Cusca, false);
	}
	else if(window.attachEvent){
		window.attachEvent("onload",Cusca,false);
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

/*Declaracion de Funcion cusca*/
function Cusca(){
	Departamento = new Array('<p>Cuscatlan</p>');
	Historia = new Array('<p class="text-justify">Consumada la independencia, el 22 de mayo de 1835, se constituyó el departamento de Cuscatlán. Un año más tarde de que Francisco Morazán instalara la capital de la República Federal en San Salvador. Cojutepeque fue designada como cabecera departamental el 12 de noviembre de 1861, sustituyendo a SuchitotoCuzcatlán, era desde la antiguedad la ciudad célebre por sus riquezas y el poderío de sus príncipes, la misma fue considerada la principal metrópoli de los indios pipiles de El Salvador Precolombino. Fundada en 1504 por el monarca Topiltzín Acxitl y librada de muchas guerras por el valiente indio Atlacatl, quien reinó en el lugar antes de la época colonial.En 1770, su población apenas la formaban 19 familias indígenas y 115 ladinos. Los siglos han transcurrido y sucesos importantes han marcado la historia de la ciudad. Cuscatlán constó con los distritos o partidos de Cojutepeque y Suchitoto, creados respectivamente en 1786. Fue erigido el municipio de Cojutepeque por decreto del Supremo Gobierno el 22 de mayo de 1835, como su cabezera departamental.</p>');
	/*Declaracion de Variable Interna para recorrer el arreglo de Municipios,
	de la Misma manera para recorrer los elementos de otros arreglos*/
	var Municipioss, Municipioss2, rios, lagos, volcanes, centertour, personaje;
	Municipioss = "";
	Municipios = new Array('<ol><span class="glyphicon glyphicon-home"></span> Cojutepeque</ol>','<ol><span class="glyphicon glyphicon-home"></span> Candelaria</ol>', '<ol><span class="glyphicon glyphicon-home"></span> Carmen</ol>','<ol><span class="glyphicon glyphicon-home"></span>  Rosario</ol>','<ol><span class="glyphicon glyphicon-home"></span> Monte San Juan</ol>', '<ol><span class="glyphicon glyphicon-home"></span> Oratorio de Concepción</ol>', '<ol><span class="glyphicon glyphicon-home"></span> San Bartolomé Perulapía </ol>', '<ol><span class="glyphicon glyphicon-home"></span> San Cristóbal </ol>','<ol><span class="glyphicon glyphicon-home"></span> San José Guayabal </ol> ','<ol><span class="glyphicon glyphicon-home"></span> San Pedro Perulapán</ol>','<ol><span class="glyphicon glyphicon-home"></span>San Rafael Cedros</ol>','<ol><span class="glyphicon glyphicon-home"></span> San Ramón</ol>');
	for(i = 0;  i < Municipios.length; i++){
		Municipioss += Municipios[i];
	}
	//Municiipios2 = new Array('<ol><span class="glyphicon glyphicon-home"></span> Nueva Guadalupe</ol>','<ol><span class="glyphicon glyphicon-home"></span> Nuevo Eden</ol>', '<ol><span class="glyphicon glyphicon-home"></span> Quelepa</ol>','<ol><span class="glyphicon glyphicon-home"></span> San Antonio</ol>','<ol><span class="glyphicon glyphicon-home"></span> San Gerardo</ol>', '<ol><span class="glyphicon glyphicon-home"></span> San Jose</ol>', '<ol><span class="glyphicon glyphicon-home"></span> San Luis de la Reina </ol>', '<ol><span class="glyphicon glyphicon-home"></span> San Miguel </ol>','<ol><span class="glyphicon glyphicon-home"></span> San Rafael Oriente </ol>');
	//for(m = 0; m< Municiipios2.length; m++){
		//Municipioss2 += Municiipios2[m];
	//}
	Rios = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Río Agua Caliente</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Río Acuitayo</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Río Atizán</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>Río Champezote</ol>');
	rios = "";
	for(j = 0; j < Rios.length; j++){
		rios += Rios[j];
	}
	Lagos = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Lago Suchitlán</ol>');
	lagos = "";
	for(l = 0; l < Lagos.length; l++){
		lagos += Lagos[l];
	}
	Volcanes = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Volcan Guazapa</ol>');
	Personajes = new Array('<ol><span class="glyphicon glyphicon-ok"></span> DR.Alfonso Quiñones Molina</ol>', '<ol><span class="glyphicon glyphicon-ok"></span>Dr.Pío Romero Bosque</ol>', '<ol><span class="glyphicon glyphicon-ok"></span> José Mariano Hernández</ol>', '<ol><span class="glyphicon glyphicon-ok"></span> Arturo Araujo Fajardo</ol>','<ol><span class="glyphicon glyphicon-ok"></span>Pedro Cortés</ol>','<ol><span class="glyphicon glyphicon-ok"></span>Doctor Alfonso Quiñones Molina</ol>');
	personaje = "";
	for(k = 0; k < Personajes.length; k++){
		personaje += Personajes[k];
	}
	CentroTour = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok">Lago Ilopango</span></ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>  Lago Suchitlan</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Iglesia Santa Lucia Suchitoto</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>  Cascada Los Tercios-Suchitoto</ol>');
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