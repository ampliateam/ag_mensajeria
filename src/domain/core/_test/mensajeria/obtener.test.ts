import { conexionConMongoDB } from '@global/connections/mongodb.connection';
import { services } from '@domain/services';
import { testRun } from '../config';

const describeTest = testRun.mensajeria.obtener ? describe : describe.skip;
describeTest('Mensajeria', () => {
  const ids = [
    '66d08c280ef1678dd3064187',
    '66d08d36b0b58991021689b7',
  ];

  beforeAll(async () => {
    await conexionConMongoDB();
  });

  test('Obtener Mensajeria por crud', async () => {
    // Obtener mensajeria
    ids.map(async v => {
      const model = await services.core.mensajeria.crud.obtener({ _id: v });
      expect(ids).toContain(model._id);
    });
  });

  test('Obtener Mensajeria por db por _id', async () => {
    // Obtener mensajeria
    ids.map(async v => {
      const [model] = await services.core.mensajeria.db.obtener({ _id: v });
      expect(ids).toContain(model._id);
    });
  });

  test('Obtener Mensajeria por db por $in contra ids', async () => {
    const models = await services.core.mensajeria.db.obtener({
      _id: { '$in': ids }
    });
    models.map(v => {
      expect(ids).toContain(v._id);
    });
  });

});
