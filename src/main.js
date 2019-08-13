/* Manejo del DOM */
const data = document.getElementById('data');


const datajson = () =>{ fetch('C:\Users\Laboratoria\Documents\proyecto\LIM010-DL-2.0\src\data');
Promise.all(datajson).then(resultado => {
  console.log(datajson)
  elemt.innerHTML = datajson(resultado);
});
}