async function buscarUsuario() {
  const email = document.getElementById("email").value;
  const lista = document.getElementById("resultadoUsuarios");

  lista.innerHTML = "";

  const resposta = await fetch(
    `https://fitnesstracker-7v0x.onrender.com/usuarios/buscar?email=${encodeURIComponent(email)}`,
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

    item.innerHTML = ` Nome: ${usuario.nome}<br /> - Email: ${usuario.email}<br /> - Idade: ${usuario.idade}<br /> - Peso: ${usuario.peso}kg<br /> - Altura: ${usuario.altura}m<br /> - Sexo: ${usuario.sexo}<br /> - Nível de Atividade: ${usuario.nivel_de_atividade}<br /> - TMB: ${usuario.tmb}<br /> - Gasto: ${usuario.gasto}<br /> - IMC: ${usuario.imc}<br /> - Objetivo: ${usuario.obj}<br /> - Hidratação: ${usuario.hidratacao}`;

    lista.appendChild(item);
  });
}
