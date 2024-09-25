import { envs } from './envs';

const constantes = {
    codigoServicioPrincipal: 'ag_mensajeria',
    nombreStore: {
        configMensajeriaProfesional: 'ConfigMensajeriaProfesional',
        mensajeria: 'Mensajerias',
        parametroSistema: 'ParametrosSistema',
    },
    parametroBusqueda: {
        baseUrlAgCliente: 'base_url_ag_cliente',
        baseUrlAgProfesional: 'base_url_ag_profesional',
        baseUrlAgUsuario: 'base_url_ag_usuario',
    },
};

if (envs.modoTest) {
    // No agregar el de `ParametrosSistema`
    constantes.nombreStore.configMensajeriaProfesional += '_test';
    constantes.nombreStore.mensajeria += '_test';
}

export const constants = constantes;