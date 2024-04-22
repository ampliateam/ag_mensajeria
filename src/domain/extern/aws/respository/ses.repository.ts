import { EnviarCorreoDTO } from "../dto";

export const enviarCorreo = async (dto: EnviarCorreoDTO) => {
    return {
        enviado: true,
        error: null,
        mensaje: 'Mensaje de correo enviado correctamente.',
        dto,
    };
}
