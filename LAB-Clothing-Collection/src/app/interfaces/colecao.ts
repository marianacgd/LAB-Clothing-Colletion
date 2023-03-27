import { IModelo } from "./modelo";


export interface IColecao {
    id: number;
    nomeColecao: string;
    responsavel: string;
    estacao: string;
    ano: number;
    modelos: IModelo[];
    orcamento: number;
    marca: string;
}
