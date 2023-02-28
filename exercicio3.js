import { countries } from "./countries.js";

const name = process.argv[2]
const code = process.argv[3]

if(!name || !code) {
    console.log("Digite um nome e um código");
} else {
    countries.push({name, code})
    console.log(countries[countries.length - 1])
}
