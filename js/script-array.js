//Arreglos en javascript//
//Un conjunto de elementos definidos en una estructura
//DEFINICIONES
var provincias = ['Loja','Azuay','Cañar','Chimborazo'];
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
        document.getElementById('ulProvincias').appendChild(li);
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