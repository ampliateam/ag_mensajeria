import { EnviarSmsDTO } from '../dto';
import { sns } from '../respository';

export const enviarSMS = (dto: EnviarSmsDTO) => {
    return sns.enviarSMS(dto);
};
