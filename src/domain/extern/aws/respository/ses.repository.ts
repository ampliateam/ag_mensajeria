import nodemailer from 'nodemailer';
import { envs } from '@global/configs/envs';
import { EnviarCorreoDTO } from '../dto';
import { manejadorDeErrorAwsSes } from '@domain/_errors';

// Referenciar el manejador de error correspondiente
const manejadorDeError = manejadorDeErrorAwsSes;

export const enviarCorreo = async (dto: EnviarCorreoDTO) => {
  try {
    const transporter = nodemailer.createTransport({
      host: envs.AwsSESHost,
      port: 465,
      secure: true,
      auth: {
        user: envs.AwsSESUser,
        pass: envs.AwsSESPassword,
      },
    });
  
    if(envs.environment === 'personal')
      console.log('Enviando correo (sendEmail)');
  
    const sended = await transporter.sendMail({
      from: dto.de,
      to: dto.para,
      subject: dto.asunto,
      html: dto.cuerpo,
    });
  
    return sended;
  } catch (error) {
    return manejadorDeError(error);
  }
};
