function init(){
	if(window.addEventListener){
		window.addEventListener("load", chalate, false);
	}
	else if(window.attachEvent){
		window.attachEvent("onload",chalate,false);
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

/*Declaracion de Funcion chalate*/
function chalate(){
	Departamento = new Array('<p>Chalatenango</p>');
	Historia = new Array('<p class="text-justify">Chalatenango es un departamento del noroeste de El Salvador que se extiende desde la frontera hondureña hasta el embalse Cerrón Grande, conocido como Lago Suchitlán. La montaña más alta de El Salvador, Cerro El Pital, se encuentra en un bosque nuboso con aves y plantas raras. Cerca de El Pital se encuentran los pueblos de La Palma, forrados con coloridos murales, y San Ignacio, conocido por sus talleres artesanaleschalatenango es la cabecera del Departamento homónimo de El Salvador. Su territorio se divide en 6 cantones y 36 caseríos. En 2007 la población era de 29 271 habitantes según censo de 2007. La extensión territorial del municipio está distribuida de tal manera que tiene un área rural de 131,05 km² aproximadamente y un área urbana de 0,75 km² aproximadamente.Esta población fue fundada en tiempos de la época precolombina por tribus lencas, pero a fines del siglo XV fue sometida por pipiles procedentes de Cuzcatlán. En 1550 tenía unos 600 habitantes. El alcalde mayor de San Salvador, don Manuel de Gálvez de Corral, escribió en 1740 que San Juan Chalatenango tenía unos 125 habitantes, pues contaba con 25 indios tributarios o jefes de familias</p>');
	/*Declaracion de Variable Interna para recorrer el arreglo de Municipios,
	de la Misma manera para recorrer los elementos de otros arreglos*/
	var Municipioss, Municipioss2, rios, lagos, volcanes, centertour, personaje;
	Municipioss = "";
	Municipios = new Array('<ol><span class="glyphicon glyphicon-home"></span> Chalatenango</ol>','<ol><span class="glyphicon glyphicon-home"></span> Agua Caliente</ol>', '<ol><span class="glyphicon glyphicon-home"></span> Arcatao</ol>','<ol><span class="glyphicon glyphicon-home"></span>  Azacualpa</ol>','<ol><span class="glyphicon glyphicon-home"></span> Citalá</ol>', '<ol><span class="glyphicon glyphicon-home"></span> Comalapa</ol>', '<ol><span class="glyphicon glyphicon-home"></span> Concepción Quezaltepeque </ol>', '<ol><span class="glyphicon glyphicon-home"></span> Dulce Nombre de María.</ol>');
	for(i = 0;  i < Municipios.length; i++){
		Municipioss += Municipios[i];
	}
	//Municiipios2 = new Array('<ol><span class="glyphicon glyphicon-home"></span> Nueva Guadalupe</ol>','<ol><span class="glyphicon glyphicon-home"></span> Nuevo Eden</ol>', '<ol><span class="glyphicon glyphicon-home"></span> Quelepa</ol>','<ol><span class="glyphicon glyphicon-home"></span> San Antonio</ol>','<ol><span class="glyphicon glyphicon-home"></span> San Gerardo</ol>', '<ol><span class="glyphicon glyphicon-home"></span> San Jose</ol>', '<ol><span class="glyphicon glyphicon-home"></span> San Luis de la Reina </ol>', '<ol><span class="glyphicon glyphicon-home"></span> San Miguel </ol>','<ol><span class="glyphicon glyphicon-home"></span> San Rafael Oriente </ol>');
	//for(m = 0; m< Municiipios2.length; m++){
		//Municipioss2 += Municiipios2[m];
	//}
	Rios = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Rio Lempa</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Sumpul</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Rio Tamulasco</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Rio Grande</ol>','<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Rio Azambio</ol>');
	rios = "";
	for(j = 0; j < Rios.length; j++){
		rios += Rios[j];
	}
	Lagos = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Lago Suchitlán</ol>');
	lagos = "";
	for(l = 0; l < Lagos.length; l++){
		lagos += Lagos[l];
	}
	Volcanes = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Cerro Eramon</ol>');
	Personajes = new Array('<ol><span class="glyphicon glyphicon-ok"></span>José María San Martín</ol>', '<ol><span class="glyphicon glyphicon-ok"></span> Luciano Morales</ol>', '<ol><span class="glyphicon glyphicon-ok"></span> Jorge Lardé</ol>', '<ol><span class="glyphicon glyphicon-ok"></span> Rafael Zaldívar</ol>');
	personaje = "";
	for(k = 0; k < Personajes.length; k++){
		personaje += Personajes[k];
	}
	CentroTour = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>  Cerro El pital</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>  Montecristo Trifinio National Park</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Turcicentro Agua fría</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Turicentro Rio Sumpul</ol>');
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