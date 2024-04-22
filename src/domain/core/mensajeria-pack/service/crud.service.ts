import { IMensajeriaPack } from '@global/models/interfaces';
import {
    ActualizarMensajeriaPackDTO,
    BuscarMensajeriaPackDTO,
    CrearMensajeriaPackDTO,
} from '../dto';
import * as repository from '../repository';

export const crear = async (dto: CrearMensajeriaPackDTO): Promise<IMensajeriaPack> => {
    return await repository.crud.crear(dto);
}

export const obtener = async (dto: BuscarMensajeriaPackDTO): Promise<IMensajeriaPack> => {
    return await repository.crud.obtener(dto);
}

export const actualizar = async (dto: ActualizarMensajeriaPackDTO): Promise<IMensajeriaPack> => {
    return await repository.crud.actualizar(dto);
}

export const eliminar = async (dto: BuscarMensajeriaPackDTO): Promise<IMensajeriaPack> => {
    return await repository.crud.eliminar(dto);
}
