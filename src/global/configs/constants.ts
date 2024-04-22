import { envs } from "./envs";

const constantes = {
    codigoServicioPrincipal: 'ag_mensajeria',
    nombreStore: {
        configMensajeriaProfesional: 'ConfigMensajeriaProfesional',
        mensajeria: 'Mensajerias',
        mensajeriaPack: 'MensajeriaPacks',
        parametroSistema: 'ParametrosSistema',
    },
    parametroBusqueda: {
        baseUrlAgCliente: 'base_url_ag_cliente',
        baseUrlAgProfesional: 'base_url_ag_profesional',
        baseUrlAgUsuario: 'base_url_ag_usuario',
    },
};

if (envs.modoTest) {
    constantes.nombreStore.configMensajeriaProfesional += '_test';
    constantes.nombreStore.mensajeria += '_test';
    constantes.nombreStore.mensajeriaPack += '_test';
    constantes.nombreStore.parametroSistema += '_test';
}

export const constants = constantes;