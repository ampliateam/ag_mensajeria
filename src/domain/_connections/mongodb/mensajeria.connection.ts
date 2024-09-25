import { Schema, model } from 'mongoose';
import { constants } from '@global/configs/constants';

// Guardar el valor por defecto de cada campo aqui
const defaultValue = {
    remitente: { _id: '', tipo: '' },
    receptor: { _id: '', tipo: '' },
    estado: 'pendiente',
    fechaEnvio: null,
    fechaCreacion: Date.now,
};

const MensajeriaSchema = new Schema({
    tipoMedio: { type: String, required: true },
    remitente: { type: Object, required: true, default: defaultValue.remitente },
    receptor: { type: Object, required: true, default: defaultValue.receptor },
    mensaje: { type: String, required: true },
    estado: { type: String, required: false, default: defaultValue.estado },
    fechaEnvio: { type: Date, required: false, default: defaultValue.fechaEnvio },
    fechaCreacion: { type: Date, required: false, default: defaultValue.fechaCreacion },
}, { versionKey: false });

export const MensajeriaModel = model(constants.nombreStore.mensajeria, MensajeriaSchema);
