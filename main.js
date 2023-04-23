let alumnos = []

function inscribirAlumnos() {
	let nombre = prompt("Ingrese el nombre del alumno.").toUpperCase();
	let apellido = prompt("Ingrese el apellido del alumno.").toUpperCase();
	let edad = parseInt(prompt("Ingrese la edad del alumno."));
	let nacimiento = parseInt(prompt("Ingrese el año de nacimiento del alumno."));
	let dni = parseInt(prompt("Ingrese el DNI del alumno."));
	let curso = prompt("Ingrese el nombre del curso a cursar.").toUpperCase();

	if(alumnos.some((n) => n.dni === dni)){
		alert("El alumno ya está inscripto.")
	} else {
		alert("El alumno fué inscripto correctamente.")
		let objeto = {
			nombre,
			apellido,
			edad,
			dni,
			curso,
		};
		alumnos.push(objeto)
		console.log(alumnos)
	}

}

alert("Inscripciones de alumnos a IPET 125")

let inscripcion = prompt("¿Desea realizar el proceso de inscripción? Si o No.").toLowerCase();

while (inscripcion != "no" && inscripcion != "si") {
	alert("Por favor ingresar Si o No");
	inscripcion = prompt("¿Desea realizar el proceso de inscripción? Si o No.").toLowerCase();
}

if(inscripcion == "si") {
    
    while(inscripcion != "no") { 
	inscribirAlumnos();

	inscripcion = prompt("¿Desea realizar un nuevo proceso de inscripción? Si o No.").toLowerCase();
	while (inscripcion != "no" && inscripcion != "si") {
	alert("Por favor ingresar Si o No");
	inscripcion = prompt("¿Desea realizar el nuevo proceso de inscripción? Si o No.").toLowerCase(); }
	if(inscripcion == "no") {
		alert("Usted a terminado con el proceso de inscripción.");
	}
}

} else if(inscripcion == "no") {
	alert("Usted a terminado el proceso de inscripción.")
} 


function buscar() {
	let nacimiento = parseInt(prompt("Para filtrar los alumnos que nacieron en x año, ingrese un año."));
	let filtrar = alumnos.filter((n) => n.nacimiento === nacimiento);
	let mensaje = "";

	filtrar.forEach((n) => {
		`
		NOMBRE: ${n.nombre}
		APELLIDO: ${n.apellido}
		EDAD: ${n.edad}
		NACIMIENTO: ${n.nacimiento}
		DNI: ${n.dni}
		CURSO: ${n.curso}
		`
	});
	alert(mensaje);
}

let filtrado = prompt("Si desea filtar una búsqueda de alumnos según su fecha de nacimiento escriba SI, de lo contrario escriba NO.").toLowerCase();

while (filtrado != "no" && filtrado != "si") {
  alert("Por favor ingresar Si o No");
  filtrado = parseInt(prompt("ingrese la fecha de nacimiento que desea filtrar"));
}

if (filtrado == "si") {
  let alumnosSSS = alumnos.map(
    (n) => `
        NOMBRE: ${n.nombre}
		APELLIDO: ${n.apellido}
		EDAD: ${n.edad}
		NACIMIENTO: ${n.nacimiento}
		DNI: ${n.dni}
		CURSO: ${n.curso}
		`
    
  );
  alert(alumnosSSS);
  buscar();
} else if (filtrado == "no") {
  alert("LA BUSQUEDA TERMINADO");
}
