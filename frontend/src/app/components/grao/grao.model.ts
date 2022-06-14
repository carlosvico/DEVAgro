export interface Grao {
    id?: number
    nome: string    
    previsaoColheita: Date
    informacoesAdicionais: string
    fazenda: {
        id: number
    }
}
    