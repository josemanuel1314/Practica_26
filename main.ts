//practica 25

const calcularFechanac = (fechaNacimiento:string): number =>{

    const fechaNac = new Date(fechaNacimiento);
    const fechaActual = new Date();

    let edad = fechaActual.getFullYear() - fechaNac.getFullYear();

    const [mesAct, diaAct] = [fechaActual.getMonth(), fechaActual.getDate()];
    const [mesNac, diaNac] = [fechaNac.getMonth(),fechaNac.getDate()]
    
    if (mesAct < mesNac || (mesAct === mesNac && diaAct < diaNac)) {
        edad--;
    }
    
    return edad; 

};

console.log(calcularFechanac("2000-12-25"));
console.log(calcularFechanac("1998-5-01"));