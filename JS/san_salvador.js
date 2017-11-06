function init(){
	if(window.addEventListener){
		window.addEventListener("load", San_salvador, false);
	}
	else if(window.attachEvent){
		window.attachEvent("onload",San_salvador,false);
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
function San_salvador(){
	Departamento = new Array('<p>San Salvador</p>');
	Historia = new Array('<p class="text-justify">San Salvador es la capital de la República de El Salvador y la cabecera del departamento y municipio homónimos.3 Como capital de la nación, alberga las sedes del Gobierno y el Consejo de Ministros de El Salvador, Asamblea Legislativa, Corte Suprema de Justicia y demás instituciones y organismos del Estado, así como la residencia oficial del Presidente de la República. Es la mayor ciudad del país desde el punto de vista económico y demográfico, y asiento de las principales industrias y empresas de servicios de El Salvador.San Salvador es una de las primeras ciudades de fundación española en la Centroamérica histórica, la región que durante la colonización hispánica de América constituyó el Reino o Capitanía General de Guatemala. También resulta ser la capital más antigua y duradera en la región antedicha, en el sentido que desde su traslado en 1545 al Valle de las Hamacas, ha permanecido ahí desde ese año hasta nuestros días, y, también, debido a que desde que la Monarquía Española la designó como sede administrativa de la provincia sansalvadoreña en 1540, así permaneció hasta llegar a establecerse como capital del Estado salvadoreño. Pese a los terremotos, inundaciones y erupciones que esta población tuvo que soportar desde hace siglos, siempre fue reconstruida en su sitio original. Y, pese a algunos intentos de traslado en áreas menos sísmicas, San Salvador se ha establecido como la principal ciudad de El Salvador.</p>');
	/*Declaracion de Variable Interna para recorrer el arreglo de Municipios,
	de la Misma manera para recorrer los elementos de otros arreglos*/
	var Municipioss, Municipioss2, rios, lagos, volcanes, centertour, personaje;
	Municipioss = "";
	Municipios = new Array('<ol><span class="glyphicon glyphicon-home"></span>Aguilares</ol>','<ol><span class="glyphicon glyphicon-home"></span>Apopa</ol>', '<ol><span class="glyphicon glyphicon-home"></span>Ayutuxtepeque</ol>','<ol><span class="glyphicon glyphicon-home"></span>Cuscatancingo</ol>','<ol><span class="glyphicon glyphicon-home"></span>Delgado</ol>', '<ol><span class="glyphicon glyphicon-home"></span>El Paisnal</ol>', '<ol><span class="glyphicon glyphicon-home"></span>Guazapa</ol>', '<ol><span class="glyphicon glyphicon-home"></span>Ilopango</ol>','<ol><span class="glyphicon glyphicon-home">Mejicanos </span></ol>','<ol><span class="glyphicon glyphicon-home">Nejapa</span></ol>','<ol><span class="glyphicon glyphicon-home">Panchimalco</span></ol>','<ol><span class="glyphicon glyphicon-home"> Rosario de Mora</span></ol>','<ol><span class="glyphicon glyphicon-home"></span>San Marcos</ol>');
	for(i = 0;  i < Municipios.length; i++){
		Municipioss += Municipios[i];
	}
	Municiipios2 = new Array('<ol><span class="glyphicon glyphicon-home"></span>San Martín</ol>','<ol><span class="glyphicon glyphicon-home"></span>San Salvador</ol>','<ol><span class="glyphicon glyphicon-home"></span>Santiago Texacuangos</ol>','<ol><span class="glyphicon glyphicon-home"></span>Santo Tomás</ol>','<ol><span class="glyphicon glyphicon-home"></span>Soyapango</ol>','<ol><span class="glyphicon glyphicon-home"></span>Tonacatepeque</ol>');
	for(m = 0; m< Municiipios2.length; m++){
		Municipioss2 += Municiipios2[m];
	}
	
	Rios = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Río Jute</ol>');
	rios = "";
		for(j = 0; j < Rios.length; j++){
		rios += Rios[j];
	}
	Lagos = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>Lago de Ilopango</ol>');
	lagos = "";
	for(l = 0; l < Lagos.length; l++){
		lagos += Lagos[l];
	}
	Volcanes = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Volcan San Salvador</ol>');
	
	Personajes = new Array('<ol><span class="glyphicon glyphicon-ok"></span>José Gerardo Barrios Espinoza</ol>','<ol><span class="glyphicon glyphicon-ok"></span>Anastasio Aquino</ol>', '<ol><span class="glyphicon glyphicon-ok"></span>Armando Calderón</ol>','<ol><span class="glyphicon glyphicon-ok"></span>Juan Lindo</ol>','<ol><span class="glyphicon glyphicon-ok"></span>Francisco Malespín</ol>','<ol><span class="glyphicon glyphicon-ok"></span>Prudencia Ayala</ol>','<ol><span class="glyphicon glyphicon-ok"></span>Jorge Mágico</ol>','<ol><span class="glyphicon glyphicon-ok"></span>José Matías Delgado</ol>');
	personaje = "";
	for(k = 0; k < Personajes.length; k++){
		personaje += Personajes[k];
	}

	CentroTour = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>Catedral de san salvador</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>Palacio Nacional</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>Museo nacional Dr. David j. Gusman</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>Iglesia el Rosario</ol>','<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>Museo Tin Marin</ol>','<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>Zoologico nacional de el salvador</ol>');
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