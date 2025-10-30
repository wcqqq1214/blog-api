import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();

/**
 * TypeORM 数据源配置
 */
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE || 'blog_api',
  synchronize: process.env.NODE_ENV === 'development', // 生产环境应该为 false
  logging: process.env.NODE_ENV === 'development',
  entities: ['src/models/**/*.entity.ts'],
  migrations: ['src/migrations/**/*.ts'],
  subscribers: [],
});
