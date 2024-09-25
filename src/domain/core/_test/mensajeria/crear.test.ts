import { conexionConMongoDB } from '@global/connections/mongodb.connection';
import { services } from '@domain/services';
import { testRun } from '../config';

const timeoutTest = 20 * 1000;

const describeTest = testRun.mensajeria.crear ? describe : describe.skip;
describeTest('Mensajeria', () => {
  beforeAll(async () => {
    await conexionConMongoDB();
  }, timeoutTest);

  test.skip('Crear Mensajeria', async () => {
    // Crear un profesional
    const modelNuevo = await services.core.mensajeria.crud.crear({
      mensajeria: {
        tipoMedio: 'whatsapp',
        remitente: { _id: '66cf5d3b551893628cf7c944', tipo: 'profesional' },
        receptor: { _id: '654321', tipo: 'usuario' },
        mensaje: 'Hola mundo!',
        estado: 'pendiente',          // pendiente, error, enviado
        fechaEnvio: null,
      },
    });

    expect(modelNuevo._id).toBeTruthy();
  }, timeoutTest);

});
