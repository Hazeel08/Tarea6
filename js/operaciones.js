var resultado=0;
var f= new Date();

function operacion(operador){
    try {
        var n1= Number(document.getElementById('n1').value);
        var n2= parseInt(document.getElementById('n2').value);

        validaciones();

        switch(operador){
            case '+':
                resultado= n1+n2;
                var hayResultado = true;
                break;
            case '-':
                resultado= n1-n2;
                var hayResultado = true;
                break;   
            case '/':
                resultado= n1/n2;
                var hayResultado = true;
                break;
            case '*':
                resultado= n1*n2;
                var hayResultado = true;
                break;
        }
 
        document.getElementById('res').value = resultado;

    } catch (error) {
        console.error(error.name + ': ' + error.message);
    }
}

function calcularNR(){
    try {
        let numero=0;
        numero = Math.floor(Math.random()*100);
        document.getElementById('numeroR').value = numero;
    } catch (error) {
        console.error(error.name + ': ' + error.message);
    }
}

function calcularR(){
    try {
        let numero=0;
        var r= Number(document.getElementById('raiz').value);

        if(r<0){
            alert('El número no puede ser negativo');
            return;
        }

        numero = Math.sqrt(r);

        alert('La raíz cuadrada de '+ r + ' es: '+numero);
    } catch (error) {
        console.error(e.name)    
        console.error(e.foo)     
        console.error(e.message) 
        console.error(e.stack)
    }
}

function calcularP(){
    try {
        let numero=0;
        let b= Number(document.getElementById('base').value);

        if(b<0){
            alert('El número no puede ser negativo');
            return;
        }

        numero = Math.pow(b, 2);

        alert('La pontencia de '+ b + ' a la 2 es: '+numero);
    } catch (error) {
        alert("Error al ejecutar el cálculo. " + error);
        console.error(error.name + ': ' + error.message);
    }
}

function factorial(){
    try {
        var total = 1;
        var numero= Number(document.getElementById('fac').value);

        for (i=1; i<=numero; i++) {
            total = total * i; 
        }
        alert(`El factorial de ${numero} es: ${total}`);

    } catch (error) {
        alert("Error al ejecutar el cálculo. " + error);
    }
}

function validaciones(){
    if(Number(document.getElementById('n1').value)==0 && Number(document.getElementById('n2').value)==0){
        alert('Debe digitar números diferentes a 0.');
        return;
    }
}

function fecha(){
    alert("La fecha de hoy es: " + new Date().toLocaleDateString()+"\n"+"La hora actual es: "+ new Date().toLocaleTimeString());
}

function eda(){
    let annoNacimiento= Number(document.getElementById('anno').value);
    let edad=0;

    if(annoNacimiento==0||annoNacimiento==NaN){
        alert('Debes digitar el año de nacimiento.');
        return;
    }
    
    do {
        annoNacimiento+=1;
        edad+=1;
    } while (annoNacimiento<2022);

    alert('Aproximadamente tienes o vas a cumplir: '+edad+' años.');
}

function annoNacimiento(){
    let edad= Number(document.getElementById('edad').value);
    let annoActual=2022;

    if(edad>=100){
        alert('Debes digitar su edad real.');
        return;
    }
    else{
        if (edad==0) {

            alert('Naciste en el año 2022.');
            return;

        } else {

            while(edad>0){
                edad-=1;
                annoActual-=1;
            }
            alert('Aproximadamente naciste en el año: '+(annoActual-1)+' o '+annoActual);

        }
    }
}