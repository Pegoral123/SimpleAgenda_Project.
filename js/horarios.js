import { GetUsuarioLogado } from "./User.js";

export function salvarNovoHorarioDisponivel(chavePrimaria,data,hora){
    var horariosDisponiveis = localStorage.getItem("horariosDisponiveis")
    
    var horariosDisponiveisJson  = JSON.parse(horariosDisponiveis)

    
    horariosDisponiveisJson.push({"pk":chavePrimaria,"data":data,"hora":hora,"disponibilidade":'Disponível',"usuarioComEsseHorario":'',"statusAdm":'Livre'})
    localStorage.setItem("horariosDisponiveis",JSON.stringify(horariosDisponiveisJson));

}
export function verificarSeHorarioJaExiste(chavePrimaria){
    //Simula comunicação com backend
    var horarioExiste = false
    var horariosExistentes  = JSON.parse(localStorage.getItem("horariosDisponiveis"))

    horariosExistentes.forEach(element => {
        
       if(element["pk"] ==chavePrimaria){
              
            horarioExiste = true;
        }
    });
    return horarioExiste;

    
}

export function usuarioMarcarHorarioComoAgendadoIndisponivel(chavePrimaria){
    //Simula comunicação com backend
    var horarioExiste = false
    var horariosExistentes  = JSON.parse(localStorage.getItem("horariosDisponiveis"))

    horariosExistentes.forEach(element => {
        
       if(element["pk"] ==chavePrimaria && element["disponibilidade"] =='Disponível' ){
            element["disponibilidade"]="Indisponível"
            element["usuarioComEsseHorario"] =GetUsuarioLogado()
            element["statusAdm"] ="Agendado"

        }
    });
    console.log(horariosExistentes)
    localStorage.setItem("horariosDisponiveis",JSON.stringify(horariosExistentes));
    
}

export function admMarcarHorarioAgendadoComoConcluido(chavePrimaria){
    //Simula comunicação com backend
    var horarioExiste = false
    var horariosExistentes  = JSON.parse(localStorage.getItem("horariosDisponiveis"))

    horariosExistentes.forEach(element => {
        
       if(element["pk"] ==chavePrimaria ){
            element["statusAdm"] ="Concluído"

        }
    });
    console.log(horariosExistentes)
    localStorage.setItem("horariosDisponiveis",JSON.stringify(horariosExistentes));
    window.location.replace("./home_adm.html");
    
}
export function getHorariosMarcadosPorUsuario(pkUsuario){
    //Simula comunicação com backend
    var horarioExiste = false
    var horariosExistentes  = JSON.parse(localStorage.getItem("horariosDisponiveis"))
    var horariosMarcadosPeloUsuario = []
    horariosExistentes.forEach(element => {
        
       if(element["usuarioComEsseHorario"] ==pkUsuario  ){
        horariosMarcadosPeloUsuario.push(element)

        }
    });

    return  horariosMarcadosPeloUsuario;
    
}
export function deletarHorarioBaseadoEmPk(pkHorario){
    //Simula comunicação com backend
    var horarioExiste = false
    var horariosExistentesSemOHorarioApagado = [];
    var horariosExistentes  = JSON.parse(localStorage.getItem("horariosDisponiveis"))
    var horariosMarcadosPeloUsuario = []
    horariosExistentes.forEach(element => {
        
       if(element["pk"] !=pkHorario  ){
            horariosExistentesSemOHorarioApagado.push(element)

       }
    });
    localStorage.setItem("horariosDisponiveis",JSON.stringify(horariosExistentesSemOHorarioApagado));
    window.location.replace("./home_adm.html");
    
}


