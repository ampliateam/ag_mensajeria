import {
    TMensajeriaMedioTipo,
    TMensajeriaRemitenteTipo,
    TMensajeriaReceptorTipo,
    TMensajeriaEstado
} from "@global/models/types";

interface IMensajeriaRemitente {
    _id: string;
    tipo: TMensajeriaRemitenteTipo;
}

interface IMensajeriaReceptor {
    _id: string;
    tipo: TMensajeriaReceptorTipo;
}

export interface IMensajeria {
    _id: string;
    tipoMedio: TMensajeriaMedioTipo;
    remitente: IMensajeriaRemitente;
    receptor: IMensajeriaReceptor;
    informacion: string;
    estado: TMensajeriaEstado;          // pendiente, error, enviado
    fechaEnvio: Date | null;
    fechaCreacion: Date;
}

export interface IMensajeriaOpcional {
    _id?: string;
    tipoMedio?: TMensajeriaMedioTipo;
    remitente?: IMensajeriaRemitente;
    receptor?: IMensajeriaReceptor;
    informacion?: string;
    estado?: TMensajeriaEstado;          // pendiente, error, enviado
    fechaEnvio?: Date | null;
    fechaCreacion?: Date;
}
