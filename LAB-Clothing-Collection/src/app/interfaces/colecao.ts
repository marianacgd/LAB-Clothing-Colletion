import { IModelo } from "./modelo";


export interface IColecao {
    id: number;
    colecao: string;
    responsavel: string;
    estacao: string;
    ano: number;
    modelos: IModelo[];
}
