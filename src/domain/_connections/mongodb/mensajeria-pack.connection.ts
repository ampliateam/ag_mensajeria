import { Schema, Types, model } from 'mongoose';
import { constants } from '@global/configs/constants';

// Guardar el valor por defecto de cada campo aqui
const defaultValue = {
    estado: 'deshabilitado',
    fechaCreacion: Date.now
};

const MensajeriaPackSchema = new Schema({
    tipoMedio: { type: String, required: true },
    cantidadElemento: { type: Number, required: true },
    codigo: { type: String, required: true },
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    estado: { type: String, required: false, default: defaultValue.estado },
    fechaCreacion: { type: Date, required: false, default: defaultValue.fechaCreacion },
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    versionKey: false,
});

// Duplicate the ID field.
MensajeriaPackSchema.virtual('id').set(function(v: string){
    this._id = new Types.ObjectId(v);
});
MensajeriaPackSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

export const MensajeriaPackModel = model(constants.nombreStore.mensajeriaPack, MensajeriaPackSchema);
