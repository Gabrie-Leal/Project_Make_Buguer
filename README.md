# 🍔 Montagem de Hambúrguer - Vue.js

## 📝 Sobre o Projeto
Este projeto foi desenvolvido como parte do meu aprendizado em **Front-End com Vue.js**, utilizando **JSON Server** para simular um banco de dados. A aplicação permite que os usuários montem um hambúrguer com ingredientes dinâmicos retirados de um arquivo JSON e enviem o pedido para uma página de pedidos, onde ele é registrado no JSON Server.

## 🛠️ Tecnologias Utilizadas
- **Vue.js** - Framework JavaScript para construção da interface.
- **JSON Server** - Simulação de um banco de dados local.
- **HTML5 e CSS3** - Estruturação e estilização da aplicação.
- **JavaScript (ES6+)** - Lógica da aplicação e integração com JSON Server.

## 📚 Funcionalidades
- Seleção dinâmica de ingredientes para montar um hambúrguer.
- Exibição dos ingredientes disponíveis a partir de um arquivo JSON.
- Envio do pedido para a página de pedidos.
- Registro dos pedidos no JSON Server.

## ⚡ Como Executar o Projeto
### 1. Clone o repositório:
```sh
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```
### 2. Instale as dependências:
```sh
npm install
```
### 3. Inicie o JSON Server:
```sh
npx json-server --watch db.json
```
### 4. Inicie o projeto Vue.js:
```sh
npm run serve
```

## 📚 Estrutura do Projeto
```
/
├── public/
├── src/
│   ├── components/
│   │   ├── BurgerBuilder.vue
│   │   ├── OrderPage.vue
│   ├── assets/
│   ├── views/
│   ├── App.vue
│   ├── main.js
├── db.json
├── package.json
├── README.md
```

## 🌟 Autor
Desenvolvido por **Gabriel Leal** – [LinkedIn](https://www.linkedin.com/in/gabriel-leal-526482231/).

---
💪 Feedbacks e contribuições são sempre bem-vindos!🚀

