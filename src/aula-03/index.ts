/*
    Tipagem em funções
*/

function sum(x: number, y: number): number {
  const result = x + y;
  console.log(result);

  return result;
}

const result = sum(7, 3);
console.log(result);

const showMessage = (name: string) => {
  const message = `Olá ${name}`;

  return message;
};

console.log(showMessage('Pedro Julio'));
