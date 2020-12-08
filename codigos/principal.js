let mylogo = document.querySelector('#logo');
let opcaoJogo = document.querySelector('.jogos');
mylogo.onclick = function() {
   alert("pare de tocar em mim!");
}
opcaoJogo.addEventListener('change', function(){
   switch(this.value){
      case 'Snake':
         window.location.href = 'jogos/snake/index.html';
         break;
      case 'Breakout':
         window.location.href = 'jogos/breakout/index.html';
         break;
      case 'Calculadora':
         window.location.href = 'jogos/calculadora/index.html';
         break;
   }
});