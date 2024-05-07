import { services } from "@domain/services";

describe("CRUD - AWS SES", () => {
  
  test("Enviar correo", async () => {
    // Obtener ficha
    await services.extern.aws.enviarCorreo({
      asunto: "Hola",
      cuerpo: "Hola",
      de: "agendaliateam@gmail.com",
      para: "agendaliateam@gmail.com"
    });

    expect(true).toEqual(true);
  });
});
