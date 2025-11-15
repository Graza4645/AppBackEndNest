import {DataSource,DataSourceOptions} from 'typeorm'
import {config} from 'dotenv'

config(); // Load environment variables

const isProduction = process.env.NODE_ENV === 'production';
const useSupabase = process.env.USE_SUPABASE === 'true';

export const dataSourceOptions:DataSourceOptions={
    type:'postgres',
    url: useSupabase ? process.env.SUPABASE_DATABASE_URL : undefined,
    host: useSupabase ? undefined : process.env.DB_HOST,
    port: useSupabase ? undefined : Number(process.env.DB_PORT),
    username: useSupabase ? undefined : process.env.DB_USERNAME,
    password: useSupabase ? undefined : process.env.DB_PASSWORD,
    database: useSupabase ? undefined : process.env.DB_NAME,
    entities: isProduction ? ['dist/**/*.entity.js'] : ['src/**/*.entity.ts'],
    migrations: isProduction ? ['dist/DB/migrations/*{.ts,.js}'] : ['src/DB/migrations/*{.ts,.js}'],
    synchronize: !isProduction,
    logging: false,
    ssl: isProduction || useSupabase ? { rejectUnauthorized: false } : false,
    extra: {
        connectionLimit: 1,
    },
}

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;