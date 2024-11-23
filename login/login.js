function login_user(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;

  if (email === "jhonathanpegoral123@gmail.com" && senha === "123") {
    alert("Login efetuado");
    location.href = "/agendamento/agendamento.html"; // Redirecionar para a página de agendamento
  }
  if (email === "adm@gmail.com" && senha === "adm") {
    alert("Login efetuado");
    location.href = "/adm/home_adm.html"; // Redirecionar para a página de agendamento
  } else {
    alert("Email ou senha inválidos.");
  }
}
