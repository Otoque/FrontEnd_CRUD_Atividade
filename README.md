# Front-end CRUD de Usuários

## 📌 O que é este projeto?

Este projeto é a **parte visual** do sistema, ou seja, a tela que o usuário vê e utiliza para interagir com o cadastro de usuários.

Ele se conecta com uma API (Back-end) para enviar e receber informações do banco de dados.

Com essa interface, é possível:

- Criar usuários  
- Visualizar usuários cadastrados  
- Atualizar informações  
- Excluir usuários  

---

## 🎨 Tecnologias utilizadas

- **HTML** → estrutura da página  
- **CSS** → estilo e aparência visual  
- **JavaScript** → funcionalidades e interações  
- **Fetch API** → comunicação com o back-end  
- **PWA** → permite instalar como aplicativo no celular ou PC  

---

## ⚙️ O que este sistema faz?

- ✅ Criar usuário  
- ✅ Listar usuários  
- ✅ Atualizar usuário  
- ✅ Excluir usuário  
- ✅ Instalar como App  

---

## 📂 Estrutura do projeto

```text
index.html         → página principal
style.css          → estilos visuais
script.js          → lógica e integração com API
manifest.json      → configurações do PWA
service-worker.js  → cache e modo offline
icons/             → ícones do aplicativo
```

---

## ▶️ Como rodar o projeto

### 1. Baixar ou clonar o projeto

Tenha os arquivos na sua máquina.

### 2. Abrir no navegador

Abra o arquivo:

```text
index.html
```

Ou use a extensão **Live Server** no VS Code.

### 3. Verificar API

O back-end precisa estar rodando em:

```text
http://localhost:3000
```

No JavaScript, a URL da API é:

```javascript
const API = "http://localhost:3000/usuarios";
```

---

## 🌐 Funcionalidades da interface

| Botão | Função |
|---|---|
| Listar | Mostrar usuários |
| Criar | Cadastrar novo usuário |
| Editar | Alterar dados |
| Excluir | Remover usuário |

---

## 📱 PWA (Aplicativo)

Este projeto pode ser instalado como app no celular ou computador.

### Vantagens:

- Ícone na área de trabalho  
- Abre em tela cheia  
- Cache offline básico  
- Experiência parecida com app nativo  

---

## 🚀 Possível uso real

Este front-end pode ser adaptado para:

- Cadastro de clientes  
- Sistema escolar  
- Loja virtual  
- Agenda de contatos  
- Painel administrativo  

---

## 👨‍💻 Autor

Projeto desenvolvido por **Nicolas Tavares** para estudos, prática e portfólio.
