import twilio from 'twilio';
import { EnviarWhatsAppDTO } from '../dto';
import { envs } from '@global/configs/envs';

const twilioClient = twilio(envs.twilioAccountSid, envs.twilioAuthToken);

export const enviarMensaje = async (dto: EnviarWhatsAppDTO) => {
  const message = await twilioClient.messages.create({
    from: `whatsapp:${dto.de}`, // 'whatsapp:+14155238886',
    to: `whatsapp:${dto.para}`, // 'whatsapp:+15005550006',
    body: dto.mensaje, // 'Hello there!',
  });

  return message;
};
