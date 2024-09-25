import { EnviarSmsDTO } from '../dto';

export const enviarSMS = async (dto: EnviarSmsDTO) => {
    return {
        enviado: true,
        error: null,
        mensaje: 'Mensaje de SMS enviado correctamente.',
        dto,
    };
};
