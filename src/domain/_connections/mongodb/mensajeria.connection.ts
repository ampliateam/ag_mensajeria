import { Schema, Types, model } from 'mongoose';
import { constants } from '@global/configs/constants';

// Guardar el valor por defecto de cada campo aqui
const defaultValue = {
    remitente: { id: '', tipo: '' },
    receptor: { id: '', tipo: '' },
    estado: 'pendiente',
    fechaEnvio: null,
    fechaCreacion: Date.now,
};

const MensajeriaSchema = new Schema({
    tipoMedio: { type: String, required: true },
    remitente: { type: Object, required: true, default: defaultValue.remitente },
    receptor: { type: Object, required: true, default: defaultValue.receptor },
    informacion: { type: String, required: true },
    estado: { type: String, required: false, default: defaultValue.estado },
    fechaEnvio: { type: Date, required: false, default: defaultValue.fechaEnvio },
    fechaCreacion: { type: Date, required: false, default: defaultValue.fechaCreacion },
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    versionKey: false,
});

// Duplicate the ID field.
MensajeriaSchema.virtual('id').set(function(v: string){
    this._id = new Types.ObjectId(v);
});
MensajeriaSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

export const MensajeriaModel = model(constants.nombreStore.mensajeria, MensajeriaSchema);
