import {
    TMensajeriaMedioTipo,
    TMensajeriaRemitenteTipo,
    TMensajeriaReceptorTipo,
    TMensajeriaEstado
} from "@global/models/types";

interface IMensajeriaRemitente {
    id: string;
    tipo: TMensajeriaRemitenteTipo;
}

interface IMensajeriaReceptor {
    id: string;
    tipo: TMensajeriaReceptorTipo;
}

export interface IMensajeria {
    id: string;
    tipoMedio: TMensajeriaMedioTipo;
    remitente: IMensajeriaRemitente;
    receptor: IMensajeriaReceptor;
    informacion: string;
    estado: TMensajeriaEstado;          // pendiente, error, enviado
    fechaEnvio: Date | null;
    fechaCreacion: Date;
}

export interface IMensajeriaOpcional {
    id?: string;
    tipoMedio?: TMensajeriaMedioTipo;
    remitente?: IMensajeriaRemitente;
    receptor?: IMensajeriaReceptor;
    informacion?: string;
    estado?: TMensajeriaEstado;          // pendiente, error, enviado
    fechaEnvio?: Date | null;
    fechaCreacion?: Date;
}
