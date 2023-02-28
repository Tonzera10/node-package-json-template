import { countries } from "./countries.js";

if(!process.argv[2]){
    console.log("erro");
} else {
    const result = countries.filter((data) => {
        return data.name.toLowerCase()[0] === process.argv[2].toLowerCase()[0]
    })
    console.log(result);
}