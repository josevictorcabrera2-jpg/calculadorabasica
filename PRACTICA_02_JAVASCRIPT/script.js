
        function calcular() {
let numero1 = Number(document.getElementById("numero1").value);
let numero2 = Number(document.getElementById("numero2").value);
let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;
document.getElementById("suma").innerHTML = "La suma es: " + suma;
document.getElementById("resta").innerHTML = "La resta es: " + resta;
document.getElementById("multiplicacion").innerHTML = "La multiplicación es: " + multiplicacion;
document.getElementById("division").innerHTML = "La división es: " + division;
}
    