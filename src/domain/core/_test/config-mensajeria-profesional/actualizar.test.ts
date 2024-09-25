import { conexionConMongoDB } from '@global/connections/mongodb.connection';
import { services } from '@domain/services';
import { envs } from '@global/configs/envs';
import { testRun } from '../config';

const describeTest = testRun.configMensajeriaProfesional.actualizar ? describe : describe.skip;
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

  test.skip('actualizar | config-mensajeria-profesional | crud', async () => {
    const _id = ids[0];
    const recordatorioManualParaCliente = true;
    
    // Obtener pack de mensajeria
    const model = await services.core.configMensajeriaProfesional.crud.actualizar({
      buscarPor: { _id },
      actualizado: { recordatorioManualParaCliente }
    });

    expect(_id).toEqual(model._id);
    expect(recordatorioManualParaCliente).toEqual(model.recordatorioManualParaCliente);
  });

  test.skip('actualizar | config-mensajeria-profesional | db-0', async () => {
    const _id = ids[1];
    const aumento = -1;

    const model = await services.core.configMensajeriaProfesional.crud.obtener({ _id });

    // Obtener pack de mensajeria
    const [modelModificado] = await services.core.configMensajeriaProfesional.db.actualizar(
      { _id },
      { 
        $inc: {
          'packMensajeria.whatsapp.totalHistorico': aumento,
          'packMensajeria.whatsapp.disponible': aumento,
        }
      }
    );

    expect(_id).toEqual(model._id);
    expect(model.packMensajeria.whatsapp.totalHistorico+aumento).toEqual(modelModificado.packMensajeria.whatsapp.totalHistorico);
    expect(model.packMensajeria.whatsapp.disponible+aumento).toEqual(modelModificado.packMensajeria.whatsapp.disponible);
  });
});
