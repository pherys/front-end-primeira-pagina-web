document.getElementById("botaoEnviar").addEventListener("click", validaFormulario )

function validaFormulario(){
  //codigo para validar o formulario
    if(document.getElementById("nome").value != " " 
       && document.getElementById("email").value != " "){
       alert("Prontinho! Você receberá as novidades por email.")
     }else{
      alert("Por favor, preencha os campos nome e email!")
   }
}
