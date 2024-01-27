// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      database: 'node_s3',
      user:     'root',
      password: 'chuong123'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  staging: {
    client: 'mysql2',
    connection: {
      database: 'node_s3',
      user:     'root',
      password: 'chuong123'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql2',
    connection: {
      database: 'node_s3',
      user:     'root',
      password: 'chuong123'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
