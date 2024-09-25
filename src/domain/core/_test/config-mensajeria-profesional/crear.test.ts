import { conexionConMongoDB } from '@global/connections/mongodb.connection';
import { services } from '@domain/services';
import { envs } from '@global/configs/envs';
import { testRun } from '../config';

const describeTest = testRun.configMensajeriaProfesional.crear ? describe : describe.skip;
describeTest('CRUD - Config mensajeria pack', () => {
  const idProfesional = '66cf5e22b731b5cf99500002';

  beforeAll(async () => {
    if (!envs.modoTest) {
      throw new Error('Es necesario que sea modo TEST. Ejecute [npm run test]');
    }
    
    await conexionConMongoDB();
  });

  test.skip('crear | config-mensajeria-profesional | crud', async () => {
    // Crear un profesional
    const modelNuevo = await services.core.configMensajeriaProfesional.crud.crear({
      configMensajeriaProfesional: {
        idProfesional,
        packMensajeria: {
          correo: {
            totalHistorico: 0,
            disponible: 0,
          },
          sms: {
            totalHistorico: 0,
            disponible: 0,
          },
          whatsapp: {
            totalHistorico: 0,
            disponible: 0,
          },
        },
        recordatorioManualParaCliente: false,
      },
    });

    expect(modelNuevo).toBeTruthy();
  });
});
