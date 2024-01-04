
// Paso 1: pedir el nombre del alumno.
// Paso 2: verificar que sea texto
let nombrealumno= prompt("Ingrese el nombre del alumno");
// Paso 2: Pido el nombre de la materia.
// Paso 2: verificar que sea texto
let materia=prompt("Ingrese el nombre de la materia");
// Paso 3: Pido las notas
// Paso 4: verificar que las notas sean numéricas
let nota1= prompt("ingrese nota 1");
let nota2= prompt("ingrese nota 2");
let nota3= prompt("ingrese nota 3");
let promedio= 0;
// Paso 5: verificar que las notas estén entre 0 y 10
if (isNaN(nota1) || (isNaN(nota2))|| (isNaN(nota3)) || nota1 <0 || nota1>10 || nota2 <0 || nota2>10 || nota3 <0 || nota3>10)
{
    console.log("Por favor ingrese un numero entre 1 y 10");
    console.log("nota1:"+nota1 );
    console.log("nota2:"+nota2 );
    console.log("nota3:"+nota3 );
    alert("colocar un valor numérico");
}
else{ //Paso 6. Calcular el promedio
    nota1= parseFloat(nota1);
    nota2= parseFloat(nota2);
    nota3= parseFloat(nota3);

    console.log("nota1:"+nota1 );
    console.log("nota2:"+nota2 );
    console.log("nota3:"+nota3 );
    promedio=(nota1+nota2+nota3)/3;
    console.log("promedio:"+promedio );
    
    if (promedio>=7)
    {
        console.log(`Felicidades ${nombrealumno}, la materia ${materia}, la aprobaste correctamente con un promedio de ${promedio}.`);
        console.log(`Gracias por tu esfuerzo ${nombrealumno}, la materia ${materia}, la aprobaste correctamente con un promedio de ${promedio}.`);
    }
    else {
        console.log(`${nombrealumno}, gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es ${promedio}`);
    }

}

