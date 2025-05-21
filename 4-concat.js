// Script that prints two arguments in the format: "<first> is <second>"

const args = process.argv.slice(2);

console.log(`${args[0] || 'undefined'} is ${args[1] || 'undefined'}`);
