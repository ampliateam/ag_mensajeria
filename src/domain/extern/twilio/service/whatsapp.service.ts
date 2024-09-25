import { EnviarWhatsAppDTO } from '../dto';
import { whatsapp } from '../respository';

export const enviarMensaje = (dto: EnviarWhatsAppDTO) => {
    return whatsapp.enviarMensaje(dto);
};
