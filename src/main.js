/* Manejo del DOM */
const data = document.getElementById("data");

const dataJSON = () => {
  fetch('https://raw.githubusercontent.com/Laboratoria/LIM009-DL-2.0/master/src/data/potter.json')
    .then(res => res.json())
    .then(datos => {
      paintAll(datos);
    });
};
dataJSON();


const paintAll = (datos) => {
  let all = '';
  for (let i = 0; i < datos.length; i++) {
    all += `
        <div class="cards">
        <figure class="cards-img">
        <img src= ${datos[i].image} />
        </figure>
        <div class="text"><p><strong>${datos[i].name}</strong></p>
        <p> ${datos[i].house ? datos[i].house : 'No tiene casa'}</p></div>
        <div class="texto">
        <p>? Especie</br><strong>${datos[i].species}</strong></p>
        <p>? Rol</br><strong>${datos[i].hogwartsStudent ? 'Estudiante' : 'Staff'}</strong></p>
        `;
  if (typeof datos[i].yearOfBirth === 'number') {
      all +=
        `<div><p>? Edad</br><strong>${2019 - datos[i].yearOfBirth}</strong></p></div>`;
    } else {
      all += `<p>No tiene fecha de nacimiento</p>`;
    }
    all += `<p>? Actor</br><strong>${datos[i].actor}</strong></p></div>
      </div>`;
  }
  data.innerHTML = all;
};
