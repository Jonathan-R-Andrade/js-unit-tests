# JS Unit Tests

## Sobre

Projeto desenvolvido por [Jonathan R. Andrade](https://www.linkedin.com/in/jonathan-r-andrade/) na [Trybe](https://www.betrybe.com/).

Nesse projeto eu desenvolvi funções em JavaScript e testes unitários usando Jest para garantir que as implementações das funções estão corretas. Algumas funções foram desenvolvidas pela Trybe, eu desenvolvi os testes para essas funções e alguns testes foram desenvolvidos pela Trybe, eu desenvolvi as funções para passar nesses testes.

## Habilidades desenvolvidas

* Escrever testes unitários para funções utilizando o módulo Jest do NodeJS para verificar o correto funcionamento dessas funções;
* A partir de testes já implementados, escrever funções de forma que elas atendam aos testes propostos;
* Escrever testes e funções utilizando uma abordagem de desenvolvimento orientado a testes (TDD).

## Ferramentas utilizadas

* JavaScript ES6+
* Jest
* Node.js v14

## Como executar

Siga os passos abaixo executando os comandos no terminal.

1. Clone o repositório.

    * Exemplo com Git + HTTPS
      ```
      git clone https://github.com/Jonathan-R-Andrade/js-unit-tests.git
      ```
    * Exemplo com Git + SSH
      ```
      git clone git@github.com:Jonathan-R-Andrade/js-unit-tests.git
      ```
    * Usando GitHub CLI
      ```
      gh repo clone Jonathan-R-Andrade/js-unit-tests
      ```

    > Entre na pasta do repositório clonado.

2. Instale as dependências:
    ```
    npm install
    ```

---

### Executando os testes

* Executar todos os testes: 
    ```
    npm test
    ```
* Executar um teste especifico: 
    ```
    npm test tests/nomeDoArquivo.spec.js
    ```
    > Altere `nomeDoArquivo` para o nome do arquivo do teste que será executado.

---

### Executando o linter

Para garantir a qualidade do código o **ESLint** foi utilizado, para rodá-lo, execute o comando abaixo:

```
npm run lint
```
