function generarDNI() {

    // Genera un número aleatorio entre 39.000.000 y 45.999.999
    const numero = Math.floor(Math.random() * (45999999 - 39000000) + 39000000);
  
    // Convierte el número a un string de 8 dígitos
    const dni = numero.toString().padStart(8, "0");
  
    // Genera un número aleatorio entre 0 y 9
    const letra = Math.floor(Math.random() * 10);
  
    // Devuelve el DNI con la letra correspondiente
    return `${dni}`;
  }
  

 
 const nombresHombre =  [
    "Juan",
    "Luis",
    "Carlos",
    "Javier",
    "Manuel",
    "Pedro",
    "Miguel",
    "Alejandro",
    "José",
    "Daniel",
    "Andrés",
    "Fernando",
    "Antonio",
    "Ricardo",
    "Héctor",
    "Gabriel",
    "Pablo",
    "Alberto",
    "Sergio",
    "Roberto",
    "Gustavo",
    "Raúl",
    "Ernesto",
    "Diego",
    "Eduardo",
    "Federico",
    "Jorge",
    "Marcelo",
    "Emilio",
    "Adrián",
    "Lorenzo",
    "Marcos",
    "Lucas",
    "Ignacio",
    "Guillermo",
    "Maximiliano",
    "Nicolás",
    "Rafael",
    "Benjamín",
    "Mateo",
    "Simón",
    "Gonzalo",
    "Juan Pablo",
    "César",
    "Tomás",
    "Joaquín",
    "Roberto",
    "Felipe",
    "Alexis",
    "Ángel",
    "Mariano",
    "Julián",
    "Hugo",
    "Oscar",
    "Hernán",
    "Jesús",
    "René",
    "Ismael",
    "Rodrigo",
    "Damián",
    "Leandro",
    "Germán",
    "Esteban",
    "Cristian",
    "Josué",
    "Adolfo",
    "Ezequiel",
    "Víctor",
    "Walter",
    "Iván",
    "Ariel",
    "Marcial",
    "Evaristo",
    "Teodoro",
    "Néstor",
    "Eloy",
    "Ulises",
    "Humberto",
    "Ramiro",
    "Fabián",
    "Emanuel",
    "Octavio",
    "Rolando",
    "Xavier",
    "Pascual",
    "Clemente",
    "Elías",
    "Teófilo",
    "Lázaro",
    "Vicente",
    "Mauricio",
    "Abel",
    "Fidel",
    "Fermín",
    "Pio",
    "Eugenio",
    "Amadeo",
    "Leonardo",
    "Aníbal",
    "Florencio"
  ];
  
  

const nombresMujer =  [
    "María",
    "Laura",
    "Ana",
    "Luisa",
    "Sofía",
    "Carmen",
    "Lucía",
    "Valentina",
    "Isabel",
    "Victoria",
    "Patricia",
    "Rosa",
    "Elena",
    "Marta",
    "Gabriela",
    "Natalia",
    "Silvia",
    "Susana",
    "Alicia",
    "Rocío",
    "Paula",
    "Andrea",
    "Mónica",
    "Florencia",
    "Mariana",
    "Carolina",
    "Eva",
    "Cristina",
    "Liliana",
    "Adriana",
    "Margarita",
    "Diana",
    "Julia",
    "Mirta",
    "Clara",
    "Lorena",
    "Patricia",
    "Beatriz",
    "Graciela",
    "Eugenia",
    "Verónica",
    "Nora",
    "Adela",
    "Lourdes",
    "Sara",
    "Esther",
    "Amelia",
    "Renata",
    "Elsa",
    "Carla",
    "Pilar",
    "Milagros",
    "Inés",
    "Aurora",
    "Rita",
    "Virginia",
    "Lidia",
    "Clarisa",
    "Gladys",
    "Susana",
    "Rosario",
    "Violeta",
    "Mónica",
    "Daniela",
    "Eugenia",
    "Soledad",
    "Gloria",
    "Cecilia",
    "Luisa",
    "Elena",
    "Angélica",
    "Liliana",
    "Leticia",
    "Marina",
    "Fátima",
    "Josefina",
    "Olga",
    "Irene",
    "Raquel",
    "Milena",
    "Clotilde",
    "Alicia",
    "Natalia",
    "Marta",
    "Sandra",
    "Dolores",
    "Hilda",
    "Lidia",
    "Regina",
    "Alejandra",
    "Rocio",
    "Margarita",
    "Gabriela",
    "Susana"
  ];
  
  

const apellidos =  [
    "González",
    "Rodríguez",
    "Fernández",
    "López",
    "Martínez",
    "Pérez",
    "Gómez",
    "Sánchez",
    "Díaz",
    "Torres",
    "Ramírez",
    "Vargas",
    "Castro",
    "Rivera",
    "Romero",
    "Soto",
    "Alvarez",
    "Hernández",
    "Jiménez",
    "Cabrera",
    "Silva",
    "Gutiérrez",
    "Rojas",
    "Mendoza",
    "Ortega",
    "Núñez",
    "Guerrero",
    "Medina",
    "Aguirre",
    "Figueroa",
    "Chávez",
    "Peralta",
    "Espinoza",
    "Vega",
    "Valencia",
    "Gallardo",
    "Cortez",
    "Sosa",
    "Campos",
    "Mora",
    "Chavez",
    "Paredes",
    "Villalobos",
    "Navarro",
    "Zambrano",
    "Ríos",
    "Franco",
    "Montes",
    "Miranda",
    "Calderón",
    "Figueroa",
    "Toro",
    "León",
    "Sepúlveda",
    "Cáceres",
    "Valenzuela",
    "Araya",
    "Tapia",
    "Herrera",
    "Lira",
    "Gallardo",
    "Peña",
    "Aguilar",
    "Bravo",
    "Molina",
    "Soto",
    "Vidal",
    "Flores",
    "Carvajal",
    "Salazar",
    "Herrera",
    "Godoy",
    "Araos"
  ];


  const generarPersona = () => {
    const nombre =  generarNombreHombreOMujer();
    const apellido = apellidos[Math.floor(Math.random() * apellidos.length)];
    const dni = generarDNI();
    const nacionalidad = "Argentina";
    const fechaNacimiento = generarFechaNacimiento();
    return {
      nombre,
      apellido,
      dni,
      nacionalidad,
      fechaNacimiento
    }
  }

  function generarNombreHombreOMujer() {
    const nombre = Math.floor(Math.random() * 2) === 0 
    ? `${ nombresHombre[Math.floor(Math.random() * nombresHombre.length)] } ${nombresHombre[Math.floor(Math.random() * nombresHombre.length)]}` 
    : `${nombresMujer[Math.floor(Math.random() * nombresMujer.length)] } ${nombresMujer[Math.floor(Math.random() * nombresMujer.length)]}`;
    return nombre;
  }

  function generarFechaNacimiento() {
    // Generamos un año de nacimiento aleatorio entre 1996 y 2023
    const anioNacimiento = Math.floor(Math.random() * (2023 - 1996 + 1)) + 1996;
  
    // Generamos un mes de nacimiento aleatorio entre 1 y 12
    const mesNacimiento = Math.floor(Math.random() * 12) + 1;
  
    // Generamos un día de nacimiento aleatorio entre 1 y 31
    const diaNacimiento = Math.floor(Math.random() * 31) + 1;
  
    // Devolvemos la fecha de nacimiento
    return new Date(anioNacimiento, mesNacimiento, diaNacimiento);
  }
  
  

  console.log(generarPersona());