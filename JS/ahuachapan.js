function init(){
	if(window.addEventListener){
		window.addEventListener("load", ahuachapan, false);
	}
	else if(window.attachEvent){
		window.attachEvent("onload", ahuachapan,false);
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
function ahuachapan(){
	Departamento = new Array('<p>Ahuachapan</p>');
	Historia = new Array('<p class="text-justify">El departamento de Ahuachapán es el más occidental de los 14 departamentos en los que está dividida la República de El Salvador. Su cabecera, la ciudad de Ahuachapán se encuentra a 100 km de San Salvador (capital de la república).El departamento tiene una extensión de 1.239,60 km².</p>');
	/*Declaracion de Variable Interna para recorrer el arreglo de Municipios,
	de la Misma manera para recorrer los elementos de otros arreglos*/
	var Municipioss, rios, lagos, volcanes, centertour, personaje;
	Municipioss = "";
	Municipios = new Array('<ol><span class="glyphicon glyphicon-home"></span> Ahuachapan</ol>','<ol><span class="glyphicon glyphicon-home"></span> Apaneca</ol>', '<ol><span class="glyphicon glyphicon-home"></span> Atiquizaya</ol>','<ol><span class="glyphicon glyphicon-home"></span> Concepcion de Ataco</ol>','<ol><span class="glyphicon glyphicon-home"></span> El Refugio</ol>', '<ol><span class="glyphicon glyphicon-home"></span> Guaymangos</ol>', '<ol><span class="glyphicon glyphicon-home"></span> Jujutla </ol>', '<ol><span class="glyphicon glyphicon-home"></span> San Francisco Menendez </ol>','<ol><span class="glyphicon glyphicon-home"></span> San Lorenzo </ol>','<ol><span class="glyphicon glyphicon-home"></span> San Pedro Puxtla </ol>','<ol><span class="glyphicon glyphicon-home"></span> Tacuba </ol>','<ol><span class="glyphicon glyphicon-home"></span> Turin </ol>');
	for(i = 0;  i < Municipios.length; i++){
		Municipioss += Municipios[i];
	}
	Rios = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Rio Paz</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Rio Tacuba</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Rio Cara Sucia</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Rio dwel Satelitre</ol>');
	rios = "";
	for(j = 0; j < Rios.length; j++){
		rios += Rios[j];
	}
	Lagos = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Laguna Verde</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Laguna de las Ninfas</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Laguna del Llano</ol>','<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Laguna de Morazan</ol>');
	lagos = "";
	for(l = 0; l < Lagos.length; l++){
		lagos += Lagos[l];
	}
	Volcanes = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Volcan Apaneca</ol>');
	Personajes = new Array('<ol><span class="glyphicon glyphicon-ok"></span> Carlos Castro, Novelsita</ol>', '<ol><span class="glyphicon glyphicon-ok"></span> Alfredo Espino, Poeta</ol>', '<ol><span class="glyphicon glyphicon-ok"></span> Miguel Angel Espino, Novelista</ol>', '<ol><span class="glyphicon glyphicon-ok"></span> Baron Castro, Escritor y Pintor</ol>');
	personaje = "";
	for(k = 0; k < Personajes.length; k++){
		personaje += Personajes[k];
	}
	CentroTour = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>  Sierra Apaneca-Ilamatepec</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>  Parque Nacional El Imposible</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>  Laguna de Las Ninfas</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>  Laguna Verde</ol>');
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