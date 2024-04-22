import {
    IMensajeria,
    IMensajeriaOpcional,
} from "@global/models/interfaces";

export interface CrearMensajeriaDTO {
    mensajeria: IMensajeria;
}

export interface BuscarMensajeriaDTO {
    id?: string;
    fechaEnvio?: Date
}

export interface ActualizarMensajeriaDTO {
    buscarPor: BuscarMensajeriaDTO;
    actualizado: IMensajeriaOpcional;
}
