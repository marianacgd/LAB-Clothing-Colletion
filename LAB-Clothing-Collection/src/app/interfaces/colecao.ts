import { IModelo } from "./modelo";


export interface IColecao {
    id: string;
    nomeColecao: string;
    responsavel: string;
    estacao: string;
    ano: number;
    modelo: IModelo;
    orcamento: number;
    marca: string;
}
