$(function(){

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

/* document.getElementById("click-me").onclick = function (){
    alert("Clicou aqui");
};
document.getElementById("hover-me").onmouseover = function (){
    alert("Passou aqui");
};
document.getElementById("leave-me").onmouseleave = function (){
    alert("Saiu o cursor")
};
document.getElementById("teste-me").onmousedown = function (){
    alert("TESTE");
};
document.onkeydown = function (){
    alert("VocÊ apertou a tecla: " + event.keyCode);
}; */

//Aula 17 Manipulação CSS

/* document.getElementById("botao_cor").onclick = function (){
    document.getElementById("botao_cor").style['background-color'] = 'black';
    document.getElementById("botao_cor").style.transform = "translateX(100px)";
};*/

//Aula 18 Outros metodos getElements

/* var exemplo = document.getElementsByClassName("exemplo");

exemplo[0].innerHTML = "Edmilson";

console.log(exemplo); */
/* 
var exemplo = document.getElementsByTagName("p");

exemplo[4].innerHTML = "Edmilson";
exemplo[5].innerHTML = "Junior";

console.log(exemplo);
 */

//Aula 19 Loops for e for/in

/* var alunos = ['Edmilson', 'Quintela', 'Victor', 'Duda', 'Ari']

for(var a = 0; a < alunos.length; a++){
    console.log(alunos[a]);
}

var carro = {
    'Ano': 2008,
    'Modelo': 'Siena',
    'Cilindradas': '1.0',
    'Combustível': 'Flex'

}

for(var prop in carro ){
    console.log(prop + ': ' + carro[prop] );
} */

/* var elementos = document.getElementsByClassName("exemplo");

for(var c = 0; c < elementos.length; c++){
    elementos[c].style.color = "orange";
    elementos[c].style['font-weight'] = "bold";
} */

//Aula 20 while e Do while

/* var elementos = document.getElementsByClassName("exemplo");

var teste = 0;

while (teste < 10){
    console.log(teste);
    teste++;
} */

/* var teste2 = 10;

do {
    console.log(teste2);
    teste2++;
}while(teste2 > 5);
 */

//Aula 20 condicionais if, else if e else

/* var nota = 10;
var falta = 8;

if (nota < 6 && falta > 4){
    console.log("Reprovado");
}else{
    console.log("Aprovado");
}

var idade = 19;

if(idade < 18){
    console.log("Menor de idade");
} else if(idade == 18){
    console.log("Tem 18 anos");
}
else{
    console.log("Maior de idade")
}

var nome = 'Edmilson';
if(nome){
    console.log(nome);
} 
*/


//Aula 21 Aninhamentos de loops
/* 
var socio = true;
var idade = 25;

if (socio || idade >= 65){
    console.log("Ingresso de graça");
} else{
    if(socio == false && idade < 18){
        console.log("Ingresso r$ 6,00.");
    }
    else{
        console.log("Ingresso r$ 12,00.");
    }
} */
 /* 
    var funcionarios = [
        {
            'nome': 'Carlos Henrique da Silva',
            'idade': 45,
            'filhos': ['Mariana Alves da Silva', 'Fernanda Alves da Silva']     
        },
        {
            'nome': 'Maria Helena Pereira',
            'idade': 32,
            'filhos': ['João Pedro Pereira de Souza']
            
        },
        {
            'nome': 'José Feliciano Maia',
            'idade': 39,
            'filhos': ['Felipe Ferreira Maia', 'Fábio Ferreira Maia', 'João Ferreira Maia']
            
        }  
    ];
    var list_element = document.getElementById("filhos");
    for (var a = 0 ; a < funcionarios.length ; a++) {
        if (funcionarios[a].filhos) {
            var lista_filhos = funcionarios[a].filhos;
            for (var b = 0 ; b < lista_filhos.length ; b++) {
                list_element.innerHTML += '<li> ' +lista_filhos[b] + ' - Filho(a) de ' + funcionarios[a].nome + '</li>';
            }
        }
    } */

 

//AULA 25 LOCAL STORAGE
/* 
document.getElementById("enviar-nome").onclick = function (){

    // Guarda o nome do usuario digitado em local storage
    var nome_usuario = document.getElementById("nome-usuario").value;
    localStorage.setItem("nome_usuario", nome_usuario);

    // esconder o formulário
    document.getElementById("name-field").style.display = "none";

    // atualizar e mostrar mensagem de boas vindas
    document.getElementById("welcome-text").innerHTML = "Olá " + localStorage.nome_usuario + ", tudo bem?";
    document.getElementById("not-me").innerHTML = "Não é " + localStorage.nome_usuario + "?";
    document.getElementById("welcome-area").style.display = "initial";
};

if(localStorage.nome_usuario){

    // Guarda o nome do usuario digitado em local storage
    var nome_usuario = document.getElementById("nome-usuario").value;
    localStorage.setItem("nome_usuario", nome_usuario);

       // atualizar e mostrar mensagem de boas vindas
       document.getElementById("welcome-text").innerHTML = "Olá " + localStorage.nome_usuario + ", tudo bem?";
       document.getElementById("not-me").innerHTML = "Não é " + localStorage.nome_usuario + "?";
       document.getElementById("welcome-area").style.display = "initial";

}

document.getElementById("not-me").onclick = function(){

    //remover chave nome do local storage
    localStorage.removeItem("nome_usuario");

    //esconder mensagem de boas vindas
    document.getElementById("welcome-area").style.display = "none";

    //mostra o formulário
    document.getElementById("name-field").style.display = "initial";
}
 */

//Aula 26 Data e Hora

/* var data_hoje = new Date();
console.log(data_hoje);
 */
//posso incluir os métodos para ter a data em diversos formatos
//getDate()	Retorna o dia do mês (de 1 a 31)
//getDay()	    Retorna o dia da semana (de 0 - Domingo a 6 - Sábado)
//getFullYear()	Retorna o ano
//getHours()	Retorna a hora


//Aula 27 Métodos de tempo

/*  console.log("Mensagem 1");

window.setTimeout(function(){
    console.log("Mensagem 2");
},6000)

//spinner-loader 
//mostrar-loader

document.getElementById("mostrar-loader").onclick = function(){

    document.getElementById("spinner-loader").style.display = "initial";

    window.setTimeout(function(){

        document.getElementById("spinner-loader").style.display = "none";

    },5000)
}; 
 */
/* var count = 0;

var inter = window.setInterval(function(){
    console.log(count);
    count++;

    if(count == 10){
        window.clearInterval(inter);
    }
},1000);  */
/* 
window.setInterval(function(){

    var hora_atual = new Date();

    var horas = hora_atual.getHours();
    var minutos = hora_atual.getMinutes();
    var segundos = hora_atual.getSeconds();
    
    function format_time(time){
        if (time >= 0 && time <= 9){
           var formatted_time = time.toString();
        formatted_time = "0" + formatted_time;
        } else{
           var formatted_time = time.toString();
        }
        return formatted_time;
    }

    document.getElementById("relogio").innerHTML = format_time(horas) + ":" + format_time(minutos) + ":" + format_time(segundos);
    
},1000);
 */

//Aula 28 Switch 
/* 
function cardapio_restaurante (opcao){
    switch(opcao){
        case '1':
            return "pizza";
            break;

        case '2':
            return "tropeiro";
            break;

        case '3':
            return "feijoada";
            break;

        case '4':
            return "arroz doce";
            break;

        case '5':
            return "pudim";
            break;

        default:
            return "Opção não encontrada";

    }
}

var opcao_cardapio = "2";

console.log(cardapio_restaurante(opcao_cardapio));
 */

//Aula 29 Break e continue

/* var valor_teste = 0;

while (valor_teste < 10){
    console.log(valor_teste);
    valor_teste ++;

    if (valor_teste == 5){
        break;
    }
}
 */
/* var valor_teste = 0;

while (valor_teste < 10){
    valor_teste ++;

    if (valor_teste % 2 == 0){
        continue;
    }
    console.log(valor_teste);
} */

//Aula 30 Formulários

/* //select box
document.getElementById("mostrar_opcao").onclick = function () {

    var campo_select = document.getElementById("options");
    var indice_selecionado = campo_select.options.selectedIndex;
    var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
    document.getElementById("opcao_selecionada").innerHTML = valor_selecionado;

};

// radio buttons

document.getElementById("mostrar_radio").onclick = function (){

    var radio = document.getElementsByName("genero");
    var radio_selected;

    for (var a = 0; a < radio.length;a++){
        if (radio[a].checked)
            radio_selected = radio[a].value;
    }
    document.getElementById("radio_selecionado").innerHTML = radio_selected;
};

// check box

document.getElementById("mostrar_check").onclick = function (){

    var check = document.getElementsByName("interesse");
    document.getElementById("check_selecionado").innerHTML = "";

    for(var b = 0; b < check.length; b++){
        if (check[b].checked){
            document.getElementById("check_selecionado").innerHTML += '<li>' + check[b].value + '</li>';
        }
    }
};
 */

/* // data

document.getElementById("mostrar_data").onclick = function () {

    var data_select = document.getElementById("data_evento").value;
    var data_completa = new Date(data_select);
    document.getElementById("data_selecionada").innerHTML = data_completa;

};
 */

// Aula 31 onchange
/* 
document.getElementById("escolaridade").onchange = function () {

    var campo_select = document.getElementById("escolaridade");
    var indice_selecionado = campo_select.options.selectedIndex;
    var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
    document.getElementById("escolaridade_selecionada").innerHTML = valor_selecionado;

};

var check = document.getElementsByName("lanche");

for (var a = 0;  a < check.length; a++) {

    check[a].onchange = function () {

        document.getElementById("check_selecionado").innerHTML = "";
        
        for (var b = 0;  b < check.length; b++) {
            
            if (check[b].checked) {
                document.getElementById("check_selecionado").innerHTML += '<li>' + check[b].value + '</li>';
            }
        }
    }  
} */


/* // Aula 34 JQuery - Sintaxe

$("#esconder").click(function(){
    $(".exemplo").hide();
});
 */


 //AULA 35  Manipulção do conteúdo HTML
/* 
var conteudo_html = $("#paragrafo-html").html();
console.log(conteudo_html);

var url_link = $("#paragrafo-link").attr("href");
console.log(url_link);

$("#paragrafo-link").attr("href","https://www.youtube.com");

var url_link = $("#paragrafo-link").attr("href");
console.log(url_link);


$("#mudar_imagem").click(function(){
    $("#imagem_js").attr("src", "https://cdn.tutsplus.com/net/uploads/2013/12/managing-async-nodejs-retina-preview.png");
    $("#mudar_imagem").hide();
});
 
$("#paragrafo-empty").remove(); */

//Aula 36 loop each

// Array
 /* var lista = ["HTML","CSS","Javascript", "jQuery", "PHP"];

$.each(lista, function( indice, valor ) {
    console.log('O elemento de índice [' + indice + '] tem o valor de ' + valor);
});

// Objeto
var pessoa = {
    'nome': 'João Pedro',
    'DN': '20/01/1990',
    'CPF': '111.111.111-11'
};

$.each(pessoa, function( chave, valor ) {
    console.log('O elemento de chave [' + chave + '] tem o valor de ' + valor);
});

var interesses = $("#interesses li");

$.each(interesses, function( chave, valor ) {
    console.log($(valor).text());
}); */


// Aula 37 Formulários
/* 
$("campo_nome").val();

var conteudo_input = $("#campo_nome").val();
console.log(conteudo_input);


$("input[name='interesse']").change(function() {

    var checkboxes_selecionados = $("input[name='interesse']:checked");
    var textos = [];
    
    $.each(checkboxes_selecionados, function( index, value ) {
        
        textos.push($(value).parent("span").text());
    
    });
    
    console.log(textos);
    
}); */


// Aula 38  Manipulação class

// Adicionar classe:
$("#adicionar_classe").click(function(){
    $("#paragrafo-classes").addClass("styling");
});

// Remover classe:
$("#remover_classe").click(function(){
$("#paragrafo-classes").removeClass("styling");
});

// Alternar classe:
$("#alternar_classe").click(function(){
$("#paragrafo-classes").toggleClass("styling");
});


// Aula 39 JQuery - Eventos

$("#nome").keyup(function(){
    var conteudo = $('#nome').val();

    if (conteudo){
        $('#confirmar').css("display", "initial");
    } else {
        $('#confirmar').css("display", "none");
    }
});

// Aula 40 JQuery - Efeitos

$("#botao-esconder").click(function(){
    $(this).hide();
    $("#texto-escondido").show();
});

$("#toggle-tab").click(function(){
    $("#tab-content").slideToggle();
    $("#toggle-tab").toggleClass("flip");
});

// Aula 41 Animate

});
