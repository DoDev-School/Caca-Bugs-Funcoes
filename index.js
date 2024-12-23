// CAÇA BUGS - FUNÇÕES

class Usuario {
    Nome
    Senha

    constructor(nome, senha) {
        this.Nome = nome
    }
}

Cadastrar(nome, senha, contador) {
    usuarios[contador] = new Usuario(nome, senha)
}

Login(){
    for (let i = 0; i < usuarios.length; i++) {
        if (nome == usuarios[i].nome && senha == usuarios[i].senha) {
            return true
        }

    }
    return false
}

Deletar(){
    for (let i = 0; i < usuarios.length; i++) {
        if (nome == usuarios[i].nome && senha == usuarios[i].senha) {
            usuarios[i] = undefined
            return true
        }
    }
    return false
}

let ListaUsuarios = []
let contadorUsuarios = 0
let continuar = true

while (continuar != true) {
    let opcao = prompt("Escolha a opção desejada: 1 - Cadastro, 2 - Login, 3 - Deletar cadastro")
    let nomeUsuario = prompt("insira o nome do usuário")
    let senhaUsuario = prompt("insira a senha do usuário")
    switch (opcao) {
        case 1:
            Cadastrar()
            alert("Usuário cadastrado")
            break;

        case 2:
            let login = Login()
            if (login) {
                alert("Usuário ou senha inválidos")
            } else {
                alert("Login concluído!")
            }
            break;
            
        case 3:
            let deletar = Deletar()
            if (deletar) {
                alert("Usuário ou senha inválidos")
            } else {
                alert("Usuário Deletado!")
            }
            break;

        default:
            alert("Opção inválida")
            break;
    }
}