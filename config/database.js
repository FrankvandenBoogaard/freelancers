module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'db-mysql-ams3-09343-do-user-10596617-0.b.db.ondigitalocean.com'),
      port: env.int('DATABASE_PORT', 25060),
      database: env('DATABASE_NAME', 'defaultdb'),
      user: env('DATABASE_USERNAME', 'freelancer'),
      password: env('DATABASE_PASSWORD', '4px6zencyKc4ud6r'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
