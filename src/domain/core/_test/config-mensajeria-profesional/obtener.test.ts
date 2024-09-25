import { conexionConMongoDB } from '@global/connections/mongodb.connection';
import { services } from '@domain/services';
import { envs } from '@global/configs/envs';
import { testRun } from '../config';

const describeTest = testRun.configMensajeriaProfesional.obtener ? describe : describe.skip;
describeTest('CRUD - Config mensajeria pack', () => {
  const ids = [
    '66e1b252aaa6aa3e8c905f8f',
    '66e1b2922177e21f4fc872a7',
    '66e1b2f729255a6fd9eab7ac',
  ];

  beforeAll(async () => {
    if (!envs.modoTest) {
      throw new Error('Es necesario que sea modo TEST. Ejecute [npm run test]');
    }
    
    await conexionConMongoDB();
  });

  test.skip('obtener | config-mensajeria-profesional | crud', async () => {
    const _id = ids[0];
    const model = await services.core.configMensajeriaProfesional.crud.obtener({ _id });

    expect(model._id).toEqual(_id);
  });

  test.skip('Obtener | config-mensajeria-profesional | db-0', async () => {
    const _id = ids[1];
    const [model] = await services.core.configMensajeriaProfesional.db.obtener({ _id });

    expect(model._id).toEqual(_id);
  });
});
