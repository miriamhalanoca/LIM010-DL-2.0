/* Manejo del DOM */
const data = document.getElementById("data");
const botonAscendente= document.getElementById("ASCENDENTE");



const dataAlmacenados = () => {
  fetch('https://raw.githubusercontent.com/Laboratoria/LIM009-DL-2.0/master/src/data/potter.json')
    .then(res => res.json())
    .then(resultado => {
      mostrar(resultado);

      console.log(resultado);
    });
   
};
dataAlmacenados();

const mostrar = (datos) => {
  let almacenar = '';
  for (let i = 0; i < datos.length; i++) {
    almacenar += `
        <div class="cards">
        <figure class="cards-img">
        <img src= ${datos[i].image} />
        </figure>
        <div class="text"><p>${datos[i].name}</p>
        <p> ${datos[i].house ? datos[i].house : 'No tiene casa'}</p></div>
        <div class="texto">
        <p>Especie</br>${datos[i].species}</p>
        <p> Rol</br>${datos[i].hogwartsStudent ? 'Estudiante' : 'Staff'}</p>
        `;
  if (typeof datos[i].yearOfBirth === 'number') {
      almacenar +=
        `<div><p> Edad</br>${2019 - datos[i].yearOfBirth}</p></div>`;
    } else {
      almacenar += `<p>No tiene fecha de nacimiento</p>`;
    }
    almacenar += `<p> Actor</br>${datos[i].actor}</p></div>
      </div>`;
  }
  data.innerHTML = almacenar;
  // console.log(datos);
};

const ascendente = (datos) => datos.sort((a, b) => {
  if (a.yearOfBirth > b.yearOfBirth) {
    return 1;
  }
  else {

    return -1;
  }
});
// const buscar = document.getElementById('buscar');
// buscar.addEventListener('input', event => {
//   const peliculasBuscada = busco (results.event.target.value.toLowerCase());
//   pelicontenedor.innerHTML = urlspeli(peliculasBuscada);
// });

 botonAscendente.addEventListener('click', () => {
const ordenar1 = ascendente(resultado);
data.innerHTML=  mostrar(ordenar1);

});

window.mostrar = mostrar;
window.ascendente = ascendente;
