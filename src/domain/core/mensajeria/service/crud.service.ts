import { IMensajeria } from '@global/models/interfaces';
import {
    CrearMensajeriaDTO,
    BuscarMensajeriaDTO,
    ActualizarMensajeriaDTO
} from '../dto';
import * as repository from '../repository';

export const crear = async (dto: CrearMensajeriaDTO): Promise<IMensajeria> => {
    return await repository.crud.crear(dto);
}

export const obtener = async (dto: BuscarMensajeriaDTO): Promise<IMensajeria> => {
    return await repository.crud.obtener(dto);
}

export const actualizar = async (dto: ActualizarMensajeriaDTO): Promise<IMensajeria> => {
    return await repository.crud.actualizar(dto);
}
