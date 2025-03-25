/*
    Interface x Type
    Diferenças
    - 1: A declaração se difere pelo uso do "=" em type e não em interface.
    - 2: Para extender em interface utilizamos o "extends" já em type
    usamos = NomeDoType & {}.
    - 3: É possivel criar mais de uma interface com o mesmo nome e atributos 
    diferentes, nesse caso o typescript une todos os atributos automaticamente.
    Já com type não é possivel.
*/

interface IBaseProduct {
  price: number;
}

interface IProduct extends IBaseProduct {
  id: number;
  name: string;
}

type TBaseProduct = {
  price: number;
};

type TProduct = TBaseProduct & {
  id: number;
  name: string;
};

let product1: IProduct = { id: 1, name: 'Produto 1', price: 500 };
let product2: TProduct = { id: 2, name: 'Produto 2', price: 550 };
