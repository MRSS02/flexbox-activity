let onRRpage = false

function enviar(x) {
    alert(`Sua ${x} foi enviada!`)
}


function change(tela) {

    onRRpage = false
    document.title=tela;
    document.body.style=`background-image: linear-gradient(#a95aec, #40e0d0, #ffb6c1); background-size:cover;`

    function branco(botao) {
        botao.className = `button`;
    }

    [...document.getElementsByName("button")].forEach(branco);


    document.getElementById(tela).className += ` selected`

    switch(tela) {

        case 'MAIN':

            document.getElementById("pag").innerHTML=
            `
            <h1 class="content">Bem vindos!!!</h1>

            <h2 class="content">Esta página tem botões que vão levar para diferentes interatividades. <br> Explore todas as opções!</h2>
            `;

        break;



        case 'QUIZ':

            document.getElementById("pag").innerHTML=
            `
            <h1 class="content">Responda o que você acredita estar correto.</h1>

            <div class="perguntas">

            <h2>Qual a data de lançamento de Persona 5 Scramble?</h2>

            <input type="month">

            </div>

            <div class="perguntas">

            <h2>Quantos personagens existem no Super Smash Bros. de Nintendo 64 no total?</h2>

            <input type="number">

            </div>

            <div class="perguntas">

            <h2>Quem matou L no Death Note?</h2>

            <input type="radio" name="brr">Ryuk</input>
            <input type="radio" name="brr">Light</input>
            <input type="radio" name="brr">Rem</input>
            <input type="radio" name="brr">Misa</input>


            </div>

            <div class="perguntas">

            <h2>Qual o próximo personagem 5 star para Genshin Impact?</h2>

            <input type="text">

            </div>


            <button onclick="enviar('resposta')" style="margin-top:40px">Enviar</button>


            `;

        break;



        case 'UPLOAD':

            document.getElementById("pag").innerHTML=
            `
            <h1 class="content">Envie uma atividade para maior análise.</h1>

            <input type="file">

            <button onclick="enviar('atividade')"> Enviar </button>

            `;

        break;



        case 'CONFESSION':

            document.getElementById("pag").innerHTML=
            `
            <h1 class="content">Confesse algo sobre si mesmo em 2020.</h1>

                <input type="text" size=150px>

                <button onclick="enviar('confissão')"> Enviar </button>

            `;

        break;



        case 'GETSTICKBUGGED':
            onRRpage = true
            document.getElementById("pag").innerHTML=
            `

            <div id="get">
            <h1 class="content" style='margin-top:30vh'>Leia o título da página.</h1>


            </div>

            `;

            setTimeout(function(){document.getElementById("get").innerHTML=`
            <h1 class="content" style='margin-top:0'>Leia o título da página.</h1>;
            <iframe width="500" height="500" src="stick.gif"></iframe>
            `},5000)

            setTimeout(function(){
                if (onRRpage) {
                  document.body.style='background-image: url("rolled.gif"); background-size:auto';
                  document.title="GETSTICKROLLED";
                  document.getElementsByClassName("content")[0].style=`color:white`;
                }
            },9500)



        break;
    }

}
