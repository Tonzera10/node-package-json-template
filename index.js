import { countries } from "./countries.js";

const value = process.argv[2];
// process.argv
//  0             1                 2
//[node, arquivo a ser executado, input]

// if(!value){
//     console.log("Digite um país a ser procurado");
// } else {
//     for (let i = 0; 1 < countries.length; i++) {
//         if(countries[i].name.toLocaleLowerCase() === value) {
//             console.log(countries[i])
//         }
//     }

// }

if (!value) {
  console.log("Digite um país a ser procurado");
} else {
  let filtro = countries.filter((country) => {
    if (country.name.toLowerCase() === value.toLowerCase()) {
      return country 
    }
  })
  console.log(filtro);
}
