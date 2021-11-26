const pi = 3.1416;

function suma(a, b) {
    console.log(a + b);
    alert(a + b);

    let c = 3;
    let d = "3";
    alert(c != d);
    alert(c === d);

    n1 = 5;
    n2 = ++n1;
    alert(n1 + " - " + n2)
    for (i = 0; i < 100; i++) {
        if (i % 5 == 0) {
            console.log(i);
        }
    }

    return a + b;
}
function resta(a, b) {
    console.log(a - b);
    alert(a - b);
    alert(c);
    return a - b;
}
var c = -25;

while (c != 3) {
    console.log("c no es tres es " + c)
    c++;
}
c = -25;
do {
    console.log("c no es tres es " + c)
    c++;
} while (c != 3)

//for(valor inicio;condicion para terminar; incremento o decremento)
function primos(numero) {
    for (i = numero; i > 1; i--) {
        salida = false;
        for (j = 2; j < numero / 2; j++) {
            if (i % j == 0) {
                salida = true;
                break;
            }

        }
        if (!salida) {
            console.log(i);
        }
    }
}
function verNumero() {
    i = 1;

    switch (i) {
        case 1:
            alert(i)
            break;
        case 2:
            alert(i)
            break
        case 3:
            alert(i)
            break
        case 4:
            alert(i)
            break
        default:
            alert("no hay numero valido")

    }


}
function sumar() {
    //let numero1=document.getElementById("n1").value;
    let numero1 = document.querySelector("#n1").value
    //let numero2=document.getElementById("n2").value;
    let numero2 = document.querySelector("#n2").value
    let resultado = parseInt(numero1) + parseInt(numero2);
    //document.getElementById("resultado").innerHTML=resultado;
    document.querySelector("#resultado").innerHTML = resultado;

    var lista = document.querySelector("#lista");
    let hijos = lista.children;
   
    lista.innerHTML="";
    for (let i = 0; i < 10; i++) {
        let li = document.createElement("li");
        //let h1 = document.createElement("h1");
        li.innerHTML = i;
        li.classList.add("rojo");
        //li.appendChild(h1);
        lista.appendChild(li);
    }

}


function cerrar() {
    window.close();
}