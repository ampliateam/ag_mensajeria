// PACK
interface IPackMensajeria {
  correo: {
    totalHistorico: number,
    disponible: number,
  };
  sms: {
    totalHistorico: number,
    disponible: number,
  };
  whatsapp: {
    totalHistorico: number,
    disponible: number,
  };
}

// Los mensajes por correo ya vienen con el plan basico
export interface IConfigMensajeriaProfesional {
  _id: string;
  idUsuario: string;
  idProfesional: string;
  packMensajeria: IPackMensajeria;
  recordatorioManualParaCliente: boolean;
  fechaCreacion: Date;
}

export interface IConfigMensajeriaProfesionalOpcional {
  _id?: string;
  idUsuario?: string;
  idProfesional?: string;
  packMensajeria?: IPackMensajeria;
  recordatorioManualParaCliente?: boolean;
  fechaCreacion?: Date;
}

// packMensajeria: Explica la disponibilidad de packs de medios de comunicacion
// Verificar si tiene XXX pack-correos
// Verificar si tiene YYY pack-sms
// Verificar si tiene ZZZ pack-whatsapp
