import { ConfigMensajeriaProfesionalModel } from '@domain/_connections/mongodb';
import { manejadorDeErrorMongodb } from '@domain/_errors';
import { mongoToConfigMensajeriaProfesional } from '@domain/_helpers';

// Referenciar el manejador de error correspondiente
const manejadorDeError = manejadorDeErrorMongodb;

// Tener cuidado mientras se use el plan de mongodb 'pago-por-uso'
export const obtener = async (filtros: any) => {
  try {
    const listaModelMongo = await ConfigMensajeriaProfesionalModel.find(filtros);
    return listaModelMongo.map(v => mongoToConfigMensajeriaProfesional(v));
  } catch (error) {
    return manejadorDeError(error);    
  }
};

export const actualizar = async (filtros: any, data: any, opciones?: any) => {
  try {
    const opcionesAux = opciones || { new: true, runValidators: true };
    await ConfigMensajeriaProfesionalModel.updateMany(filtros, data, opcionesAux);
    const actualizados = await ConfigMensajeriaProfesionalModel.find(filtros);
    return actualizados.map(p => mongoToConfigMensajeriaProfesional(p));
  } catch (error) {
    return manejadorDeError(error);    
  }
};
