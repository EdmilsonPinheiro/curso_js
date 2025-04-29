
//Questão 1

console.log("O arquivo 'ex1.js' está funcionando");

//Questão 2

var nome= "Edmilson";
var age = "23";

console.log("Olá, eu me chamo " + nome + " tenho " + age + " anos e estou estudando Javascript");

//Questão 3

var nome = "Edmilson";
var numeroMatricula = "1911";

var nota1 = 10;
var nota2 = 8;
var mediaNota = (nota1 + nota2) / 2;

console.log("O aluno " + nome + " matrícula " + numeroMatricula + ", obteve a média final " + mediaNota);

//Questão 4

var telefoneCelular = "984547412";
console.log("Resultado do teste: " + (telefoneCelular.length ==9));


//Questão 5

console.log(Math.pow(32,6));

//Questão 6

// Alternativa C,D,F e G. Não pode iniciar variaveis com numero, declarar nome com espaço, 
// nem com nomes nome de keywords e nao pode usar hifen para separar nomes.


// c) var typeof;

// d) var nome-aluno;

// f) var 2a_tentativa;

// g) var nome completo;

//Questão 7

var quantidade = "25";
var numero = 6;
var pressao;
var temperatura = 40;
temperatura = null;

console.log(quantidade += quantidade); //2525
console.log( (7+5) / numero + 2 ); //4
console.log(pressao); //undefined
console.log(temperatura); //null
console.log(typeof pressao); //undefined
console.log(typeof temperatura); //object   

//Questão 8

var idade = 65;

console.log(idade != 65); //false
console.log(idade >= 65); //true
console.log("65" == idade); // true
console.log(65 !== idade); //false
console.log(typeof (idade > 60)); //boolean
console.log(typeof (idade > 70)); //boolean



