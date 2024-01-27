import { knex as createKnex, Knex as KnexType } from "knex";

let client: KnexType | null = null;

/**
 * Create an Knex instance
 * @param {Partial<KnexType.Config>} options
 * @returns {KnexType}
 */
export function getInstance(options: Partial<KnexType.Config> = {}): KnexType {
  if (client) {
    return client;
  }
  const DB_HOST: any = process.env.MYSQL_HOST || "127.0.0.1";

  const DB_USER: any = process.env.MYSQL_USER || "root";
  const DB_PWD: any = process.env.MYSQL_PWD || "chuong123";
  const DB_NAME: any = process.env.MYSQL_DBNAME || "node_s3";
  const DB_PORT: any = process.env.MYSQL_PORT || "3306";

  client = createKnex({
    client: "mysql2",
    connection: {
      host: DB_HOST,
      port: DB_PORT,
      user: DB_USER,
      password: DB_PWD,
      database: DB_NAME,
      dateStrings: true,
    },
    pool: { min: 1, max: 10 },
    ...options,
  });
  return client;
}

export async function getTransaction(): Promise<
  KnexType.Transaction<any, any[]>
> {
  const knexTrx = await getInstance().transaction();
  return knexTrx;
}

export async function testConnection(): Promise<any> {
  try {
    await getInstance().raw("SELECT 1");
    return true;
  } catch (error) {
    return false;
  }
}

export default {
  getInstance,
  getTransaction,
  testConnection,
};
