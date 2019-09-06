/* Manejo del DOM */
const data = document.getElementById("data");
const botonAscendente= document.getElementById("ASCENDENTE");
const botondescendente = document.getElementById("DESCENDENTE");
const botonDeGenero = document.getElementById("GENERO");
const botonDeRol = document.getElementById("ROL");
const botonDeCasa = document.getElementById("CASA");


const dataAlmacenados = () => {
  fetch('https://raw.githubusercontent.com/Laboratoria/LIM009-DL-2.0/master/src/data/potter.json')
    .then(res => res.json())
    .then(resultado => {
      mostrarEnPantalla(resultado);
      ascendenteOrden(resultado);
      descendenteOrden (resultado);
      BotonGenero(resultado);
      BotonRol(resultado);
      BotonCasa(resultado)
    });
  
};
dataAlmacenados();

const mostrarEnPantalla = (datos) => {
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
};

const ascendenteOrden = (datos) => {
  botonAscendente.addEventListener('click', () => {
    const ordenarascendente = ascendente(datos);
    mostrarEnPantalla(ordenarascendente);
  });
};

const descendenteOrden = (datos) => {
  botondescendente.addEventListener('click', () => {
    const ordenardescendente = descendente(datos);
    mostrarEnPantalla(ordenardescendente);
  });
};

const BotonGenero = (datos) => {
  botonDeGenero.addEventListener('change', (event) => {
    const filtrarGenero1 = FiltrarGenero (datos,event.target.value);
    mostrarEnPantalla(filtrarGenero1);
  })
}

const BotonRol = (datos) => {
  botonDeRol.addEventListener('change', (event) => {
if(botonDeRol.value ===  "hogwartsStudent"){
 const filtrarRol1 = FiltrarRolhogwartsStudent (datos, event.target.value );
 mostrarEnPantalla(filtrarRol1);
  }else if (botonDeRol.value === "hogwartsStaff"){
    const filtrarRol2 = FiltrarRolhogwartsStaff (datos,event.target.value);
mostrarEnPantalla(filtrarRol2);
  }
});
};


const BotonCasa = (datos)=>{
  botonDeCasa.addEventListener('change', ()=>{
    const filtrarcasa = filtrarCasa(datos,event.target.value);
    mostrarEnPantalla(filtrarcasa);
  })
}


// const filterRol = (datos) => {
//   rol.addEventListener('change', () => {
//     if (rol.value === "hogwartsStudent") {
//       const student = window.potter.filtrarRolStudent(datos, rol.value);
//       paintAll(student);
//     } else if (rol.value === "hogwartsStaff") {
//       const staff = window.potter.filtrarRolStaff(datos, rol.value);
//       paintAll(staff);
//     }
//   });
//  };
 
 