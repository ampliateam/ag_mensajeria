import { IMensajeriaOpcional } from "@global/models/interfaces";

export interface CrearMensajeriaDTO {
    mensajeria: IMensajeriaOpcional;
}

export interface BuscarMensajeriaDTO {
    _id?: string;
}
