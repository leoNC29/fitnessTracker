async function buscarUsuario() {
  const email = document.getElementById("email").value;
  const lista = document.getElementById("resultadoUsuarios");

  lista.innerHTML = "";

  const resposta = await fetch(
    `http://localhost:3000/usuarios/buscar?email=${encodeURIComponent(email)}`,
  );
  console.log("Status da resposta:", resposta.status);

  const dados = await resposta.json();

  console.log("Dados recebidos:", dados);

  if (!dados.existe) {
    lista.innerHTML = "<li>Email nao corresponde a nenhum usuario</li>";
    return;
  }

  dados.usuario.forEach((usuario) => {
    const item = document.createElement("li");

    item.textContent = `${usuario.nome} - ${usuario.email} - ${usuario.idade} - ${usuario.peso}kg - ${usuario.altura}m - ${usuario.sexo} - ${usuario.nivel_de_atividade} - TMB: ${usuario.tmb} - Gasto: ${usuario.gasto} - IMC: ${usuario.imc} - Objetivo: ${usuario.obj} - Hidratação: ${usuario.hidratacao}`;
    lista.appendChild(item);
  });
}
