import { EnviarCorreoDTO } from '../dto';
import * as repository from '../respository';

export const enviarCorreo = (dto: EnviarCorreoDTO) => {
    return repository.ses.enviarCorreo(dto);
}
