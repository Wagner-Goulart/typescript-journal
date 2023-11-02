# TypeScript Journal

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

## Dia 1 ⇒ Tipos e Interfaces

`Typescript` permite a tipagem de todos os tipos primitivos encontrados em praticamente todas as linguagens de programação.

Existem duas formas formas de definir um tipo, explicitamente através a `annotation`  nesse caso o tipo é informado na declaração da variável.

```tsx
{
// ANNOTATION, TIPO É DEFINIDO DA DECLARAÇÃO DA VARIÁVEL.
  let numberVar: number = 40;
  let stringVar: string = "Texto";
  let booleanVar: boolean = true;
}
```

Já a inferência de tipos, ocorre quando o `typeScript` deduz o tipo da variável de acordo com o primeiro valor que passamos na declaração.

```tsx
// DECLARAÇÃO IMPLICITA - INFEREENCIA

    // Se FIZERMOS ISSO O TYPESCRIPT IRA ATRIBUI O TIPO NUMBER A VARIAVEL
    // POIS O PRIMEIRO VALOR ATRIBUIDO É UM NUMERO
    let variavelNumero = 10

    // E NÃO SERÁ PERMITIDO REDECLARAR ESSA VARIÁVEL COM OUTRO TIPO
    variavelNumero = "Não é permitido vair dar erro"
```

### Interfaces

Permitem a padronizam do código, geralmente utilizadas em objetos e classes, criam um “contrato” dos tipos e esse contrato deve ser seguido sempre que a interface é implementada. 

```tsx
// CRIA UMA INTERFACE PARA OPERAÇÕES MATEMETICAS
interface MathFunctionParams {
        number1: number;
        number2: number
    }
// TIPA A FUNÇÃO COM A INTERFACE CRIADO
// PROPRIEDADES DA INTERFACE SÃO ACESSADAS COMO OBJETOS
    function sumNums(nums : MathFunctionParams) {
        return nums.number1 + nums.number2
    }

    console.log(sumNums({number1: 10, number2: 30}))
```
