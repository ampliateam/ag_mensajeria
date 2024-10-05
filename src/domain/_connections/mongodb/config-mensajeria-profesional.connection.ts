import { Schema, model } from 'mongoose';
import { constants } from '@global/configs/constants';
import { IConfigMensajeriaProfesional } from '@global/models/ag_mensajeria';

// Definir la interfaz para el documento
interface IConfigMensajeriaProfesionalMongoose extends Document, Omit<IConfigMensajeriaProfesional, '_id'> {};

// Guardar el valor por defecto de cada campo aqui (para los required=false)
const defaultValue = {
  packMensajeria: {
    correo: {
      totalHistorico: 0,
      disponible: 0,
    },
    sms: {
      totalHistorico: 0,
      disponible: 0,
    },
    whatsapp: {
      totalHistorico: 0,
      disponible: 0,
    }
  },
  recordatorioManualParaCliente: false,
  fechaCreacion: Date.now,
};

// Schema de mongoose
const ConfigMensajeriaProfesionalSchema = new Schema<IConfigMensajeriaProfesionalMongoose>(
  {
    idProfesional: { type: String, required: true, unique: true },
    packMensajeria: {
      type: Object,
      required: false,
      default: defaultValue.packMensajeria,
    },
    recordatorioManualParaCliente: {
      type: Boolean,
      required: false,
      default: defaultValue.recordatorioManualParaCliente,
    },
    fechaCreacion: {
      type: Date,
      required: false,
      default: defaultValue.fechaCreacion,
    },
  }, { versionKey: false }
);

export const ConfigMensajeriaProfesionalModel = model<IConfigMensajeriaProfesionalMongoose>(
  constants.nombreStore.configMensajeriaProfesional,
  ConfigMensajeriaProfesionalSchema
);
