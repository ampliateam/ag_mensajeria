import { IConfigMensajeriaProfesionalOpcional } from '@global/models/ag_mensajeria';

export interface CrearConfigMensajeriaProfesionalDTO {
  configMensajeriaProfesional: IConfigMensajeriaProfesionalOpcional;
};

export interface BuscarConfigMensajeriaProfesionalDTO {
  _id?: string;
  idProfesional?: string;
};

export interface ActualizarConfigMensajeriaProfesionalDTO {
  buscarPor: BuscarConfigMensajeriaProfesionalDTO;
  actualizado: IConfigMensajeriaProfesionalOpcional;
};
