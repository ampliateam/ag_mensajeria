import { IConfigMensajeriaProfesional, IMensajeria } from '@global/models/interfaces';
import { IParametroSistema } from '@domain/_models/interfaces';

const mongoToModel = (mongo: any) => {
    if (!mongo) return null;

    const mongoObj = mongo.toObject();
    const mongoKeys = Object.keys(mongoObj);

    const obj = {};
    mongoKeys.map(key => obj[key] = mongoObj[key]);
    obj['_id'] = obj['_id'].toString();

    return obj;
}

export const mongoToParametroBusqueda = (mongo: any): IParametroSistema => {
    return mongoToModel(mongo) as IParametroSistema;
}

export const mongoToMensajeria = (mongo: any): IMensajeria => {
    return mongoToModel(mongo) as IMensajeria;
}

export const mongoToConfigMensajeriaProfesional = (mongo: any): IConfigMensajeriaProfesional => {
    return mongoToModel(mongo) as IConfigMensajeriaProfesional;
}
