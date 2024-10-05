import { IMensajeria } from '@global/models/ag_mensajeria';
import {
    CrearMensajeriaDTO,
    BuscarMensajeriaDTO,
} from '../dto';
import * as repository from '../repository/mongodb';

export const crear = async (dto: CrearMensajeriaDTO): Promise<IMensajeria> => {
    return await repository.crud.crear(dto);
}

export const obtener = async (dto: BuscarMensajeriaDTO): Promise<IMensajeria> => {
    return await repository.crud.obtener(dto);
}
