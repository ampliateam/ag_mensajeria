import { manejadorDeErrorAwsSns } from '@domain/_errors';
import { EnviarSmsDTO } from '../dto';

// Referenciar el manejador de error correspondiente
const manejadorDeError = manejadorDeErrorAwsSns;

export const enviarSMS = async (dto: EnviarSmsDTO) => {
    try {
        return {
            enviado: true,
            error: null,
            mensaje: 'Mensaje de SMS enviado correctamente.',
            dto,
        };
    } catch (error) {
        return manejadorDeError(error);
    }
};
