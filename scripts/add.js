//calificaciones
var calificaciones = [10, 4, 2, 5, 8, 6, 5];
//objetivo: mostrar calificaciones aprobadas
var aprobados = calificaciones.filter(
	function(element, index, collection)
	{
		return(element > 5); 
		
	}
);
	
	
	console.log(aprobados)

//objetivo: mostrar calificaciones desaprobadas
var desaprobados = calificaciones.filter(
	function(element, index, collection)
	{
		return(element < 5);
	}
);
	

	console.log(desaprobados)

//objetivo: mostrar calificaciones en proceso 
var proceso = calificaciones.filter(function(
	element, index, collection)
	{
		return(element == 5)
	}

);


	console.log(proceso)

//objetivo: mostrar nueva lista de calificaciones aprobadas
var length = calificaciones.length;
var newLength = aprobados.push(6, 8);


	console.log(aprobados)

//objetivo: mostrar nueva listade calificaciones en proceso
proceso.splice(0, 2, '0');

	

	console.log(proceso)


//objetivo: ordenar las calificaciones de mayor a menor
var mayorCalificacion = calificaciones.sort(
	function(firstElement, secondElement)
	{

		return Number(firstElement) > Number(secondElement) ? -1 : 1;
	}
);

	
	
	console.log(mayorCalificacion)




/*var resultReduce = desaprobados.reduce(
	function(accumulator, element, index, collection)
	{
		console.log(accumulator, element, index, collection);

		return accumulator + element;

	}
);*/
