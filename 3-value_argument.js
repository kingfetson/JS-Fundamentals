// Script that prints the first argument or "No argument"

const args = process.argv.slice(2);

console.log(args[0] || 'No argument');
