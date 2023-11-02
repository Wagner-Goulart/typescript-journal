{
  // DECLARAÇÃO EXPLICITADO - ANNOTATION
  let number: number = 40;
  let string: string = "Texto";
  let boolean: boolean = true;
}

{
  // DECLARAÇÃO IMPLICITADO - INFEREENCIA

  // Se FIZERMOS ISSO O TYPESCRIPT IRA ATRIBUI O TIPO NUMBER A VARIAVEL
  // POIS O PRIMEIRO VALOR ATRIBUIDO É UM NUMERO
  let variavelNumero = 10;

  // E NÃO SERÁ PERMITIDO REDECLARAR ESSA VARIÁVEL COM OUTRO TIPO
  variavelNumero = 0;
}
{
  interface MathFunctionParams {
    number1: number;
    number2: number;
  }

  function sumNums(nums: MathFunctionParams) {
    return nums.number1 + nums.number2;
  }

  //console.log(sumNums({number1: 10, number2: 30}))
}

{
  interface Person {
    name: string;
    age: number;
    job: string;
    isEmployed: boolean;
  }

  class Developer implements Person {
    name: string;
    age: number;
    job: string;
    isEmployed: boolean;

    constructor(name: string, age: number, job: string, isEmployed: boolean) {
      (this.name = name),
        (this.age = age),
        (this.job = job),
        (this.isEmployed = isEmployed);
    }
  }

  const Wagner = new Developer("Wagner", 34, "Desenvolvedor", false);

  console.log(Wagner)
}