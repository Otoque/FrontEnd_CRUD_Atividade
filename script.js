const API = "https://backend-crud-atividade.onrender.com";

let modo = "listar";
let editId = null;

function mostrar(novoModo){
  modo = novoModo;
  document.getElementById("formBox").style.display =
    (modo === "criar" || modo === "editar") ? "block" : "none";

  if(modo === "criar"){
    limpar();
    document.getElementById("tituloForm").innerText = "Criar Usuário";
  }

  carregarUsuarios();
}

async function carregarUsuarios(){
  const resposta = await fetch(API);
  const usuarios = await resposta.json();

  const lista = document.getElementById("listaUsuarios");
  lista.innerHTML = "";

  usuarios.forEach(usuario => {
    lista.innerHTML += `
      <div class="card">
        <div>
          <strong>${usuario.nome}</strong>
          <p>${usuario.email}</p>
        </div>

        <div class="acoes">
          <button onclick="editar('${usuario._id}','${usuario.nome}','${usuario.email}')">Editar</button>
          ${modo === "deletar" ? `<button onclick="remover('${usuario._id}')">Excluir</button>` : ""}
        </div>
      </div>
    `;
  });
}

function editar(id,nome,email){
  editId = id;
  modo = "editar";

  document.getElementById("formBox").style.display = "block";
  document.getElementById("tituloForm").innerText = "Atualizar Usuário";

  document.getElementById("nome").value = nome;
  document.getElementById("email").value = email;
}

async function salvar(){
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;

  const usuario = { nome, email };

  if(modo === "editar"){
    await fetch(`${API}/${editId}`, {
      method:"PUT",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify(usuario)
    });

    mensagem("Usuário atualizado!");
  }else{
    await fetch(API, {
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify(usuario)
    });

    mensagem("Usuário criado!");
  }

  limpar();
  mostrar("listar");
}

async function remover(id){
  await fetch(`${API}/${id}`, { method:"DELETE" });
  mensagem("Usuário removido!");
  carregarUsuarios();
}

function limpar(){
  editId = null;
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
}

function mensagem(texto){
  document.getElementById("msg").innerText = texto;

  setTimeout(() => {
    document.getElementById("msg").innerText = "";
  }, 2000);
}

mostrar("listar");