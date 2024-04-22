import { MensajeriaPackModel } from "@domain/_connections/mongodb";
import { mongoToMensajeriaPack } from "@domain/_helpers";

export const consultaPersonalizada = async (filtros: object) => {
    const listaModelMongo = await MensajeriaPackModel.find(filtros);
    return listaModelMongo.map(v => mongoToMensajeriaPack(v));
}

export const obtenerListaPorIds = async (listaId: string[]) => {
    const filtros = {};
    const or = [];
    listaId.map(id => or.push({ _id: id }));
    filtros['$or'] = or;

    const listaModelMongo = await MensajeriaPackModel.find(filtros);
    return listaModelMongo.map(v => mongoToMensajeriaPack(v));
}
