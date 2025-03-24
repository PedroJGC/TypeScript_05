/*
    Conhecendo interface
    - Boas práticas: iniciar o nome da interface com um "I" ou a primeira letra
    maiúscula.
*/

interface Product {
  id: number;
  name: string;
}

function newProduct(product: Product) {
  console.log(product);
}

newProduct({ id: 1, name: 'Produto x' });
