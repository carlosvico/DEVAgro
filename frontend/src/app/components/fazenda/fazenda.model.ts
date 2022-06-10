export interface Fazenda {
    id?: number
    nome: string
    endereco: string
    estoque: number
    ultimaColheita: string
    grao: {
        id: number
    },
    empresa: {
        id: number
    }
}
           
