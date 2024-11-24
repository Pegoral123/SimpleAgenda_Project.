import { getHorariosMarcadosPorUsuario, usuarioMarcarHorarioComoAgendadoIndisponivel } from "../../js/horarios.js";
import { GetUsuarioLogado } from "../../js/User.js";

export function agendarAtendimento(button, data, horario) {
  // Localiza a célula de status e atualiza para indisponível
  const statusCell = button.parentElement.previousElementSibling;

  if (statusCell.classList.contains("indisponivel")) {
    alert("Este horário já está agendado!");
    return;
  }

  // Atualiza o status para 'Indisponível'
  statusCell.textContent = "Indisponível";
  statusCell.classList.remove("disponivel");
  statusCell.classList.add("indisponivel");
  
 

  usuarioMarcarHorarioComoAgendadoIndisponivel(data.concat(horario))
  // Desativa o botão
  button.disabled = true;
  // Mensagem de sucesso
  alert(`Agendamento realizado para ${data} às ${horario}!`);
  window.location.replace("./agendamento.html");
}
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