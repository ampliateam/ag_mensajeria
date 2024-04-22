import { TMensajeriaMedioTipo } from "../types";

export interface IHistorialMensajeriaPack {
  id: string;
  idUsuario: string;
  idProfesional: string;
  idConfigMensajeriaProfesional: string;
  idPack: string;
  tipoMedio: TMensajeriaMedioTipo;
  cantidadElemento: number;
  fechaCreacion: Date;
}
