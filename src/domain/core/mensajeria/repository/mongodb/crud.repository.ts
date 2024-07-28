import { IMensajeria } from "@global/models/interfaces";
import { ActualizarMensajeriaDTO, BuscarMensajeriaDTO, CrearMensajeriaDTO } from "../../dto";
import { MensajeriaModel } from "@domain/_connections/mongodb";
import { mongoToMensajeria } from "@domain/_helpers";

export const crear = async (dto: CrearMensajeriaDTO): Promise<IMensajeria> => {
    const modelMongoDB = await MensajeriaModel.create(dto.mensajeria);
    return await obtener({ id: modelMongoDB.id });
}

export const obtener = async (dto: BuscarMensajeriaDTO): Promise<IMensajeria> => {
    // Proceso de filtracion
    const filtros:any = {};
    if (dto.id) {
        filtros._id = dto.id;
    } else if (dto.fechaEnvio) {
        filtros.fechaEnvio = dto.fechaEnvio;
    } else return null;

    const modelMongoDB = await MensajeriaModel.findOne(filtros);
    if (!modelMongoDB) return null;
    return mongoToMensajeria(modelMongoDB);
}

export const actualizar = async (dto: ActualizarMensajeriaDTO): Promise<IMensajeria> => {
    const mensajeria: IMensajeria = await obtener(dto.buscarPor);
    if (!mensajeria) return null;

    await MensajeriaModel.updateOne({
        _id: mensajeria.id
    }, dto.actualizado);

    return Object.assign(mensajeria, dto.actualizado);
}

export const eliminar = async (dto: BuscarMensajeriaDTO): Promise<IMensajeria> => {
    const mensajeria: IMensajeria = await obtener(dto);
    if (!mensajeria) return null;

    await MensajeriaModel.findOneAndDelete({ _id: mensajeria.id });

    return mensajeria;
}
