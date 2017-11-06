function init(){
	if(window.addEventListener){
		window.addEventListener("load", La_Libertad, false);
	}
	else if(window.attachEvent){
		window.attachEvent("onload",La_Libertad,false);
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
function La_Libertad(){
	Departamento = new Array('<p>La Libertad</p>');
	Historia = new Array('<p class="text-justify">La Libertad es un municipio del departamento homónimo, localizado a solo 32 kilómetros de la capital de El Salvador, de acuerdo al censo oficial de 2007 tiene una población de 35,997 habitantes. Es uno de los principales sitios turísticos de nuestro país; cubre un área de 162 km² y la cabecera tiene una altitud de 10 msnm. Este municipio limita al Norte con Nueva San Salvador (Santa Tecla), al Sur con el Oceano Pacífico, al Este con San Luis Talpa y al Oeste con Tamanique.Esta zona fue mencionada por el religioso Pedro Cortés y Larraz el año 1770, como la "hacienda Tepehaua", una de las más importantes de la parroquia de San Jacinto. De hecho, la región era conocida como "rada de Tepehaua", antes de ser habilitada por el Congreso de la República Federal de Centro América como Puerto de La Libertad el 24 de febrero de 1824. El mismo parlamento lo autorizó para el comercio exterior en el litoral del océano Pacífico en 1831. El primer buque de vapor arribó el 7 de junio de 1857Pasó a formar parte del departamento de La Libertad el 28 de enero de 1865, y para 1869 tenía una población de 266 habitantes. El 4 de mayo de 1867, el gobierno salvadoreño realizó el contrato para la construcción de un muelle de hierro que fue inaugurado el 7 de octubre de 1869.3 Antes de esa fecha el desembarco se hacía por lanchones asegurados con andarivel. Asimismo, la línea telegráfica entre San Salvador y el puerto fue inaugurada el 27 de abril de 1870. Obtuvo el título de villa el 10 de marzo de 1874, y el de ciudad el 23 de agosto de 1957.</p>');
	/*Declaracion de Variable Interna para recorrer el arreglo de Municipios,
	de la Misma manera para recorrer los elementos de otros arreglos*/
	var Municipioss, Municipioss2, rios, lagos, volcanes, centertour, personaje;
	Municipioss = "";
	Municipios = new Array('<ol><span class="glyphicon glyphicon-home"></span>Antiguo Cuscatlán</ol>','<ol><span class="glyphicon glyphicon-home"></span> Chiltiupán</ol>', '<ol><span class="glyphicon glyphicon-home"></span> Ciudad Arce</ol>','<ol><span class="glyphicon glyphicon-home"></span> Colón</ol>','<ol><span class="glyphicon glyphicon-home"></span> Comasagua</ol>', '<ol><span class="glyphicon glyphicon-home"></span> Huizúcar</ol>', '<ol><span class="glyphicon glyphicon-home"></span> Jayaque</ol>', '<ol><span class="glyphicon glyphicon-home"></span> Jicalapa</ol>','<ol><span class="glyphicon glyphicon-home"></span>La Libertad</ol>','<ol><span class="glyphicon glyphicon-home"></span>Santa Tecla</ol>','<ol><span class="glyphicon glyphicon-home"></span> Nuevo Cuscatlán</ol>','<ol><span class="glyphicon glyphicon-home"></span>San Juan Opico</ol>','<ol><span class="glyphicon glyphicon-home"></span> Quezaltepeque</ol>','<ol><span class="glyphicon glyphicon-home"></span> Sacacoyo</ol>','<ol><span class="glyphicon glyphicon-home"></span>San José Villanueva</ol>','<ol><span class="glyphicon glyphicon-home"></span>San Matías</ol>','<ol><span class="glyphicon glyphicon-home"></span>San Pablo Tacachico</ol>',);
	for(i = 0;  i < Municipios.length; i++){
		Municipioss += Municipios[i];
	}
	Municiipios2 = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>Playa Mizata</ol>','<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>Playa La Perla</ol>','<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>Playa El Palmarcito</ol>','<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>Playa El Zonte</ol>','<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>Playa El Tunco</ol>','<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>Playa El Sunzal</ol>','<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>Playa Río Grande</ol>','<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>Playa El Majahual</ol>','<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>Playa San Blas</ol>','<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>Playa Conchalio</ol>','<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>Playa Punta Roca</ol>','<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>Playa La Paz</ol>','<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>Playa El Obispo</ol>','<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>Playa Las Flores</ol>');
	for(m = 0; m< Municiipios2.length; m++){
		Municipioss2 += Municiipios2[m];
	}
	Rios = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Río Jute</ol>');
	rios = "";
	for(j = 0; j < Rios.length; j++){
		rios += Rios[j];
	}
	Lagos = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>Laguna Caldera</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Laguna de Chanmico</ol>');
	lagos = "";
	for(l = 0; l < Lagos.length; l++){
		lagos += Lagos[l];
	}
	//Volcanes = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Volcan Guazapa</ol>');
	Personajes = new Array('<ol><span class="glyphicon glyphicon-ok"></span>DR.Alfonso Quiñones Molina</ol>', '<ol><span class="glyphicon glyphicon-ok"></span> Dr.Pío Romero Bosque</ol>', '<ol><span class="glyphicon glyphicon-ok"></span> José Mariano Hernández</ol>', '<ol><span class="glyphicon glyphicon-ok"></span> Arturo Araujo Fajardo </ol>');
	personaje = "";
	for(k = 0; k < Personajes.length; k++){
		personaje += Personajes[k];
	}
	CentroTour = new Array('<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Playa el tunco</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Playa el Sunzal</ol>', '<ol class="text-center"><span class="glyphicon glyphicon-ok"></span> Puerto de la libertad</ol>','<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>El malecón</ol>','<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>Playa en tunco</ol>','<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>Playa san diego</ol>','<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>Playa Costa del Sol</ol>','<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>Playa el Majahual</ol>','<ol class="text-center"><span class="glyphicon glyphicon-ok"></span>Playa Santa Cruz</ol>');
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