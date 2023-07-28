const botao = document.querySelector("nav h2") // linha 18 html
const linksMenu = document.querySelector(".menu")
const icone = document.querySelector(".icone")
//evento é uma string

botao.addEventListener('click',function(event){
    event.preventDefault();
    linksMenu.classList.toggle("aberto")

    /*logica pra alternancia do texto icone
    Se a clasee "aberto" estiver aplicada ao linksMenu, então mude o teto/icone para "fechar". senao, continue mostrando o texto /icone "menu"*/
    if(linksMenu.classList.contains("aberto")){
        icone.innerHTML="Fechar &times;";
    }
    else{
        icone.innerHTML="Menu &equiv;";
    }
});