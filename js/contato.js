/*Selecionando os elementos a serem manipulados */
const formulario = document.querySelector("form");
const campoTelefone = document.querySelector("#telefone");
const campoCep = document.querySelector("#cep");
const campoEndereco = document.querySelector("#endereco");
const campoBairro = document.querySelector("#bairro");
const campoCidade = document.querySelector("#cidade");
const campoEstado = document.querySelector("#estado");
const botaoLocalizar = document.querySelector("#localizar-cep");
const mensagemStatus = document.querySelector("#status") //linha97

//ativação das mascaras usando jquery e jquery mask
//jquery$()   jquery.mask('000.000.00')
$(campoCep).mask("00000-000");
$(campoTelefone).mask("(00) 0000-0000");

//async colocado por causo do await usado apenas em funções assincronas
botaoLocalizar.addEventListener("click", async function(event){
    event.preventDefault();

    // ajax

    //pegar o num de cep
    let cep = campoCep.value;
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    console.log(url);
    /*Acessando via cep passando a url (usando funcçao fetch)*/
    //assincrono
    const resposta = await fetch(url);
    console.log(resposta);
    
    
    //Etapa 2: Pegar os dados da resposta como objeto JSON
    const dados = await resposta.json() 

    //Etapa 3
    if('erro' in dados){
        
        mensagemStatus.textContent = "Cep não encontrado";
        mensagemStatus.style.color ="red";
    }else{

        mensagemStatus.textContent = "Cep encontrado!"
        mensagemStatus.style.color= "green"

        //dados é objeto por isso dados.  (usar dot e não []array)
        //Colocando dados nos campos
        campoEndereco.value = dados.logradouro;
        campoBairro.value = dados.bairro;
        campoCidade.value = dados.localidade;
        campoEstado.value = dados.uf;
    }
    
    //Teste
})

// Programação com formspree com ajax
var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Formulário enviado!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! Houve um problema ao enviar"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)

