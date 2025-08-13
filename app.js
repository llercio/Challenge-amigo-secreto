let nomes = [];

function mudarTextoDaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function adicionarNomes() {
  let campoNome = document.getElementById("amigo").value.trim();

  if (campoNome === "") {
    alert("Por favor, insira um nome.");
  } else {
    nomes.push(campoNome);
    document.getElementById("amigo").value = "";
    console.log(nomes);
    adicionarLista();
  }
}

function adicionarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  for (let i = 0; i < nomes.length; i++) {
    let novoItem = `<li>${nomes[i]}</li>`;
    lista.innerHTML += novoItem;
  }
}
