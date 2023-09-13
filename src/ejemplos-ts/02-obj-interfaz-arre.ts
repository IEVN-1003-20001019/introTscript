

interface Alumno{
    matricula: number;
    nombre: string;
    email: string;
    edad: number;
}

const alumno: Alumno ={
    nombre: 'Mario',
    email: 'mario@gmail.com',
    edad: 23,
    matricula: 2001019
}

let mascotas = ['perro', 'gato', 'perico']
console.table(mascotas);
mascotas[1] = 'Nuevo gato';
mascotas.push('Perico verde');
console.table(mascotas);

let nuevoArre: (number | string) [] = []
nuevoArre.push('RCR');
nuevoArre.push(1997);