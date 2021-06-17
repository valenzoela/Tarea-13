var calificaciones = [10, 4, 2, 5, 8, 6, 5];
var aprobados = calificaciones.filter(
	function(element, index, collection)
	{
		return(element > 5); 
		
	}
);
	
	
	console.log(aprobados)


var desaprobados = calificaciones.filter(
	function(element, index, collection)
	{
		return(element < 5);
	}
);
	

	console.log(desaprobados)


var proceso = calificaciones.filter(function(
	element, index, collection)
	{
		return(element == 5)
	}

);


	console.log(proceso)


var length = calificaciones.length;
var newLength = aprobados.push(6, 8);


	console.log(aprobados)


proceso.splice(0, 2, '0');

	

	console.log(proceso)



var mayorCalificacion = calificaciones.sort(
	function(firstElement, secondElement)
	{

		return Number(firstElement) > Number(secondElement) ? -1 : 1;
	}
);

	
	
	console.log(mayorCalificacion)