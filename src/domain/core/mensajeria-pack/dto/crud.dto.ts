import {
    IMensajeriaPack,
    IMensajeriaPackOpcional
} from "@global/models/interfaces";

export interface CrearMensajeriaPackDTO {
    mensajeriaPack: IMensajeriaPack;
}

export interface BuscarMensajeriaPackDTO {
    id?: string;
    codigo?: string;
    nombre?: string;
}

export interface ActualizarMensajeriaPackDTO {
    buscarPor: BuscarMensajeriaPackDTO;
    actualizado: IMensajeriaPackOpcional;
}
