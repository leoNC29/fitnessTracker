function calculadora() {
  console.log("Calculando...");
  let idade, peso, altura, sexo;
  idade = Number(document.getElementById("idade").value);
  peso = Number(document.getElementById("peso").value);
  altura = Number(document.getElementById("altura").value);
  sexo = document.getElementById("sexo").value;
  let nivelAtividade = document.getElementById("atividade").value;

  if (altura > 3) {
    altura /= 100;
  }
  let alturaCm = altura * 100;

  if (!idade || !peso || !altura) {
    document.getElementById("resultado").innerHTML =
      "Por favor, preencha todos os campos.";
    return;
  }

  let tmb = calcularTmb(peso, alturaCm, idade, sexo);
  let get = calcularGet(tmb, nivelAtividade);
  calcularIMC(peso, altura);
  objetivo(get);
  alertaHidratacao(peso, nivelAtividade);
}

function calcularTmb(peso, alturaCm, idade, sexo) {
  let tmb;
  if (sexo === "masculino") {
    tmb = 10 * peso + 6.25 * alturaCm - 5 * idade + 5;
  } else {
    tmb = 10 * peso + 6.25 * alturaCm - 5 * idade - 161;
  }
  document.getElementById("resultado").innerHTML = `
Sua Taxa Metabólica Basal é: ${tmb.toFixed(0)} calorias por dia.
`;
  return tmb;
}

function calcularGet(tmb, nivelAtividade) {
  switch (nivelAtividade) {
    case "sedentario":
      tmb *= 1.2;
      break;
    case "levemente_ativo":
      tmb *= 1.375;
      break;
    case "moderadamente_ativo":
      tmb *= 1.55;
      break;
    case "muito_ativo":
      tmb *= 1.725;
      break;
  }
  let get = tmb;
  document.getElementById("get").innerHTML = `
Seu Gasto Calórico Diário é: ${tmb.toFixed(0)} calorias por dia.
`;
  return get;
}

function calcularIMC(peso, altura) {
  let imc = peso / (altura * altura);
  if (imc < 18.5) {
    document.getElementById("imc").innerHTML = `
Seu IMC é: ${imc.toFixed(2)}. Você está abaixo do peso.
`;
  } else if (imc >= 18.5 && imc < 24.9) {
    document.getElementById("imc").innerHTML = `
Seu IMC é: ${imc.toFixed(2)}. Você está com peso normal.
`;
  } else if (imc >= 25 && imc < 29.9) {
    document.getElementById("imc").innerHTML = `
Seu IMC é: ${imc.toFixed(2)}. Você está com sobrepeso.
`;
  } else if (imc >= 30 && imc < 39.9) {
    document.getElementById("imc").innerHTML = `
Seu IMC é: ${imc.toFixed(2)}. Você está com obesidade.
`;
  } else if (imc > 40) {
    document.getElementById("imc").innerHTML = `
Seu IMC é: ${imc.toFixed(2)}. Você está com obesidade grave.
`;
  }
  return imc;
}

function objetivo(get) {
  let objetivo = document.getElementById("objetivo").value;
  if (objetivo === "emagrecer") {
    document.getElementById("objetivo_Peso").innerHTML =
      `Para emagrecer de forma saudável, você deve consumir de 300 a 500 calorias a menos do seu gasto calórico diário, por volta de ${get.toFixed(0) - 300} a ${get.toFixed(0) - 500} calorias por dia.`;
  } else if (objetivo === "manutenção") {
    document.getElementById("objetivo_Peso").innerHTML =
      `Para manter o peso, você deve consumir aproximadamente a mesma quantidade de calorias que gasta diariamente.`;
  } else if (objetivo === "ganhar_peso") {
    document.getElementById("objetivo_Peso").innerHTML =
      `Para ganhar peso de forma saudável, você deve consumir mais calorias do que queima, consumindo de 300 a 500 calorias a mais do seu gasto calórico diário, por volta de ${Number(get.toFixed(0)) + 300} a ${Number(get.toFixed(0)) + 500} calorias por dia.`;
  }
}

function alertaHidratacao(peso, nivelAtividade) {
  let hidratacao = peso * 35;
  if (
    nivelAtividade === "moderadamente_ativo" ||
    nivelAtividade === "muito_ativo"
  ) {
    hidratacao = peso * 40;
  }
  document.getElementById("hidratação").innerHTML = `
Para manter uma boa hidratação, você deve consumir  ${hidratacao} ml de água por dia.
`;
}
