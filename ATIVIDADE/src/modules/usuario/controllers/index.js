import UsuarioModel from "../../usuario/models/index.js";

class UsuarioController{
    static async criar(id_usuario, nome, matricula, telefone){
        try {
            if (!id_usuario || !nome || !matricula || !telefone) {
                return console.error('Todos os campos devem ser preenchidos!');
            }
            const usuario = await UsuarioModel.criar(id_usuario, nome, matricula, telefone);
            console.log('Usuario criado com sucesso!');
            return usuario;
        } catch (error) {
            console.error('Erro ao criar usuario:', error.message);
        }
    }
    static async buscarPorMatricula(matricula){
        try {
            const usuarios = await UsuarioModel.buscarPorMatricula(matricula);
            if (usuarios.length === 0) {
                return console.log('Nenhum usuario encontrado!');
            }
            console.log('Usuário: ');
            return usuarios;
        } catch (error) {
            console.error('Erro ao buscar usuário:', error.message);
        }
    }
    static async atualizar(id_usuario, nome, matricula, telefone){
        try {
            if (!id_usuario || !nome || !matricula || !telefone) {
                return console.error('Todos os campos devem ser preenchidos!');
            }
            const usuario = await UsuarioModel.atualizar(id_usuario, nome, matricula, telefone);
            if (usuario.length === 0) {
                return console.error('Usuário não encontrado!');
            }
            console.log('Usuário atualizado com sucesso!');
            return usuario;
        } catch (error) {
            console.error('Erro ao atualizar usuário:', error.message);
        }
    }
    static async exluirUsuario(matricula){
        try {
            const usuario = await UsuarioModel.buscarPorMatricula(matricula);
            if (usuario.length === 0) {
                return console.error('Usuário não encontrado!');
            }
            await UsuarioModel.excluirUsuario(matricula);
            console.log('Usuário excluído com sucesso!');
        } catch (error) {
            console.error('Erro ao excluir o usuário:', error.message);
        }
    }
}

export default UsuarioController