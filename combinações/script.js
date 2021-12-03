var tab = document.getElementById("seltab")
var txPalavra = document.getElementById("txpalavra")

function calcular() {

    removeAllChild(tab)

    let palavra = txPalavra.value
    let length = palavra.length
    
    if (length == 0) {
        window.alert("Número vazio")
    } else {
        
        let fatorial = getFatorial(length)
        
        for (let a = 0; a < fatorial; a++) {
            let texto = ""
            var num = 0

            for (let b = 0; b < length; b++) {

                for(let c = 0; c < length; c++) {
                    texto += palavra[num]
                }
            }

            let item = document.createElement("option")
            item.text = texto
            tab.appendChild(item)
        }
    }
}

function getFatorial(length) {

    let fatorial = 1
    while(length != 0) {
        fatorial *= length--
    }
    return fatorial
}

function removeAllChild(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}