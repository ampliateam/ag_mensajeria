import { TMensajeriaMedioTipo } from '@global/models/types';

// PACK
interface IPack {
  correo: {
    totalHistorico: number,
    porElemento: IPackMedioDatos,
  };
  sms: {
    totalHistorico: number,
    porElemento: IPackMedioDatos,
  };
  whatsapp: {
    totalHistorico: number,
    porElemento: IPackMedioDatos,
  };
}

interface IPackMedioDatos {
  disponible: number;
  totalHistorico: number;
  utilizadoHistorico: number;
}

// Recordatorios manuales para cliente
interface IRecordatorioManualParaCliente {
  habilitado: boolean;
  tipoMedio: TMensajeriaMedioTipo | 'todos';
}

// Los mensajes por correo ya vienen con el plan basico
export interface IConfigMensajeriaProfesional {
  id: string;
  idUsuario: string;
  idProfesional: string;
  pack: IPack;
  recordatorioManualParaCliente: IRecordatorioManualParaCliente;
  fechaCreacion: Date;
}

export interface IConfigMensajeriaProfesionalOpcional {
  id?: string;
  idUsuario?: string;
  idProfesional?: string;
  pack?: IPack;
  recordatorioManualParaCliente?: IRecordatorioManualParaCliente;
  fechaCreacion?: Date;
}

// infoPlanActual: Explica la disponibilidad de medios de comunicacion por mes
// Verificar si tiene 750 correos/mes
// Verificar si tiene 000 sms/mes
// Verificar si tiene 000 whatsapp/mes

// pack: Explica la disponibilidad de packs de medios de comunicacion
// Verificar si tiene XXX pack-correos
// Verificar si tiene YYY pack-sms
// Verificar si tiene ZZZ pack-whatsapp
