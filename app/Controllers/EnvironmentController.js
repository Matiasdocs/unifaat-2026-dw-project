export default async function EnvironmentController(request, response) {
    const isDocker = process.env.IS_DOCKER === "true";
  
    return response.json({
      environment: isDocker ? "docker" : "local",
      database: {
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT)
      },
      web: {
        host: isDocker ? "nodeweb_host" : "localhost",
        port: isDocker ? 8080 : Number(process.env.NODE_WEB_PORT)
      }
    });
  }