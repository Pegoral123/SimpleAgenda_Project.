const consulta_marcada = [];

function marcarConsulta() {
  const contador = document.getElementById("local").value;
  const data = document.getElementById("data").value;
  const horario = document.getElementById("horario").value;

  // Verificar se todos os campos foram preenchidos
  if (!contador || !data || !horario) {
    alert("Por favor, preencha todos os campos antes de finalizar.");
    return;
  }

  // Verificar duplicidade
  let verificador = false;

  for (let i = 0; i < consulta_marcada.length; i++) {
    if (
      consulta_marcada[i][0] === contador &&
      consulta_marcada[i][1] === data &&
      consulta_marcada[i][2] === horario
    ) {
      verificador = true;
      break;
    }
  }

  if (verificador) {
    alert("Essa consulta já foi marcada.");
    return;
  }

  // Adicionar nova consulta ao array
  consulta_marcada.push([contador, data, horario]);

  // Exibir alerta de sucesso
  alert("Consulta marcada com sucesso!");

  // Inserir dados na tabela
  const tabelaBody = document.getElementById("tabelaBody");
  const novaLinha = document.createElement("tr");

  novaLinha.innerHTML = `
    <td>${contador}</td>
    <td>${data}</td>
    <td>${horario}</td>
  `;

  tabelaBody.appendChild(novaLinha);

  // Mostrar a seção da tabela
  const consultaTabela = document.getElementById("consultaTabela");
  consultaTabela.style.display = "block";

  // Limpar o formulário
  document.getElementById("agendamentoForm").reset();
}

//////

function agendarAtendimento(button, data, horario) {
  // Alterar o status do horário na tabela
  const statusCell = button.parentElement.previousElementSibling;
  if (statusCell.classList.contains("indisponivel")) {
    alert("Este horário já está agendado!");
    return;
  }

  statusCell.textContent = "Indisponível";
  statusCell.classList.remove("disponivel");
  statusCell.classList.add("indisponivel");

  // Desativar o botão
  button.disabled = true;

  // Exibir agendamento na lista de agendamentos
  const agendamentosSection = document.getElementById("agendamentos");
  const appointmentsList = document.getElementById("appointmentsList");

  const listItem = document.createElement("li");
  listItem.textContent = `Horário agendado: ${data} as ${horario}`;
  appointmentsList.appendChild(listItem);

  agendamentosSection.style.display = "block";

  // Mensagem de sucesso
  alert(`Agendamento realizado para ${horario}!`);
}
