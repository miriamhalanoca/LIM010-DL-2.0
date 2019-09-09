/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
// esta funcion ejecuta la tarea del boton ascendente 
const ascendente = (datos) =>
 datos.sort((a, b) => {
  if (a.yearOfBirth >= b.yearOfBirth) {
    return 1;
  }
  else {

    return -1;
  }
});

// esta funcion ejecuta la tarea del boton descendente
const descendente = (datos) =>
 datos.sort((a, b) => {
  if (a.yearOfBirth <= b.yearOfBirth) {
    return 1;
  }
  else {

    return -1;
  }
});

// esta funcion ejecuta para el boton de desplazammiento de gènero

const FiltrarGenero = (datos, genero) =>{
 const filtrarGenero2 = datos.filter(elemento => elemento.gender === genero);
return filtrarGenero2;
};

// estas dos funciones ejecutan para el boton de desplazamiento  de rol

const FiltrarRolhogwartsStudent = (datos) =>{
 const filtrarrol1= datos.filter(elemento => elemento.hogwartsStudent);
 return filtrarrol1;
};

const FiltrarRolhogwartsStaff = (datos)  => {
  const filtrarrol2 = datos.filter(elemento => elemento.hogwartsStaff);
  return filtrarrol2;
}

// esta funcion ejecuta para  el boton de desplazamiento de casa 
const filtrarCasa = (datos, casa)=>{
  const filtrarcasa= datos.filter(elemento=>elemento.house===casa);
  return filtrarcasa;
}


window.ascendente=ascendente;
window.descendente=descendente;
window.FiltrarGenero=FiltrarGenero;
window.FiltrarRolhogwartsStudent = FiltrarRolhogwartsStudent;
window.FiltrarRolhogwartsStaff = FiltrarRolhogwartsStaff;
window.filtrarCasa=filtrarCasa