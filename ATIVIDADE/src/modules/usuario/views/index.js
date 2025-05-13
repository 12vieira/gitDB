import UsuarioController from '../../usuario/controllers/index.js'
import input from 'prompt-sync';
const prompt = input();

class UsuarioView{
    static async criar(){
        const id_usuario = prompt("Digite o id do usuário: ");
        const nome = prompt("Digite o nome do usuário: ");
        const matricula = prompt("Digite a matrícula do usuário: ");
        const telefone = prompt("Digite o telefone do usuário: ");
        const usuario = await UsuarioController.criar(
            id_usuario,
            nome,
            matricula,
            telefone,
        );
        // console.table(usuario);
    }
    static async buscarPorMatricula() {
        const matricula = prompt("Digite a matricula do usuário: ");
        const usuario = await UsuarioController.buscarPorMatricula(matricula);
        console.table(usuario);
    }
    static async atualizar() {
        const id_usuario = prompt("Digite o nome do usuário: ");
        const nome = prompt("Digite o nome do usuário: ");
        const matricula = prompt("Digite a matrícula do usuário: ");
        const telefone = prompt("Digite o telefone do usuário: ");
        const usuario = await UsuarioController.atualizar(
            id_usuario,
            nome,
            matricula,
            telefone,
        );
        console.table(usuario);
    }
    static async excluirUsuario(){
        const matricula = prompt("Digite a matricula do usuário a ser excuído: ")
        await UsuarioController.excluirUsuario(matricula);
        console.log(`Usuário com matricula ${matricula} foi deletado.`);
    }
}

export default UsuarioView