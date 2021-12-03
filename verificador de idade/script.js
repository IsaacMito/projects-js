var inpIdade = document.getElementById("txtano");
var radSexo = document.getElementsByName("radsex");
var img = document.getElementsByTagName("img")[0];
var pMensage = document.getElementById("mensage");

function verificar() {
    
    if (inpIdade.value == "" || (!radSexo[0].checked && !radSexo[1].checked)) {

        pMensage.innerText = "Preencha todos os campos acima!";
        pMensage.style.color = "red";

    } else {
        
        const anoAtual = new Date().getFullYear()
        let idade;
        let sexo;

        if (inpIdade.value < 0) {
            inpIdade.value = anoAtual;
        }

        if (radSexo[0].checked) {
            sexo = "m";
        } else {
            sexo = "f";
        }

        idade = anoAtual - inpIdade.value;

        if (idade <= 0){

            inpIdade.value = anoAtual;
            idade = 0;
            img.setAttribute("src", `img/foto-zero.png`);

        } else if (idade < 10){

            img.setAttribute("src", `img/foto-bebe-${sexo}.png`);

        } else if (idade >= 10 && idade <= 14) {

            img.setAttribute("src", `img/foto-pre-jovem-${sexo}.png`);

        } else if (idade >= 15 && idade <= 19) {

            img.setAttribute("src", `img/foto-jovem-15-${sexo}.png`);

        } else if (idade >= 20 && idade <= 29) {

            img.setAttribute("src", `img/foto-jovem-20-${sexo}.png`);

        } else if (idade >= 30 && idade <= 60) {

            img.setAttribute("src", `img/foto-adulto-${sexo}.png`);

        } else if (idade > 60){

            img.setAttribute("src", `img/foto-idoso-${sexo}.png`);
        }

        pMensage.style.color = "black";
        pMensage.innerText = `Você tem ${idade} anos`;
    }
}


