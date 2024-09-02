import { conexionConMongoDB } from '@global/connections/mongodb.connection';
import { services } from '@domain/services';
import { envs } from '@global/configs/envs';
import { testRun } from '../config';

const describeTest = testRun.configMensajeriaProfesional.actualizar ? describe : describe.skip;
describeTest('CRUD - Config mensajeria pack', () => {
  const ids = [
    '66d0874ef0175832a8f573ec',
    '66d0886769e2aa835c8055b4',
    '66d089718df44ff4e1a0e631',
  ];

  beforeAll(async () => {
    if (!envs.modoTest) {
      throw new Error('Es necesario que sea modo TEST. Ejecute [npm run test]');
    }
    
    await conexionConMongoDB();
  });

  test.skip('actualizar | config-mensajeria-profesional | crud', async () => {
    const _id = ids[1];
    
    // Obtener pack de mensajeria
    const model = await services.core.configMensajeriaProfesional.crud.actualizar({
      buscarPor: { _id },
      actualizado: {
        recordatorioManualParaCliente: {
          habilitado: false,
          tipoMedio: 'todos'
        }
      }
    });

    expect(model._id).toEqual(_id);
  });

  test('actualizar | config-mensajeria-profesional | db-0', async () => {
    const _id = ids[1];

    // Obtener pack de mensajeria
    const [model] = await services.core.configMensajeriaProfesional.db.actualizar(
      { _id: _id },
      {
        $set: {
          'recordatorioManualParaCliente.habilitado': true
        }
      }
    );

    expect(model._id).toEqual(_id);
  });
});
