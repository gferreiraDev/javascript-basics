// Write a function that takes two numbers and returns the maximum of the two.

const getMaximum = (n1, n2) => {
  return n1 > n2 ? n1 : n1 < n2 ? n2 : 'números são iguais';
}

const a = 6;
const b = 1;

console.log(`O máximo entre ${a} e ${b} é: ${getMaximum(a, b)}`);