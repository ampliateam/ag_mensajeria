import { conexionConMongoDB } from '@global/connections/mongodb.connection';
import { services } from '@domain/services';

describe('CRUD - Mensajeria', () => {
  const idModel = '000000000000000000000000';
  const fechaEnvio = new Date('2024-04-22T15:00:00.000Z');

  beforeAll(async () => {
    await conexionConMongoDB();

    // TODO: Vaciar colecciones especificas

    // Crear un profesional
    const modelNuevo = await services.core.mensajeria.crud.crear({
      mensajeria: {
        id: idModel,
        tipoMedio: 'whatsapp',
        remitente: { id: '123456', tipo: 'usuario' },
        receptor: { id: '654321', tipo: 'usuario' },
        informacion: 'Hola mundo!',
        estado: 'pendiente',          // pendiente, error, enviado
        fechaEnvio,
        fechaCreacion: undefined,
      },
    });

    expect(modelNuevo.id).toEqual(idModel);
  });

  test('Obtener Mensajeria', async () => {
    // Obtener pack de mensajeria
    const model = await services.core.mensajeria.crud.obtener({ fechaEnvio });
    console.log('model', model);

    expect(model.id).toEqual(idModel);
  });

  test('Obtener lista de Mensajeria', async () => {
    const listaId = ['000000000000000000000000'];

    // Obtener lista de mensajeria pack
    const lista = await services.core.mensajeria.obtenerListaPorIds(listaId);

    // Si no existe ningun profesional, verificar
    if (!lista.length) {
      return expect(lista.length).toEqual(0);
    }

    // Verificar lista de id de mensajeria pack
    for (const id of listaId) {
      expect(lista.find((v) => v.id === id || '')?.id).toEqual(id);
    }
  });
});
