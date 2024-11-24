export function EsconderElementoHtmlPorid(el) {
    var display = document.getElementById(el).style.display;
    if(display == "none")
        document.getElementById(el).style.display = 'block';
    else
        document.getElementById(el).style.display = 'none';
}

export function GetUsernameUsuarioLogado(){
    // Usando fetch para ler um arquivo JSON
    fetch('../data/sessionLogin.json').then(response => {
        if (!response.ok) {
            throw new Error('Erro ao carregar o arquivo JSON');
        }
        return response.json();
   })

}
export function SalvaNovoUsuarioEmJson(NomeUsuario, email, senha,telefone){
    var Users = localStorage.getItem("users")
    
    var usuarios  = JSON.parse(Users)
    usuarios.push({"email":email,"password":senha,"nomeCompleto":NomeUsuario,"telefone":telefone})
    localStorage.setItem("users",JSON.stringify(usuarios));
    var Users = localStorage.getItem("users")
    
    var usuarios  = JSON.parse(Users)

}
export function GetJsonArquivosDeUsuarios(){
    // Usando fetch para ler um arquivo JSON

    return fetch('../data/usersLogin.json').then(response => {   
        if (!response.ok) {
            throw new Error('Erro ao carregar o arquivo JSON');
        }

        return response.json();

   })

}

export function VerificarSeUsuarioExiste(email){
    //Simula comunicação com backend
    var usuarioExiste = false
    var usuarios  = JSON.parse(localStorage.getItem("users"))
    console.log(usuarios)
    usuarios.forEach(element => {
        
       if(element["email"] ==email){
              
               usuarioExiste = true;
        }
    });
    return usuarioExiste;

    
}
export function VerificarSeSenhaEstaCorreta(email,Senha){
    //Simula comunicação com backend
    var CredenciaisCorretas = false
    var usuarios  = JSON.parse(localStorage.getItem("users"))
    usuarios.forEach(element => {
        
       if(element["email"]== email && element["password"] ==Senha){
              
            CredenciaisCorretas = true;
        }
    });

    return CredenciaisCorretas;

}
export function GetNomeDeUsuarioBaseadoEmEmail(email){
    //Simula comunicação com backend
    var nomeDoUsuario  = "";
    var usuarios  = JSON.parse(localStorage.getItem("users"))
    usuarios.forEach(element => {
        
       if(element["email"]== email){
              
            nomeDoUsuario = element["nomeCompleto"];
        }
    });

    return nomeDoUsuario;

}
export function GetUsuarioLogado(){
    //Simula comunicação com backend

   
  

    return  localStorage.getItem("current_user_session")

}