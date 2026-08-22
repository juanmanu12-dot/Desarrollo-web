// Ejercicios TS

// 1. Array con 5 nombres de estudiantes
let estudiantes: string[] = ["Juan", "Camilo", "Laura", "Andres", "Valentina"];

for (let i = 0; i < estudiantes.length; i++) {
    console.log(estudiantes[i]);
}

// 2. Cuantos estudiantes hay
console.log("Cantidad de estudiantes: " + estudiantes.length);

// 3. Array de numeros y suma total
let numeros: number[] = [10, 55, 32, 78, 45, 90, 21, 60, 15, 49];
let suma: number = 0;

for (let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];
}

console.log("Suma total: " + suma);

// 4. Array de 1500 numeros aleatorios y suma total
let aleatorios: number[] = [];

for (let i = 0; i < 1500; i++) {
    aleatorios.push(Math.round(Math.random() * 100));
}

let sumaAleatorios: number = 0;

for (let i = 0; i < aleatorios.length; i++) {
    sumaAleatorios = sumaAleatorios + aleatorios[i];
}

console.log("Suma de los 1500 numeros: " + sumaAleatorios);

// 5. Promedio de los numeros del punto 3
let promedio: number = suma / numeros.length;
console.log("Promedio: " + promedio);

// 6. Numeros mayores a 50 del punto 3
console.log("Numeros mayores a 50:");

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 50) {
        console.log(numeros[i]);
    }
}

// 7. Objeto persona
let persona = {
    nombre: "Juan",
    edad: 21,
    ciudad: "Medellin"
};

console.log("Nombre: " + persona.nombre);
console.log("Edad: " + persona.edad);
console.log("Ciudad: " + persona.ciudad);

// 8. Array de productos
let productos = [
    { nombre: "Teclado", precio: 120000 },
    { nombre: "Mouse", precio: 45000 },
    { nombre: "Monitor", precio: 650000 },
    { nombre: "Audifonos", precio: 90000 },
    { nombre: "USB 64GB", precio: 35000 }
];

for (let i = 0; i < productos.length; i++) {
    console.log(productos[i].nombre + " - " + productos[i].precio);
}

// 9. Producto con mayor precio
let masCaro = productos[0];

for (let i = 0; i < productos.length; i++) {
    if (productos[i].precio > masCaro.precio) {
        masCaro = productos[i];
    }
}

console.log("El producto mas caro es: " + masCaro.nombre + " con precio " + masCaro.precio);

// 10. Productos con cantidad y valor total del inventario
let inventario = [
    { nombre: "Teclado", precio: 120000, cantidad: 10 },
    { nombre: "Mouse", precio: 45000, cantidad: 25 },
    { nombre: "Monitor", precio: 650000, cantidad: 4 },
    { nombre: "Audifonos", precio: 90000, cantidad: 12 },
    { nombre: "USB 64GB", precio: 35000, cantidad: 50 }
];

let totalInventario: number = 0;

for (let i = 0; i < inventario.length; i++) {
    let subtotal = inventario[i].precio * inventario[i].cantidad;
    totalInventario = totalInventario + subtotal;
    console.log(inventario[i].nombre + " x" + inventario[i].cantidad + " = " + subtotal);
}

console.log("Valor total del inventario: " + totalInventario);

// 11. Estudiantes con materias, promedio de cada uno y promedio general
let listaEstudiantes = [
    {
        nombre: "Juan",
        semestre: 6,
        materias: [
            { nombre: "Redes", nota: 4.5 },
            { nombre: "Estadistica", nota: 4.0 },
            { nombre: "Circuitos", nota: 3.8 }
        ]
    },
    {
        nombre: "Camilo",
        semestre: 3,
        materias: [
            { nombre: "Algebra", nota: 3.1 },
            { nombre: "Bases de Datos", nota: 3.4 },
            { nombre: "Ingles", nota: 3.0 }
        ]
    },
    {
        nombre: "Laura",
        semestre: 5,
        materias: [
            { nombre: "Calculo", nota: 4.2 },
            { nombre: "Programacion", nota: 4.8 },
            { nombre: "Fisica", nota: 3.9 }
        ]
    },
    {
        nombre: "Valentina",
        semestre: 4,
        materias: [
            { nombre: "Estructuras de Datos", nota: 2.9 },
            { nombre: "Etica", nota: 4.1 },
            { nombre: "Quimica", nota: 3.2 }
        ]
    }
];

let promedios: number[] = [];
let sumaPromedios: number = 0;

for (let i = 0; i < listaEstudiantes.length; i++) {
    let sumaNotas = 0;

    for (let j = 0; j < listaEstudiantes[i].materias.length; j++) {
        sumaNotas = sumaNotas + listaEstudiantes[i].materias[j].nota;
    }

    let promedioEstudiante = sumaNotas / listaEstudiantes[i].materias.length;
    promedios.push(promedioEstudiante);
    sumaPromedios = sumaPromedios + promedioEstudiante;

    console.log("Promedio de " + listaEstudiantes[i].nombre + ": " + promedioEstudiante);
}

let promedioGeneral = sumaPromedios / listaEstudiantes.length;
console.log("Promedio de todos los estudiantes: " + promedioGeneral);

// 12. Estudiantes con promedio mayor a 3.5
console.log("Estudiantes con promedio mayor a 3.5:");

for (let i = 0; i < listaEstudiantes.length; i++) {
    if (promedios[i] > 3.5) {
        console.log(listaEstudiantes[i].nombre);
    }
}