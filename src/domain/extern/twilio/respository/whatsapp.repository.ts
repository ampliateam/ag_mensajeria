import twilio from 'twilio';
import { EnviarWhatsAppDTO } from '../dto';
import { envs } from '@global/configs/envs';
import { manejadorDeErrorTwilioWhatsApp } from '@domain/_errors';

const twilioClient = twilio(envs.twilioAccountSid, envs.twilioAuthToken);

// Referenciar el manejador de error correspondiente
const manejadorDeError = manejadorDeErrorTwilioWhatsApp;

export const enviarMensaje = async (dto: EnviarWhatsAppDTO) => {
  try {
    const message = await twilioClient.messages.create({
      from: `whatsapp:${dto.de}`, // 'whatsapp:+14155238886',
      to: `whatsapp:${dto.para}`, // 'whatsapp:+15005550006',
      body: dto.mensaje, // 'Hello there!',
    });
  
    return message;
  } catch (error) {
    return manejadorDeError(error);
  }
};
