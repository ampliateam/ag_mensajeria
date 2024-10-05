import { TPackMensajeria } from '../types/config-mensajeria-profesional.type';

// Los mensajes por correo ya vienen con el plan basico
export interface IConfigMensajeriaProfesional {
  _id: string;
  idProfesional: string;
  packMensajeria: TPackMensajeria;
  recordatorioManualParaCliente: boolean;
  fechaCreacion: Date;
};

export interface IConfigMensajeriaProfesionalOpcional {
  _id?: string;
  idProfesional?: string;
  packMensajeria?: TPackMensajeria;
  recordatorioManualParaCliente?: boolean;
  fechaCreacion?: Date;
};

// packMensajeria: Explica la disponibilidad de packs de medios de comunicacion
// Verificar si tiene XXX pack-correos
// Verificar si tiene YYY pack-sms
// Verificar si tiene ZZZ pack-whatsapp
