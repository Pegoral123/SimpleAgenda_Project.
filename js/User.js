function EsconderElementoHtmlPorid(el) {
    var display = document.getElementById(el).style.display;
    if(display == "none")
        document.getElementById(el).style.display = 'block';
    else
        document.getElementById(el).style.display = 'none';
}

function GetUsernameUsuarioLogado(){
    // Usando fetch para ler um arquivo JSON
    fetch('./data/sessionLogin.json').then(response => {
        if (!response.ok) {
            throw new Error('Erro ao carregar o arquivo JSON');
        }
        return response.json();
   })

}
function GetJsonArquivosDeUsuarios(){
    // Usando fetch para ler um arquivo JSON
    fetch('./data/usersLogin.json').then(response => {
        if (!response.ok) {
            throw new Error('Erro ao carregar o arquivo JSON');
        }
        return response.json();
   })

}
function VerificarSeUsuarioExiste(Username){
    //Simula comunicação com backend
    var UsuariosCadastrados = GetJsonArquivosDeUsuarios()
    UsuariosCadastrados.forEach(Usuarios => {
        Usuarios.forEach(element => {
            if(element["username"] ==Username){
                return true;
                
            }
        });
    });
    return false;
}
function VerificarSeSenhaEstaCorreta(Username,Senha){
    //Simula comunicação com backend
    var UsuariosCadastrados = GetJsonArquivosDeUsuarios()
    UsuariosCadastrados.forEach(Usuarios => {
        Usuarios.forEach(element => {
            if(element="username"==Username && element["password"] ==Senha ){
                return true;
                
            }
        });
    });
    return false;
}