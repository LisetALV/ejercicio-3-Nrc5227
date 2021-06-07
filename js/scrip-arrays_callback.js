const titulo ="ARRAYS";//constantes que no se van a modificar
var personas =['Jonatan', 'Angela','Israel' ,,'Cesar','Grace','Anita','Luis'];//Variable global

function imprimirPersonas(){
    setTimeout(function(){
        document.getElementById('arrPersonas').innerText=personas;
    },1000);
    
}

function appendArrPersona(){
    let text = document.getElementById('txtLetra').value;//Variable Local
    document.getElementById('arrResultado').append(text);
}
function innerTextArrPersona(){
    let text = document.getElementById('txtLetra').value;
    document.getElementById('arrResultado').innerText=text;
}

function innerHTMLArrPersona(){
    let text = document.getElementById('txtLetra').value;
    document.getElementById('arrResultado').innerHTML=text;
    let div = document.createElement('div');
    div.innerHTML="<p> Hoy juega <b> ecuador</b> </p>";
    document.getElementById('arrResultado').appendChild(div);
}


function forEachPersona(){
    personas.forEach((x) => {
        console.log(x);
        console.log(x.length);
        var b = document.createElement('b');
        var br = document.createElement('br');
        b.innerText=x;
        document.getElementById('arrResultado').append(b);
        document.getElementById('arrResultado').append(br);

    }); 
}

function everyPersonas(letra){
    //Every, todos y cada uno cumplen la condicion
    var resultado = personas.every((x) => x.includes(letra));
    document.getElementById('arrResultado').innerText=resultado;
}
function somePersonas(letra){
    //Some, algun elemento del arreglo cumplen la condicion
    var resultado = personas.some((x) => x.includes(letra));
    document.getElementById('arrResultado').innerText=resultado;
}
function filterPersonas(filtro){
    document.getElementById('arrResultado').innerText="";
    let arrNuevo = personas.filter((x) => x.toLowerCase().includes(filtro));
    arrNuevo.forEach((x)=>{
        let b = document.createElement('b');
        let br = document.createElement('br');
        b.innerText=x;
        document.getElementById('arrResultado').append(b);
        document.getElementById('arrResultado').append(br);
    });
}
function mapPersonas(){
    let arrNuevo = personas.map((x) => x.toUpperCase());
    document.getElementById('arrResultado').innerText=arrNuevo;
}
function findPersonas(filtro){
    let resultado= personas.find((x) => x== filtro);
    document.getElementById('arrResultado').innerText=resultado;
}
function findIndexPersonas(filtro){
    let resultado= personas.findIndex((x) => x== filtro);
    document.getElementById('arrResultado').innerText=resultado;
}