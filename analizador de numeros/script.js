var tab = document.getElementById("seltab");
var num = document.getElementById("txnum");
var res = document.getElementById("res");

function adicionar() {
   

    if (num.value.length == 0) {
        window.alert("Número vazio");
    } else {
        let item = document.createElement("option");
        item.text = `Valor ${num.value} adicionado`;
        tab.appendChild(item);
        res.innerHTML = ""
    }
 
    
}

function finalizar() {

    if (tab.childElementCount == 0) {
        window.alert("Lista de números vazia");
    } else {
        let total = tab.childElementCount;
        let soma = 0;
        let numMaior = 0;
        let numMenor = 0;
        let media = 0;
    
        for (let i=1; i < tab.childElementCount+1; i++) {
            
            let item = tab.childNodes[i].text
            item = item.replace("Valor", "").replace("adicionado", "")

            let num = Number(item);
    
            if (numMaior == 0 && numMenor == 0) {
                numMaior = num;
                numMenor = num;
            }
    
            if (num > numMaior){
                numMaior = num;
            } else if (num < numMenor){
                numMenor = num;
            }
    
            soma += num;
        }
    
        media = soma / tab.childElementCount
        
        res.innerHTML = 
        "<pre>"+
        "Total  : " + total + "<br>" +
        "Soma   : " + soma + "<br>" +
        "Maior  : " + numMaior + "<br>" +
        "Menor  : " + numMenor + "<br>" +
        "Media  : " + media + "<br>"+
        "</pre>"
    }
    
    


}