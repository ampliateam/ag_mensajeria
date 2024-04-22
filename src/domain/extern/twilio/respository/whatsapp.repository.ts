import twilio from 'twilio';
import { EnviarWhatsAppDTO } from '../dto';
import { envs } from '@global/configs/envs';

const twilioClient = twilio(envs.twilioAccountSid, envs.twilioAuthToken);

export const enviarMensajeWhatsApp = async (dto: EnviarWhatsAppDTO) => {
  const message = await twilioClient.messages.create({
    from: dto.de, // 'whatsapp:+14155238886',
    to: dto.para, // 'whatsapp:+15005550006',
    body: dto.informacion, // 'Hello there!',
  });

  return message;
};
