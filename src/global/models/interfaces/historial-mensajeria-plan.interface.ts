import { TPlanTipo } from "../types";

interface IHistorialMensajeriaPlanMedio {
  total: number;
  utilizado: number;
  disponible: number;
}

export interface IHistorialMensajeriaPlan {
  id: string;
  idUsuario: string;
  idProfesional: string;
  idConfigMensajeriaProfesional: string;
  idPlan: string;
  tipoPlan: TPlanTipo;
  medio: {
    correo: IHistorialMensajeriaPlanMedio,
    sms: IHistorialMensajeriaPlanMedio,
    whatsapp: IHistorialMensajeriaPlanMedio,
  };
  fechaPlanInicio: Date;  // 2024-04-15T14:11:000.000Z
  fechaPlanFin: Date;     // 2024-05-15T14:11:000.000Z
  fechaCreacion: Date;
}
