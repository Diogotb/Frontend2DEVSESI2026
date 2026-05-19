"use strict";
//criar as funções tipadas
function renderizarPerfil(usuario) {
    if (usuario.isAdmin) {
        console.log(" Status: Administrador");
        console.log("Email: " + usuario.email);
    }
    else {
        console.log("Status: Usuário Comum");
    }
}
// Base de Usuários
const admin = {
    id: 1,
    nome: "Carlos Silva",
    email: "carlos.admin@empresa.com",
    isAdmin: true
};
const cliente = {
    id: 2,
    nome: "Ana Souza",
    email: "ana.souza@gmail.com",
    isAdmin: false
};
renderizarPerfil(admin);
renderizarPerfil(cliente);
