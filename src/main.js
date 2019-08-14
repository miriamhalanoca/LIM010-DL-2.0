/* Manejo del DOM */
/* Manejo del DOM */
const data = document.getElementById('data');
const data1 = (fetch('https://raw.githubusercontent.com/miriamhalanoca/LIM010-DL-2.0/master/src/data/potter.json')
.then(response => response.json()));
Promise.all(data1)
.then(resultado => {
  console.log(resultado)
  const urlspeli = (data) => {
    let almacenar = '';
    for (data in Object) {
      let item = `
        
        
           `
      almacenar += item;
    }
    return almacenar;
  };
  elemt.innerHTML = urlspeli(resultado);
});