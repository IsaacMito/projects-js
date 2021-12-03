var txtano = document.getElementsByName("txtano");
var pRes = document.getElementById("res");

function contar() {

    let inicio = Number(txtano[0].value);
    let fim = Number(txtano[1].value);
    let passo = Number(txtano[2].value);

    let resultado = "";

    for(let i = inicio; i < fim; i += passo){
        resultado += i +"👉"

        if (i == (fim-1)) {
            resultado += "🏁"
        }
    }

    console.log(resultado)
    pRes.innerText = resultado
}