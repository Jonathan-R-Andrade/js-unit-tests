const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

const PRODUCTS = productDetails('productA', 'productB');

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    expect(Array.isArray(PRODUCTS)).toBeTruthy();
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(PRODUCTS).toHaveLength(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(PRODUCTS.map(obj => typeof obj)).toEqual(['object', 'object']);
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(PRODUCTS[0]).toEqual({ name: 'productA', details: { productId: 'productA123' } });
    expect(PRODUCTS[1]).toEqual({ name: 'productB', details: { productId: 'productB123' } });
    // Teste se os dois productIds terminam com 123.
    expect(PRODUCTS[0].details.productId).toMatch(/123$/g);
    expect(PRODUCTS[1].details.productId).toMatch(/123$/g);
  });
});
