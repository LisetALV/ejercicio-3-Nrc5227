//Arreglos en javascript//
//Un conjunto de elementos definidos en una estructura
//DEFINICIONES
var provincias = ['Loja','Azuay','Guayas','Chimborazo'];
var varios_tipos =[3,'Juan',true,'2021-05-31'];
//Definio  un arreglo por el constructor con el numero de elementos
var numero_primos = new Array(10);
var serie_fibonacci = new Array(1,1,2,3,5,8,13,21);
var figuras_geometricas = new Array();

//Funcion que imprime los arreglos 
function imprimirArreglos(){
    document.getElementById('arrProvincias').innerText=provincias;
    document.getElementById('arrTipos').innerText=varios_tipos;
    document.getElementById('arrPrimos').innerText=numero_primos;
    document.getElementById('arrFibonacci').innerText=serie_fibonacci;
    document.getElementById('arrGeometricas').innerText=figuras_geometricas;
}
function imprimirCadaProvicia(){
    //Va a rrecorrer cada elemento del arreglo Provincia
    provincias.forEach((x) => {
        var li = document.createElement('li');
        li.innerText=x;
        document.getElementById('ulProvincias').append(li);
    });
}
function agregarProvincias(){
    var  nombre = document.getElementById('txtProvincias').value;
    provincias.push(nombre);
    document.getElementById('arrProvincias').innerText = provincias;
    document.getElementById('txtFigura').value='';
}
function agregarFigura(){
    var  nombre = document.getElementById('txtFigura').value;
    figuras_geometricas.push(nombre);
    document.getElementById('arrGeometricas').innerText = figuras_geometricas;
    document.getElementById('txtFigura').value;
}
function imprimirFibonacci(){
    //Va a rrecorrer cada elemento del arreglo Provincia
    serie_fibonacci.forEach((x) => {
        var li = document.createElement('li');
        li.innerText=x;
        document.getElementById('ulFibonacci').appendChild(li);
    });
}
function agregarFibonacci(){
    var  nombre = document.getElementById('txtFibonacci').value;
    serie_fibonacci.push(nombre);
    document.getElementById('arrFibonacci').innerText = serie_fibonacci;
    document.getElementById('txtFibonacci').value='';
}
function cargarNumerosPrimos(){
    numero_primos[0] = 1;
    numero_primos[1] = 2;
    numero_primos[2] = 3;
    numero_primos[3] = 5;
    numero_primos[4] = 7;
    numero_primos[5] = 11;
    numero_primos[6] = 13;
    numero_primos[7] = 17;
    numero_primos[8] = 19;
    numero_primos[9] = 23;
    numero_primos.push(29);
    numero_primos.push(31);
    document.getElementById('arrPrimos').innerText=numero_primos;
    document.getElementById('arrPrimos').append(" el arreglo tiene "+ numero_primos.length + " elementos");
}