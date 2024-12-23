// CAÇA BUGS - FUNÇÕES

class Usuario {
    Nome
    Senha

    constructor(nome, senha) {
        this.Nome = nome
        this.Senha = senha
    }
}

function Cadastrar(nome, senha, contador, usuarios) {
    usuarios[contador] = new Usuario(nome, senha)
    contador++
}

function Login(nome, senha, usuarios) {
    for (let i = 0; i < usuarios.length; i++) {
        if (nome == usuarios[i].Nome && senha == usuarios[i].Senha) {
            return true
        }

    }
    return false
}

function Deletar(nome, senha, usuarios) {
    for (let i = 0; i < usuarios.length; i++) {
        if (nome == usuarios[i].Nome && senha == usuarios[i].Senha) {
            usuarios[i] = undefined
            return true
        }
    }
    return false
}

let ListaUsuarios = []
let contadorUsuarios = 0
let continuar = true

while (continuar) {
    let opcao = Number(prompt("Escolha a opção desejada: 1 - Cadastro, 2 - Login, 3 - Deletar cadastro"))
    let nomeUsuario = prompt("insira o nome do usuário")
    let senhaUsuario = prompt("insira a senha do usuário")
    switch (opcao) {
        case 1:
            Cadastrar(nomeUsuario, senhaUsuario, contadorUsuarios, ListaUsuarios)
            alert("Usuário cadastrado")
            break;

        case 2:
            let login = Login(nomeUsuario, senhaUsuario, ListaUsuarios)
            if (!login) {
                alert("Usuário ou senha inválidos")
            } else {
                alert("Login concluído!")
            }
            break;

        case 3:
            let deletar = Deletar(nomeUsuario, senhaUsuario, ListaUsuarios)
            if (!deletar) {
                alert("Usuário ou senha inválidos")
            } else {
                alert("Usuário Deletado!")
            }
            break;

        default:
            alert("Opção inválida")
            break;
    }

    let continuarString = prompt("Deseja continuar? s/n")
    if (continuarString != "s") {
        continuar = false
    }
}