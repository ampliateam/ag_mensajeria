import { MensajeriaModel } from '@domain/_connections/mongodb';
import { mongoToMensajeria } from '@domain/_helpers';

// Tener cuidado mientras se use el plan de mongodb 'pago-por-uso'
export const obtener = async (filtros: any) => {
  const listaModelMongo = await MensajeriaModel.find(filtros);
  return listaModelMongo.map(v => mongoToMensajeria(v));
};

export const actualizar = async (filtros: any, data: any, opciones?: any) => {
  const opcionesAux = opciones || { new: true, runValidators: true };
  await MensajeriaModel.updateMany(filtros, data, opcionesAux);
  const actualizados = await MensajeriaModel.find(filtros);
  return actualizados.map(p => {
    return Object.assign(mongoToMensajeria(p), data);
  });
};

export const obtenerPorID = async (_id: string) => {
  const modelMongo = await MensajeriaModel.findById(_id);
  return mongoToMensajeria(modelMongo);
};

export const actualizarPorID = async (filtros: any, data: any, opciones?: any) => {
  const opcionesAux = opciones || { new: true, runValidators: true };
  const actualizados = await MensajeriaModel.find(filtros);
  await MensajeriaModel.findByIdAndUpdate(actualizados[0]._id, data, opcionesAux);
  return Object.assign(mongoToMensajeria(actualizados[0]), data);
};
