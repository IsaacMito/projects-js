var body = document.getElementsByTagName("body")[0]

var hora = new Date().getHours();
        
if (hora > 6 & hora < 11) {

    body.style.backgroundImage = "url('img/manha.jpg')"
    console.log("manha")

} else if (hora > 11 & hora < 13) {

    body.style.backgroundImage = "url('img/meio-dia.jpg')"
    console.log("meio-dia")
} else if (hora > 12 & hora < 18) {

    body.style.backgroundImage = "url('img/tarde.webp')"
    console.log("tarde")

} else if (hora > 17 & hora < 24) {

    body.style.backgroundImage = "url('../img/noite.jpg')"
    console.log("noite")
}

document.write(`<h1>Agora são ${hora} horas</h1>`)