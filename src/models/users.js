export default class User{
    constructor(nome,dataNascimento,cpf,email,endereco,telefone,senha,confirmarSenha,necessidade){
        this.id = this.generateId();
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.cpf = cpf;
        this.email = email;
        this.endereco = endereco;
        this.telefone = telefone;
        this.senha = senha;
        this.confirmarSenha = confirmarSenha;
        this.necessidade = necessidade;
    }
    generateId(){
        return Math.floor(Math.random() * 100);
    }
}