import { MensajeriaModel } from "@domain/_connections/mongodb";
import { mongoToMensajeria } from "@domain/_helpers";

export const consultaPersonalizada = async (filtros: object) => {
    const listaModelMongo = await MensajeriaModel.find(filtros);
    return listaModelMongo.map(v => mongoToMensajeria(v));
}

export const obtenerListaPorIds = async (listaId: string[]) => {
    const filtros = {};
    const or = [];
    listaId.map(id => or.push({ _id: id }));
    filtros['$or'] = or;

    const listaModelMongo = await MensajeriaModel.find(filtros);
    return listaModelMongo.map(v => mongoToMensajeria(v));
}
