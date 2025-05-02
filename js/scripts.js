/* //Aula 3 Variaveis

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

/* function soma_numeros(){
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
soma_variaveis(10,10); */


//EXERCICIO MMC


/* function calc_imc(peso,altura) {
    var imc = peso / (altura * altura);
    return imc;
}
    var meu_peso = document.getElementById("peso").innerHTML;
    var minha_altura = document.getElementById("altura").innerHTML;

    var meu_imc = calc_imc(meu_peso,minha_altura);

document.getElementById("imc").innerHTML = meu_imc.toFixed(1);    */


//Aula 12 Array
/* 
var alunos = ["Edmilson", "Victor","Lucas"];
var num_primos = [ 2, 3, 5, 7, 11, 13 ];

console.log(alunos[1]);
console.log(num_primos[3]);

var grupos = [ 
    [ "Edmilson" , "Duda" ],
    [ "Victor" , "Quintela", "Leticia", "Lucas" ],
    [ "Marcus" , "Cabelin", "Well" ]
];

console.log("Quantidade de items: " + grupos.length);
console.log(grupos[0][0]);
console.log(grupos[1]);
console.log(grupos[2]);

var massaDePizza = ["farinha","agua","oleo","ovo","sal"];
 */
//massaDePizza.pop(); REMOVE O ULTIMO ITEM DO ARRAY.
//massaDePizza.push("queijo"); ADICIONA NO FINAL.
//massaDePizza.unshift("molho"); //ADICIONA NO COMEÇO.
//console.log(massaDePizza.slice(0,2)); //POSSO PEGAR O ITEM QUE EU QUISER, EX: ['farinha', 'agua'].
//massaDePizza.shift(); REMOVE O PRIMEIRO ITEM DO ARRAY.
//console.log(massaDePizza);


//Aula 13 Objetos

/* 
var funcionario = {
    'nome': 'Pedro Souza Gomes',
    'ano_nasc': 1972,
    'cpf': '111.111.111.11',
    'cargo': 'Analista de Sistemas'
};
     
console.log(funcionario.nome);
console.log(funcionario['ano_nasc']);
// AS DUAS FORMAS FUNCIONA

var cursos = [
    {
        'titulo': 'Aprenda programação em Python 3 com facilidade do zero',
        'avaliacoes': 680,
        'alunos': 2300,
        'categorias': ['programacao', 'tecnologia']
    },

    {
        'titulo': 'Aprenda PHP e faça sites dinâmicos',
        'avaliacoes': 180,
        'alunos': 350,
        'categorias': ['desenvolvimento web', 'programacao']
    },

    {
        'titulo': 'Excel do Zero ao Avançado',
        'avaliacoes': 420,
        'alunos': 1800,
        'categorias': ['produtividade', 'gestão']
    }
    
]; */

//Consegui selecionar e alterar.
//console.log(cursos[0].categorias[1]);
//console.log(cursos[1].categorias[0]);
//console.log(cursos[0].categorias[0]);
/* cursos[1].categorias[1]= "codeIgniter 3";
console.log(cursos[1].categorias[1]); */


//Aula 14 Métodos de Objetos
//key:value

/* var aluno = {
    'nome': 'Ed',
    'sobrenome': 'Junior',
    'dataNasc': 2001,
    'nome_completo': function(){
        var n_completo = this.nome + " " + this.sobrenome;
        return n_completo;
    },
    'ver_idade': function(){
        var anoAtual = 2025 - this.dataNasc;
        return anoAtual;
    }
}

console.log(aluno.nome_completo());
console.log(aluno.ver_idade());
 */

                   //objeto // metodo do objeto      // propriedade do objeto
//console.log(typeof document.getElementById("tudo_obj").innerHTML);
//console.log(n_completo);


//Aula 16 Eventos

/* document.getElementById("click-me").onclick = function(){
    alert("Voce clicou no botão");
};
document.getElementById("hover-me").onmouseover = function(){
    alert("Voce passou com o cursor no botao");
};
document.getElementById("leave-me").onmouseout = function(){
    alert("Voce saiu com o cursor no botao");
}; */

/* document.onkeydown = function(){
    alert('Voce apertou alguma tecla');
}; */

/* document.onkeydown = function(){
    alert('Voce apertou a tecla: ' + event.keyCode);
};
 







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