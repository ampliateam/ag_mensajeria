import { EnviarCorreoDTO } from '../dto';
import { ses } from '../respository';

export const enviarCorreo = (dto: EnviarCorreoDTO) => {
    return ses.enviarCorreo(dto);
};
