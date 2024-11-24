export function mostrarAgendamentosRealizadosNaTela(){
    // Adiciona o agendamento à lista
    
    var horariosMarcadosPeloUsuario = getHorariosMarcadosPorUsuario(GetUsuarioLogado());
    const agendamentosSection = document.getElementById("agendamentos");
    const appointmentsList = document.getElementById("appointmentsList");
    console.log(horariosMarcadosPeloUsuario)
    if(horariosMarcadosPeloUsuario.length>0){
      
      horariosMarcadosPeloUsuario.forEach(element => {
        const listItem = document.createElement("li");
        listItem.textContent = `Horário agendado: ${element["data"]} às ${element["hora"]}`;
        appointmentsList.appendChild(listItem);
      });
      agendamentosSection.style.display = "block";
    }
   
}