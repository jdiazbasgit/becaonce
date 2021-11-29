//import { axios } from "./node_modules/axios";

//const { resolve } = require("path/posix");

/*var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numeros.length + 1; i++) console.log(numeros[i]);

numeros.push(10);
numeros.push(11);

numeros.push(12);


numeros.forEach(function (numero) {
  console.log(`forEach ${numero}`);
});

numeros.forEach((numero) => console.log(`forEach arrow ${numero}`));


numeros
  .filter(function (numero) {
    return numero % 2 == 0;
  })
  .forEach(function (numero) {
    console.log(`par ${numero}`);
  });

numeros
  .filter((numero) => numero % 2 == 0)
  .forEach((numero) => console.log(`par arrow ${numero}`));*/
/*function cargarDatos(url) {
    return new Promise((resolve, reject) => {
        fetch(url).then(response => response.json()).then((data) => resolve(data))
      });
    }


function verDatos(){
    cargarDatos('https://restcountries.com/v3.1/subregion/europe').then(function(datos){
        console.log(datos)
    })
}*/

function cargaDatos(url) {
  return new Promise(function (resolve, reject) {
    fetch(url).then(function (response) {
      resolve(response.json());
    });
  });
}


const cargaDatos1 = url => {
  return new Promise((resolve, reject) => {
    fetch(url).then(response => {
      resolve(response.json())
    })
  })
}

function verdatos() 
{
  cargaDatos1("./paises.json")
    .then(function (paises) 
    {
      //codigo a ejecutar
      console.log(paises);
      var ul = document.querySelector("#ul");
      paises.forEach(pais => 
      {
        if (pais.name.common === "Spain") 
        {
          let li = document.createElement("li");
          //li.innerHTML=pais.name.common;
          let img = document.createElement("img");
          img.src = pais.flags.png;
          li.appendChild(img);
          ul.appendChild(li);
        }
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}

verdatos();
