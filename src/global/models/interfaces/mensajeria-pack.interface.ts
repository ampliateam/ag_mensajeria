import {
    // TMensajeriaPackTipo,
    TMensajeriaPackEstado,
    TMensajeriaMedioTipo
} from "@global/models/types";

// interface IMensajeriaPackDescuento {
//     habilitado: boolean;
//     porcentaje: number;                     // 0.2 (20%)
//     precioDescuento: number;                // $4.4
//     fechaInicio: Date;
//     fechaFin: Date;
// }

// interface IMensajeriaPackPrecio {
//     precio: number;                         // $5.5
//     descuento: IMensajeriaPackDescuento;
// }

export interface IMensajeriaPack {
    id: string;
    tipoMedio: TMensajeriaMedioTipo;
    cantidadElemento: number;
    codigo: string;
    nombre: string;
    descripcion: string;
    estado: TMensajeriaPackEstado;
    fechaCreacion: Date;
}

export interface IMensajeriaPackOpcional {
    id?: string;
    tipoMedio?: TMensajeriaMedioTipo;
    cantidadElemento?: number;
    codigo?: string;
    nombre?: string;
    descripcion?: string;
    estado?: TMensajeriaPackEstado;
    fechaCreacion?: Date;
}
