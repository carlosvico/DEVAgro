export interface Funcionario {
    id?: number
    nome: string
    sobrenome: number
    cpf: string
    endereco: string
    telefone: string
    sexo: string
    dataNascimento: string
    dataAdmissao: string
    empresa: {
        id: number
    }
}
