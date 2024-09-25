import { services } from '@domain/services';

describe('Twilio', () => {
  
  test('Envio de mensaje por whatsapp', async () => {
    const msgTwilio = await services.extern.twilio.whatsapp.enviarMensaje({
      de: '+14155238886',
      para: '+595971627803',
      mensaje: 'Mensaje de prueba',
    });

    expect(msgTwilio).toBeTruthy();
  });
});
