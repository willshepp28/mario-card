// update with you config settings.
module.exports = {
  development: {
      client: 'pg',
      connection: 'postgres://localhost/Mario_Cards',
      migrations: {
          directory: __dirname + '/db/migrations',
      },
      seeds: {
          directory: __dirname + '/db/seeds',
      },
  },
  production: {
      client: 'pg',
      connection: process.env.DATABASE_URL,
      migrations: {
          directory: __dirname + '/db/migrations',
      },
      seeds: {
          directory: __dirname + '/db/seeds/production',
      },
  }
}