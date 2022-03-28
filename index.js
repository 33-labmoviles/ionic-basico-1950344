var total = 0;
var monto = 0;

var montoTxt = document.getElementById("monto");
var totalMsg = document.getElementById("totalMsg");
var descTxt = document.getElementById("descripcion");
var descrip = document.getElementById("descrip");

descAnt = "";

function calcularTotal() {
    
    monto = montoTxt.value;
    monto = parseInt(monto);
    desc = descTxt.value;

    total = total + monto;
    
    descrip.innerHTML = descAnt + "\n" + desc + ": " + monto;
    descAnt = desc + ": " + montoTxt.value + "<br>";
    totalMsg.innerHTML = "Total: " + total + "<br>";
}