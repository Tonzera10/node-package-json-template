const nome = process.argv[2]
const idade = Number(process.argv[3])

if(!nome || !idade) {
    console.log("Erro");
} else {
    console.log(`Olá ${nome}! Você tem ${idade} anos. \nEm sete anos você terá ${idade + 7}.`);
}