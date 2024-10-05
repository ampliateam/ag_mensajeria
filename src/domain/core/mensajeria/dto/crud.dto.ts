import { IMensajeriaOpcional } from '@global/models/ag_mensajeria';

export interface CrearMensajeriaDTO {
    mensajeria: IMensajeriaOpcional;
}

export interface BuscarMensajeriaDTO {
    _id?: string;
}
