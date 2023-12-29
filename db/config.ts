import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

config();

const configService = new ConfigService();
export const DATABASE_CONFIG: DataSourceOptions = {
  type: 'postgres',
  database: configService.get<string>('DB_NAME'),
  host: configService.get<string>('DB_HOST'),
  username: configService.get<string>('DB_USERNAME'),
  password: configService.get<string>('DB_PASSWORD'),
  port: configService.get<number>('DB_PORT'),
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],
};

export default new DataSource(DATABASE_CONFIG);
