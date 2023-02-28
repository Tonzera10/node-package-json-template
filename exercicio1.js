import { countries } from "./countries.js";

if(!process.argv[2]){
    console.log("Erro ")
} else {
    const result = countries.filter(data => data.name.toLowerCase() === process.argv[2].toLowerCase())
    
    console.log(result)
}
