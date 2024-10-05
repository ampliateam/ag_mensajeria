import { IMensajeria } from '@global/models/ag_mensajeria';
import { BuscarMensajeriaDTO, CrearMensajeriaDTO } from '../../dto';
import { MensajeriaModel } from '@domain/_connections/mongodb';
import { mongoToMensajeria } from '@domain/_helpers';
import { manejadorDeErrorMongodb } from '@domain/_errors';

// Referenciar el manejador de error correspondiente
const manejadorDeError = manejadorDeErrorMongodb;

export const crear = async (dto: CrearMensajeriaDTO): Promise<IMensajeria> => {
    try {
        const modelMongoDB = await MensajeriaModel.create(dto.mensajeria);
        return await obtener({ _id: modelMongoDB._id.toString() });
    } catch (error) {
        return manejadorDeError(error);        
    }
}

export const obtener = async (dto: BuscarMensajeriaDTO): Promise<IMensajeria> => {
    try {
        // Proceso de filtracion
        const filtros:any = {};
        if (dto._id) {
            filtros._id = dto._id;
        } else return null;

        const modelMongoDB = await MensajeriaModel.findOne(filtros);
        if (!modelMongoDB) return null;
        return mongoToMensajeria(modelMongoDB);
    } catch (error) {
        return manejadorDeError(error);        
    }
}
