import User from "./users";
class UserList {
    constructor() {
        this.users = [];
    }
    getAll() {
        return this.users;
    }
    getById(id) {
        return this.users.find((user) => user.id === id);
    }
    add(user) {
        this.users.push(user);
    }
    remove(id) {
        this.users = this.users.filter((user) => user.id !== id);
    }
    update(id, nome, dataNascimento, cpf, email, endereco, telefone, senha, confirmarSenha, necessidade) {
        const user = this.getById(id);
        if (user) {
            user.nome = nome;
            user.dataNascimento = dataNascimento;
            user.cpf = cpf;
            user.email = email;
            user.endereco = endereco;
            user.telefone = telefone;
            user.senha = senha;
            user.confirmarSenha = confirmarSenha;
            user.necessidade = necessidade;
        }
        return user;
    }
    calculateAge(date) {
        const today = new Date();
        const birthDate = new Date(date);
        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
}
const usersList = new UserList();
export default usersList;
