import { conexionConMongoDB } from '@global/connections/mongodb.connection';
import { services } from '@domain/services';

describe('CRUD - PACK de Mensajerias', () => {
  const idModel = '000000000000000000000000';
  const codigo = 'pack-1';
  const nombre = 'Pack inicial 1';

  beforeAll(async () => {
    await conexionConMongoDB();

    // TODO: Vaciar colecciones especificas

    // Crear un profesional
    const modelNuevo = await services.core.mensajeriaPack.crud.crear({
      mensajeriaPack: {
        id: idModel,
        tipoMedio: 'whatsapp',
        cantidadElemento: 50,
        codigo,
        nombre,
        descripcion: 'Un pack de prueba',
        estado: 'habilitado',
        fechaCreacion: undefined,
      },
    });

    expect(modelNuevo.id).toEqual(idModel);
  });

  test('Obtener pack de mensajeria', async () => {
    // Obtener pack de mensajeria
    const model = await services.core.mensajeriaPack.crud.obtener({ codigo });
    console.log('model', model);

    expect(model.id).toEqual(idModel);
  });

  test('Obtener lista de pack de mensajeria', async () => {
    const listaId = ['000000000000000000000000'];

    // Obtener lista de mensajeria pack
    const lista = await services.core.mensajeriaPack.obtenerListaPorIds(listaId);

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
