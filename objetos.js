class Animal {
  constructor(especie, raza) {
    this.especie = especie;
    this.raza = raza;
  }
}
/*var Perro = function (sonido, raza) {
   this.especie = especie;
   this.raza = raza; 
}*/

class Perro extends Animal {
  constructor(sonido, raza) {
    super("canina", raza);
    this.sonido = sonido;
  }

  emtirSonido() {
    return this.sonido;
  }
}

var perro = new Perro("guau, guau, guau ", "dogo");

console.log(perro.especie);
console.log(perro.raza);
console.log(perro.emtirSonido());

cerdo = new Animal("porcina", "iberica");

console.log(cerdo.especie);
console.log(cerdo.raza);

//perro.sonido = "nuevo soniudo";
console.log(perro.emtirSonido());

console.log("======================================");

otroperro = perro;

console.log("sin cambiar");
console.log(perro.emtirSonido());
otroperro.sonido = "sonido de otro perro";
console.log("cambiado");
console.log(perro.emtirSonido());

var suma = function (a, b) {
  console.log("resultado: " + (a + b));
};

var resta = function (a, b) {
  console.log("resultado: " + (a - b));
};

function operar(callback, numero1, numero2) {
  let n1 = numero1 * 2;
  let n2 = numero2 * 3;
  callback(n1, n2);
}

operar(suma, 5, 3);

operar(resta, 5, 3);

(function () {
  console.log("1: " + x); // x no está definida aún.
  if (true) {
    var x = "hola mundo";
  }
  console.log("2: " + x);
  // Imprime "hola mundo", porque "var" hace que sea global
  // a la función;
})();
//ES6
(function () {
  if (true) {
    let x = 50;
    //console.log("el valor de la varible x es : " + x + " Euros");
    console.log(`el valor de la varible x es " : ${x}  Euros`);
    // pi = "3,1416";
  }
  const pi = "3,14";
  //console.log("4: " + x);
  console.log(pi);
  //Da error, porque "x" ha sido definida dentro del "if"
})();

function sumaAntiguo(a, b) {
  return a + b;
}

suma = (a, b) => a + b;

suma = () => {8 + 1};

console.log(`sin llaves ${suma(10, 5)}`);

pinta = a => { 
  console.log(a);

  console.log(a + " garcia");

  console.log(`${a} garcia fernandez`);
};

pinta("pepe");

console.log(suma());
