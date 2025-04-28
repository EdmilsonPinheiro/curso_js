$("esconder").click(function(){
    $(".exemplo").css("display","none");
});




//AULA 35

var conteudo_html = $("#paragrafo-html").html();
console.log(conteudo_html);

var url_link = $("#paragrafo-link").attr("href");
console.log(url_link);


$("#mudar_imagem").click(function(){
    $("#imagem_js").attr("src", "https://cdn.tutsplus.com/net/uploads/2013/12/managing-async-nodejs-retina-preview.png");
    $("#mudar_imagem").hide();
});
