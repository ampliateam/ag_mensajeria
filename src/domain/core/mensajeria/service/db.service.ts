import { IMensajeria } from '@global/models/interfaces';
import * as repository from '../repository/mongodb';

export const obtener = async (dto: any): Promise<IMensajeria[]> => {
  return await repository.db.obtener(dto);
};

export const actualizar = async (dto: any, data: any): Promise<IMensajeria[]> => {
  const actualizados = await repository.db.actualizar(dto, data);
  return actualizados;
};

export const obtenerPorID = async (_id: string) => {
  return await repository.db.obtenerPorID(_id);
};

export const actualizarPorID = async (dto: any, data: any) => {
  const actualizado = await repository.db.actualizarPorID(dto, data);
  return actualizado;
};
