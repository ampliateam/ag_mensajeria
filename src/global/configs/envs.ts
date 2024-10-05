import dotenv from 'dotenv';
import { EnvironmentPermitido } from '@global/models/_system';

dotenv.config();

export const envs = {
    modoTest: process.env.MODO_TEST === 'true',
    idDevAmplia: process.env.ID_DEV_AMPLIA,
    codigoUsuarioExterno: process.env.CODIGO_USUARIO_EXTERNO,
    contrasenaUsuarioExterno: process.env.CONTRASENA_USUARIO_EXTERNO,
    dockerContainerName: process.env.DOCKER_CONTAINER_NAME,
    dockerImage: process.env.DOCKER_IMAGE,
    dockerPortExterno: process.env.DOCKER_PORT_EXTERNO,
    dockerPortInterno: process.env.DOCKER_PORT_INTERNO,
    environment: process.env.ENVIRONMENT as EnvironmentPermitido,
    mongoURI: process.env.MONGO_URI,
    twilioAccountSid: process.env.TWILIO_ACCOUNT_SID,
    twilioAuthToken: process.env.TWILIO_AUTH_TOKEN,
    AwsSESHost: process.env.AWS_SES_HOST,
    AwsSESUser: process.env.AWS_SES_USER,
    AwsSESPassword: process.env.AWS_SES_PASSWORD,
};

if (envs.modoTest && envs.environment !== 'personal') {
    throw new Error('El sistema no puede estar en modo test en entornos remotos.');
}