
function gerar() {

    let numero = Number(document.getElementById("txnum").value);
    let tab = document.getElementById("seltab");
    
    removeAllChild(tab)

    for(let i = 1; i < 11; i++) {
        let item = document.createElement("option");
        item.text = `${i} x ${numero} = ${i*numero}`;
        tab.appendChild(item);
    }
}

function removeAllChild(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}