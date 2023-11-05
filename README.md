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
## Dia 2 ⇒ `Generics` e `Decorators`

### `Generics:`

Funcionam como um `placeholder` é um forma de escrever um códigos que irá aceitar vários tipos de códigos. Eles podem ser usados de funções, classes e interfaces.

O tipo que irá assumir o lugar do `placeholder` é informado no momento da chamada da função ou instância da classe.

- Criados com a sintaxe `<T>`;
- Dentro das `tags` podem ser qualquer valor, por convenção é utilizado a letra `T` de `type;`
- Ao serem usados a tipo deve ser passado entre as `tags <string>`

```tsx
// CRIA UM INTERFACE QUE ACEITA UM GENERIC DO TIPO <T>
interface UserInterface<T> {
  name: string,
  age: number,
  data: T[] // DATA SERÁ DE ARRAY DE <T> 
}

// AO SE FAZER O USO DA INTERFACE É PASSADO QUE O TIPO STRING
const person: UserInterface<String> = {
  name:'Wagner',
  age: 34,
  data: ["Hello World"]
}
```

### `Decorators:`

`Decorators` são um funcionalidade do `Typescript`, que permitem modificar o comportamento de um classe, método ou propriedade. Podem ser usados para uma variedade de tarefas como `logs` e validações entre outras.

`Decoratros` são `factory functions`, ou seja, são funções que retornam outras funções.

- `Decorators`  injetam no construtor da classe a lógica que foi escrita neles;
- São chamados com a anotação `@nomeDoDecorator`

```tsx

// CRIA O DECORATOR PARA VALIDE O TAMANHO MINIMO DE UM PROPRIEDADE
function minLength(length: number){
    return (target: any, key: string)=>{
      let _value = target[key]

// CRIAR GETTER E SETTERS
      const gettter = ()=> _value;

      const setter = (value: string)=> {
        if(value.length < 3) {
          throw new Error(`Exptect ${key} to have more ${length}`)
        }
        _value = value
      }
// SOBREESCREVE AS PROPRIEDADES DO OBJETO
      Object.defineProperty(target, key, {
        get: gettter,
        set: setter
      })
    }
  }

  class User {
    // USANDO O DECORADOTE, E PASSANDO O TAMANHO MINIMO COMO PARAMETRO
    @minLength(3)
    name: string

    constructor(name: string){
      this.name = name
    }
  }

  const user = new User("Wagner")

  console.log(user)

}
```

A
