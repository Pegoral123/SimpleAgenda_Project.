function agendarAtendimento(button, data, horario) {
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

  // Desativa o botão
  button.disabled = true;

  // Adiciona o agendamento à lista
  const agendamentosSection = document.getElementById("agendamentos");
  const appointmentsList = document.getElementById("appointmentsList");

  const listItem = document.createElement("li");
  listItem.textContent = `Horário agendado: ${data} às ${horario}`;
  appointmentsList.appendChild(listItem);

  // Mostra a seção de agendamentos
  agendamentosSection.style.display = "block";

  // Mensagem de sucesso
  alert(`Agendamento realizado para ${data} às ${horario}!`);
}
