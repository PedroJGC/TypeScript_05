/*
    Typeof
*/

interface Product {
  id: number;
  name: string;
}

const product1: Product = { id: 1, name: 'Produto 1' };

const product2: typeof product1 = { id: 2, name: 'Produto 2' };
