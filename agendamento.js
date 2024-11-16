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
