let onRRpage = false

function enviar(x) {
    alert(`Sua ${x} foi enviada!`)
}

function buttonUpdate(tela) {

  document.title=tela;
  function branco(botao) {
      botao.className = `button`;
  }

  [...document.getElementsByName("button")].forEach(branco);

  document.getElementById(tela).className += ` selected`
}

function update() {
   var window_top = $(window).scrollTop();
   var pag1_top = $('#pag1').offset().top;
   var pag2_top = $('#pag2').offset().top;
   var pag3_top = $('#pag3').offset().top;
   var pag4_top = $('#pag4').offset().top;
   console.log(window_top)

   if (window_top < pag1_top * (0.7)) {
     buttonUpdate("MAIN")
     document.getElementById("get").innerHTML=`
     <h1 class="content">Leia o título da página.</h1>`
     onRRpage = false
     document.body.style=`
     background-image: linear-gradient(#a95aec, #40e0d0, #ffb6c1); background-size:cover;`
   }
   else if (window_top < pag2_top * (0.8)) {
     buttonUpdate("QUIZ")
     document.getElementById("get").innerHTML=`
     <h1 class="content">Leia o título da página.</h1>`
     onRRpage = false
     document.body.style=`
     background-image: linear-gradient(#a95aec, #40e0d0, #ffb6c1); background-size:cover;`
   }
   else if (window_top < pag3_top * (0.9)) {
     buttonUpdate("UPLOAD")
     document.getElementById("get").innerHTML=`
     <h1 class="content">Leia o título da página.</h1>`
     onRRpage = false
     document.body.style=`
     background-image: linear-gradient(#a95aec, #40e0d0, #ffb6c1); background-size:cover;`
   }
   else if (window_top < pag4_top * (0.9)) {
       buttonUpdate("CONFESSION")
       document.getElementById("get").innerHTML=`
       <h1 class="content">Leia o título da página.</h1>`
       onRRpage = false
       document.body.style=`
       background-image: linear-gradient(#a95aec, #40e0d0, #ffb6c1); background-size:cover;`
   }
   else {
      onRRpage = true
      buttonUpdate("GETSTICKBUGGED")
      if (!onRRpage) document.getElementById("get").innerHTML=`
      <h1 class="content">Leia o título da página.</h1>`
      setTimeout(function(){document.getElementById("get").innerHTML=`
      <h1 class="content" style='margin-top:0'>Leia o título da página.</h1>;
      <iframe width="500" height="500" src="stick.gif"></iframe>
      `},5000)

      setTimeout(function(){
        if (onRRpage) {
            document.body.style='background-image: url("rolled.gif"); background-size:auto';
            document.title="GETSTICKROLLED";
            document.getElementById("content").style=`color:white`;
         }
      },9500)

  }
}

$(function() {
  $(window).scroll(update);
  update();
 });
