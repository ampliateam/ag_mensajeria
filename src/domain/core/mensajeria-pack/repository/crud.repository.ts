import { IMensajeriaPack } from "@global/models/interfaces";
import { ActualizarMensajeriaPackDTO, BuscarMensajeriaPackDTO, CrearMensajeriaPackDTO } from "../dto";
import { MensajeriaPackModel } from "@domain/_connections/mongodb";
import { mongoToMensajeriaPack } from "@domain/_helpers";

export const crear = async (dto: CrearMensajeriaPackDTO): Promise<IMensajeriaPack> => {
    const modelMongoDB = await MensajeriaPackModel.create(dto.mensajeriaPack);
    return await obtener({ id: modelMongoDB.id });
}

export const obtener = async (dto: BuscarMensajeriaPackDTO): Promise<IMensajeriaPack> => {
    // Proceso de filtracion
    const filtros:any = {};
    if (dto.id) {
        filtros._id = dto.id;
    } else if (dto.codigo) {
        filtros.codigo = dto.codigo;
    } else if (dto.nombre) {
        filtros.nombre = dto.nombre;
    } else return null;

    const modelMongoDB = await MensajeriaPackModel.findOne(filtros);
    if (!modelMongoDB) return null;
    return mongoToMensajeriaPack(modelMongoDB);
}

export const actualizar = async (dto: ActualizarMensajeriaPackDTO): Promise<IMensajeriaPack> => {
    const mensajeriaPack: IMensajeriaPack = await obtener(dto.buscarPor);
    if (!mensajeriaPack) return null;

    await MensajeriaPackModel.updateOne({
        _id: mensajeriaPack.id
    }, dto.actualizado);

    return Object.assign(mensajeriaPack, dto.actualizado);
}

export const eliminar = async (dto: BuscarMensajeriaPackDTO): Promise<IMensajeriaPack> => {
    const mensajeriaPack: IMensajeriaPack = await obtener(dto);
    if (!mensajeriaPack) return null;

    await MensajeriaPackModel.findOneAndDelete({ _id: mensajeriaPack.id });

    return mensajeriaPack;
}
