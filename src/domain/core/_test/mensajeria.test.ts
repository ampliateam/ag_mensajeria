import { conexionConMongoDB } from '@global/connections/mongodb.connection';
import { services } from '@domain/services';

const timeoutTest = 20 * 1000;

describe('Mensajeria', () => {
  const ids = [
    '66c624a5d7e7e03459459977',
    '66c624c131add03c0e86800b',
  ];

  beforeAll(async () => {
    await conexionConMongoDB();
  }, timeoutTest);

  test.skip('Crear Mensajeria', async () => {
    // Crear un profesional
    const modelNuevo = await services.core.mensajeria.crud.crear({
      mensajeria: {
        tipoMedio: 'whatsapp',
        remitente: { _id: '123456', tipo: 'usuario' },
        receptor: { _id: '654321', tipo: 'usuario' },
        informacion: 'Hola mundo!',
        estado: 'pendiente',          // pendiente, error, enviado
        fechaEnvio: null,
      },
    });

    expect(modelNuevo._id).toBeTruthy();
  }, timeoutTest);

  test.skip('Obtener Mensajeria por crud', async () => {
    // Obtener mensajeria
    ids.map(async v => {
      const model = await services.core.mensajeria.crud.obtener({ _id: v });
      expect(ids).toContain(model._id);
    });
  }, timeoutTest);

  test.skip('Obtener Mensajeria por db - 0', async () => {
    // Obtener mensajeria
    ids.map(async v => {
      const [model] = await services.core.mensajeria.db.obtener({ _id: v });
      expect(ids).toContain(model._id);
    });
  }, timeoutTest);

  test.skip('Obtener Mensajeria por db - 1', async () => {
    const models = await services.core.mensajeria.db.obtener({
      _id: { '$in': ids }
    });
    models.map(v => {
      expect(ids).toContain(v._id);
    });
  }, timeoutTest);

  test.skip('Actualizar Mensajeria por crud', async () => {
    const idModificar = ids[0];

    const model = await services.core.mensajeria.crud.actualizar({
      buscarPor: { _id: idModificar },
      actualizado: {
        estado: 'enviado',
        fechaEnvio: new Date(),
      }
    });

    expect(idModificar).toBe(model._id);
  }, timeoutTest);

  test.skip('Actualizar Mensajeria por db - 0', async () => {
    const idModificar = ids[1];

    const [model] = await services.core.mensajeria.db.actualizar(
      { _id: idModificar },
      {
        estado: 'enviado',
        fechaEnvio: new Date(),
      }
    );

    expect(model._id).toBe(idModificar);
  }, timeoutTest);

  test.skip('Actualizar Mensajeria por db - 1', async () => {
    const models = await services.core.mensajeria.db.actualizar(
      { _id: { '$in': ids } },
      {
        estado: 'enviado',
        fechaEnvio: new Date(),
      }
    );

    models.map(v => {
      expect(ids).toContain(v._id);
    });
  }, timeoutTest);
});
