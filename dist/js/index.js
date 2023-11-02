"use strict";
{
    let number = 40;
    let string = "Texto";
    let boolean = true;
}
{
    let variavelNumero = 10;
    variavelNumero = 0;
}
{
    function sumNums(nums) {
        return nums.number1 + nums.number2;
    }
}
{
    class Developer {
        constructor(name, age, job, isEmployed) {
            (this.name = name),
                (this.age = age),
                (this.job = job),
                (this.isEmployed = isEmployed);
        }
    }
    const Wagner = new Developer("Wagner", 34, "Desenvolvedor", false);
    console.log(Wagner);
}
{
    function printClientId(id) {
        console.log(`O id do cliente é ${id}`);
    }
    printClientId('100');
}
{
    let idade = 34;
    let idade2 = "34";
}
{
}
{
    const button = document.getElementById("button");
    button.addEventListener('click', event => {
        const mouseEvent = event;
    });
}
