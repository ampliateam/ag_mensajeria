import { EnviarWhatsAppDTO } from '../dto';
import * as repository from '../respository';

export const enviarMensajeWhatsApp = (dto: EnviarWhatsAppDTO) => {
    return repository.whatsapp.enviarMensajeWhatsApp(dto);
}
