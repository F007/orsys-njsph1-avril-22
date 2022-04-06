module.exports = {
  apps: [
    {
      name: "Gestion-Stock",
      script: "./dist/server.js",
      env: {
        PORT: 3100,
        NODE_ENV: "development",
      },
      env_production: {
        PORT: 3100,
        NODE_ENV: "production",
      },
    },
  ],
};
