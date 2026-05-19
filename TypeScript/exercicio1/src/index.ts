// 1. Criando a estrutura do Usuário com Interface
interface Usuario{
    id: number;
    nome: string;
    email: string;
    isAdmin: boolean;
}

//criar as funções tipadas
function renderizarPerfil(usuario: Usuario): void{
    if(usuario.isAdmin){
        console.log(" Status: Administrador");
        console.log("Email: " + usuario.email);
    } else{
        console.log("Status: Usuário Comum");
    }
}

// Base de Usuários
const admin: Usuario = {
  id: 1,
  nome: "Carlos Silva",
  email: "carlos.admin@empresa.com",
  isAdmin: true
};

const cliente: Usuario = {
  id: 2,
  nome: "Ana Souza",
  email: "ana.souza@gmail.com",
  isAdmin: false
};

renderizarPerfil(admin);
renderizarPerfil(cliente);