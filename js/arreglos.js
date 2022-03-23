function arregloColores(){
    try {
        var colores= new Array("Rosado", "Amarillo", "Azul", "Celeste", "Verde");
        var lista = new String();

        for (var i = 0; i < colores.length; i++) {
            lista += colores[i] + "\n";
        }
        
        alert(lista.toString());

    } catch (error) {
        console.error(error.name + ': ' + error.message);
    }
}

function arregloTipado(){
    try {
        var numeros = new Int32Array(10);

        for (let i = 0; i < numeros.length; i++) {
            numeros[i] = i+1;
        }

        alert(numeros);
    } catch (error) {
        console.error(error.name + ': ' + error.message);
    }
}