import { services } from '@domain/services';

describe('AWS SES', () => {
  
  test.skip('Enviar correo', async () => {
    await services.extern.aws.ses.enviarCorreo({
      asunto: 'Hola',
      cuerpo: 'Hola',
      de: 'agendaliateam@gmail.com',
      para: 'agendaliateam@gmail.com'
    });

    expect(true).toEqual(true);
  });
});
