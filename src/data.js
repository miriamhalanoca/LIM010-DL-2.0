/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const ascendente = (datos) =>
 datos.sort((a, b) => {
  if (a.yearOfBirth >= b.yearOfBirth) {
    return 1;
  }
  else {

    return -1;
  }
});


const descendente = (datos) =>
 datos.sort((a, b) => {
  if (a.yearOfBirth <= b.yearOfBirth) {
    return 1;
  }
  else {

    return -1;
  }
});

const FiltrarGenero = (datos, genero) =>{
 const filtrarGenero2 = datos.filter(elemento => elemento.gender === genero);
return filtrarGenero2;
};

const FiltrarRolhogwartsStudent = (datos) =>{
 const filtrarrol1= datos.filter(elemento => elemento.hogwartsStudent);
 return filtrarrol1;
};

const FiltrarRolhogwartsStaff = (datos)  => {
  const filtrarrol2 = datos.filter(elemento => elemento.hogwartsStaff);
  return filtrarrol2;
}
window.ascendente=ascendente;
window.descendente=descendente;
window.FiltrarGenero=FiltrarGenero;
window.FiltrarRolhogwartsStudent = FiltrarRolhogwartsStudent;
window.FiltrarRolhogwartsStaff = FiltrarRolhogwartsStaff;
window.filtrarCasa=filtrarCasa