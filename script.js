document.addEventListener('DOMContentLoaded', function(){
const aumentarFonteBotao = document.getElementById('aumentar-fonte');
aumentarFonteBotao.addEventListener('click', function(){
tamanhoAtualFonte += 0.1;
document.body.style.fontSize = ${tamanhoAtualFonte}rem
})

})