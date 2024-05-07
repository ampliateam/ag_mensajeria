import { envs } from '@global/configs/envs';
import { EnviarCorreoDTO } from '../dto';
import nodemailer from 'nodemailer';

export const enviarCorreo = async (dto: EnviarCorreoDTO) => {
  const transporter = nodemailer.createTransport({
    host: envs.AwsSESHost,
    port: 465,
    secure: true,
    auth: {
      user: envs.AwsSESUser,
      pass: envs.AwsSESPassword,
    },
  });

  console.log('Enviando correo (sendEmail)');

  const sended = await transporter.sendMail({
    from: dto.de,
    to: dto.para,
    subject: dto.asunto,
    html: `${dto.cuerpo}`,
  });

  return sended;
};
