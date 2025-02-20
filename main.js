//practica 25
var calcularFechanac = function (fechaNacimiento) {
    var fechaNac = new Date(fechaNacimiento);
    var fechaActual = new Date();
    var edad = fechaActual.getFullYear() - fechaNac.getFullYear();
    var mesAct = fechaActual.getMonth();
    var diaAct = fechaActual.getDate();
    var mesNac = fechaNac.getMonth();
    var diaNac = fechaNac.getDate();
    if (mesAct < mesNac || (mesAct === mesNac && diaAct < diaNac)) {
        edad--;
    }
    return edad;
};
console.log(calcularFechanac("2000-12-25"));
