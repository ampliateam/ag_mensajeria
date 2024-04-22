import { EnviarSmsDTO } from '../dto';
import * as repository from '../respository';

export const enviarSMS = (dto: EnviarSmsDTO) => {
    return repository.enviarSMS(dto);
}
