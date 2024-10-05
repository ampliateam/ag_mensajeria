import { IConfigMensajeriaProfesional } from '@global/models/ag_mensajeria';
import { ConfigMensajeriaProfesionalModel } from '@domain/_connections/mongodb';
import { mongoToConfigMensajeriaProfesional } from '@domain/_helpers';
import {
    ActualizarConfigMensajeriaProfesionalDTO,
    BuscarConfigMensajeriaProfesionalDTO,
    CrearConfigMensajeriaProfesionalDTO
} from '../../dto';
import { manejadorDeErrorMongodb } from '@domain/_errors';

// Referenciar el manejador de error correspondiente
const manejadorDeError = manejadorDeErrorMongodb;

export const crear = async (dto: CrearConfigMensajeriaProfesionalDTO): Promise<IConfigMensajeriaProfesional> => {
    try {
        const modelMongoDB = await ConfigMensajeriaProfesionalModel.create(dto.configMensajeriaProfesional);
        return await obtener({ _id: modelMongoDB._id.toString() });
    } catch (error) {
        return manejadorDeError(error);        
    }
};

export const obtener = async (dto: BuscarConfigMensajeriaProfesionalDTO): Promise<IConfigMensajeriaProfesional> => {   
    try {
        // Proceso de filtracion
        const filtros:any = {};
        if (dto._id) {
            filtros._id = dto._id;
        } else if (dto.idProfesional) {
            filtros.idProfesional = dto.idProfesional;
        } else return null;

        const modelMongoDB = await ConfigMensajeriaProfesionalModel.findOne(filtros);
        if (!modelMongoDB) return null;
        return mongoToConfigMensajeriaProfesional(modelMongoDB);
    } catch (error) {
        return manejadorDeError(error);        
    }
};

export const actualizar = async (dto: ActualizarConfigMensajeriaProfesionalDTO): Promise<IConfigMensajeriaProfesional> => {
    try {
        const configMensajeriaProfesional = await obtener(dto.buscarPor);
        if (!configMensajeriaProfesional) return null;

        await ConfigMensajeriaProfesionalModel.updateOne({
            _id: configMensajeriaProfesional._id
        }, dto.actualizado);

        return Object.assign(configMensajeriaProfesional, dto.actualizado);
    } catch (error) {
        return manejadorDeError(error);        
    }
};
