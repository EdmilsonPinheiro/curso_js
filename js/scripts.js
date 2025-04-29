//Aula 3 Variaveis

var latitude = 10.45128
var longitude = -8.14527

console.log(latitude);
console.log(longitude);

//Aula 4 Strings

var nome = "Edmilson";  // podem ser usadas aspas duplas
var sobrenome = 'Junior';  // ou aspas simples
var cpf = '111.111.111-11';  
var telefone = "998887655";
var ddd = '21';
var email = 'edmilsonjunior@gmail.com';
var biografia = "Edmilson Junior começou a sua carreira como desenvolvedor em 2025";
            

console.log(nome+' '+sobrenome);

//Aula 5 Numbers

var num1 = 20;
var num2 = 3;

var soma = num1 + num2;
var subtracao = num1 - num2;
var divisao = num1 / num2;
var multiplicacao = num1 * num2;

var media = (num1 + num2) / 2;

console.log(media);

// Se tiver declarado como number, pode utilizar o toString para transformar em string 
// e colocar no console sem fazer a soma.

var ddd = 31;
var numeroCelular = 986542114;

ddd_string = ddd.toString();
numeroCelular_string = numeroCelular.toString();

console.log(ddd_string + numeroCelular_string);


// Transformando o string em number para fazer a soma da idade.
var idade = '17';

idade = parseInt(idade);
idade ++;
console.log(idade);

//Aula 6 Boolean
var idade = 60;
var teste = idade != 65;
console.log(teste);

// Olhar o tipo com typeof

var vtype1 = "1";
console.log(typeof vtype1); //string
var vtype2 = 10;
console.log(typeof vtype2); //number
var vtype3 = "teste";
console.log(typeof vtype3 == "number"); //boolean


//Aula 7 undefined e null

//criando a variavel mas não atribuiu valor nela.
var undf;
console.log(undf);


var nome = "edmilson"
console.log(nome[0]);
console.log(nome[2]);
console.log(nome[6]);
console.log(nome[20]); // vai aparecer undefined pq passou a qnt de array q tem no nome.

// FOLHA DE EXERCICIO,ARQUIVO CHAMADO EX1.JS AULA 8 E 9


//Aula 10


/* var conteudo_caixa = document.getElementById("caixa_azul").innerHTML;

console.log(conteudo_caixa);

document.getElementById("caixa_amarela").innerHTML = conteudo_caixa;
 */
//Aula 11 Funções

function soma_numeros(){
    var x = 10;
    var y = 5;
    var soma = x + y;
    console.log(soma);
}
soma_numeros();

function soma_variaveis(num1,num2){
    var soma = num1 + num2;
    console.log(soma);
}
soma_variaveis(10,10);






/* //AULA 35
$("esconder").click(function(){
    $(".exemplo").css("display","none");
});
var conteudo_html = $("#paragrafo-html").html();
console.log(conteudo_html);

var url_link = $("#paragrafo-link").attr("href");
console.log(url_link);


$("#mudar_imagem").click(function(){
    $("#imagem_js").attr("src", "https://cdn.tutsplus.com/net/uploads/2013/12/managing-async-nodejs-retina-preview.png");
    $("#mudar_imagem").hide();
});
 */