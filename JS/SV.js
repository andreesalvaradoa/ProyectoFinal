function initUsu(){
	if(window.addEventListener){
		window.addEventListener("load", SanVicente, false);
	}
	else if(window.attachEvent){
		window.attachEvent("onload",SanVicente,false);
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
function SanVicente(){
	Departamento = new Array('<p>San Vicente</p>');
	Historia = new Array('<p class="text-justify">San Vicente es un departamento de El Salvador ubicado en la zona oriental del país. Limita al Norte con la república de Honduras; al Sur y al Oeste con el departamento de San Miguel, y al Sur y al Este con el departamento de La Unión. Su cabecera departamental es San Francisco. Morazán comprende un territorio de 1 447 km² y cuenta con una población de 181 285 habitantes. </p>');
	/*Declaracion de Variable Interna para recorrer el arreglo de Municipios,
	de la Misma manera para recorrer los elementos de otros arreglos*/
	var Municipioss, Municipioss2, rios, lagos, volcanes, centertour, personaje;
	Municipioss = "";
	Municipios = new Array('<ol><span class="glyphicon glyphicon-home"></span> Arambala</ol>','<ol><span class="glyphicon glyphicon-home"></span> Chilanga</ol>', '<ol><span class="glyphicon glyphicon-home"></span> Delicias de Concepcion</ol>','<ol><span class="glyphicon glyphicon-home"></span> El Rosario</ol>','<ol><span class="glyphicon glyphicon-home"></span> Joateca</ol>', '<ol><span class="glyphicon glyphicon-home"></span> Lolotiquillo</ol>', '<ol><span class="glyphicon glyphicon-home"></span> Osicala</ol>', '<ol><span class="glyphicon glyphicon-home"></span> San Carlos </ol>','<ol><span class="glyphicon glyphicon-home"></span> San Francisco </ol>');
	for(i = 0;  i < Municipios.length; i++){
		Municipioss += Municipios[i];
	}
	Municiipios2 = new Array('<ol><span class="glyphicon glyphicon-home"></span> cacaopera</ol>','<ol><span class="glyphicon glyphicon-home"></span> Corinto</ol>', '<ol><span class="glyphicon glyphicon-home"></span> El Divisadero</ol>','<ol><span class="glyphicon glyphicon-home"></span> Guatajiagua</ol>','<ol><span class="glyphicon glyphicon-home"></span> Jocoro</ol>', '<ol><span class="glyphicon glyphicon-home"></span> Meanguera</ol>', '<ol><span class="glyphicon glyphicon-home"></span> Perquin</ol>', '<ol><span class="glyphicon glyphicon-home"></span> San Fernando</ol>','<ol><span class="glyphicon glyphicon-home"></span> San isidro</ol>');
	for(m = 0; m< Municiipios2.length; m++){
		Municipioss2 += Municiipios2[m];
	}
	Rios = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Rio el Sapo</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Playa Torala</ol>');
	rios = "";
	for(j = 0; j < Rios.length; j++){
		rios += Rios[j];
	}
	Volcanes = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Volcan Guatajiagua</ol>');
	Personajes = new Array('<ol><span class="glyphicon glyphicon-ok"></span> Francisco Morazan</ol>', '<ol><span class="glyphicon glyphicon-ok"></span> Manuel Estrada</ol>');
	personaje = "";
	for(k = 0; k < Personajes.length; k++){
		personaje += Personajes[k];
	}
	CentroTour = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>  Catedral San Francisco</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Parque Acuatico Pueblo Cacaopera</ol>');
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