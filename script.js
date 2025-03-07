document.addEventListener('DOMContentLoaded', function(){
const aumentarFonteBotao = document.getElementById('aumentar-fonte');

let tamanhoAtualFonte = 1;
aumentarFonteBotao.addEventListener('click', function(){
tamanhoAtualFonte += 0.1;
document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
});

});