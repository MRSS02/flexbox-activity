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
     document.body.style="background-color: #00FFAA ; transition: background-color 1s";

     onRRpage = false
   }
   else if (window_top < pag2_top * (0.8)) {
     buttonUpdate("QUIZ")
     document.getElementById("get").innerHTML=`
     <h1 class="content">Leia o título da página.</h1>`
     onRRpage = false
     document.body.style="background-color: lightblue ; transition: background-color 1s";
   }
   else if (window_top < pag3_top * (0.9)) {
     buttonUpdate("UPLOAD")
     document.getElementById("get").innerHTML=`
     <h1 class="content">Leia o título da página.</h1>`
     onRRpage = false
     document.body.style="background-color: salmon ; transition: background-color 1s";
   }
   else if (window_top < pag4_top * (0.9)) {
       buttonUpdate("CONFESSION")
       document.getElementById("get").innerHTML=`
       <h1 class="content">Leia o título da página.</h1>`
       onRRpage = false
       document.body.style="background-color: violet ; transition: background-color 1s";
   }
   else {
      onRRpage = true
      buttonUpdate("GETSTICKBUGGED")
      if (!onRRpage) document.getElementById("get").innerHTML=`
      <h1 class="content">Leia o título da página.</h1>`

      if (windowSize>=500)  setTimeout(function(){document.getElementById("get").innerHTML=`
      <h1 class="content" style='margin-top:0'>Leia o título da página.</h1>;
      <iframe width="500" height="500" src="stick.gif"></iframe>
      `},5000);

      else setTimeout(function(){document.getElementById("get").innerHTML=`
      <h1 class="content" style='margin-top:0'>Leia o título da página.</h1>;
      <iframe width=${windowSize-20} height="500" src="stick.gif"></iframe>
      `},5000);

      setTimeout(function(){
        if (onRRpage) {
            document.body.style='background-image: url("rolled.gif"); background-size:auto';
            document.title="GETSTICKROLLED";
            document.getElementById("content").style=`color:white`;
         }
      },9500)

  }
}

var windowSize = window.innerWidth;

$(function() {
  $(window).scroll(update);
  update();
 });

////////////////Quiz///////////////////


function correctAnswers() {
  let correct = 0;

/////////////////////////////////////////////////////////////////////////////////////////////


if (document.getElementsByName("resp_1")[0].value=="2021-02" || document.getElementsByName("resp_4")[0].value.toLowerCase()=="fevereiro de 2021") {
  correct++;
  document.getElementsByName("resp_1")[0].style.color="green";
}
else {
  document.getElementById("respostaDaPrimeira").innerHTML="A resposta é: Fevereiro de 2021";
  document.getElementsByName("resp_1")[0].style.color="red";
}


///////////////////////////////////////////////////////////////////////////////////////////

if (document.getElementsByName("resp_2")[0].value==12) {
  correct++;
  document.getElementsByName("resp_2")[0].style.color="green";
}
else {
  document.getElementsByName("resp_2")[0].placeholder="12";
  document.getElementsByName("resp_2")[0].style.color="red";
}


////////////////////////////////////////////////////////////////////////////////////////////


var radios = document.getElementsByName('resp_3');

for (var w = 0, length = radios.length; w < length; w++) document.getElementById(`resp${w}`).style.color="red";

      document.getElementById('resp2').style.color="green";

for (var i = 0, length = radios.length; i < length; i++) {
  if (radios[i].checked) {
    
    if (i==2) correct++;

    break;
  }
}



///////////////////////////////////////////////////////////////////////////////////////////

  if (document.getElementsByName("resp_4")[0].value.toLowerCase()=="hu tao") {
      correct++;
      document.getElementsByName("resp_4")[0].style.color="green";
  }
  else {
      document.getElementsByName("resp_4")[0].placeholder="Hu Tao";
      document.getElementsByName("resp_4")[0].style.color="red";
  }

///////////////////////////////////////////////////////////////////////////////////////////


  if (correct==4) alert(`Parabéns! Você acertou todas as 4!`);
  else {
      if (correct==0) alert(`Você não conseguiu nenhuma questão... :(`);
      else {
        if (correct==1) alert(`Você acertou 1 questão...`);
        else alert(`Você acertou ${correct} questões!`);
      }
  }

////////////////////////////////////////////////////////////////////////////////////////////

}
