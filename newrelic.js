exports.config = {
  app_name: ['ecs-fargate-app'],
  license_key: process.env.NEW_RELIC_LICENSE_KEY, // use env variable
  distributed_tracing: {
    enabled: true
  },
  logging: {
    level: 'info'
  }
}