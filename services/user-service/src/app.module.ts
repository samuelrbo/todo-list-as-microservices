import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/user.sqlite',
      entities: ['dist/**/*.entity.{ts,js}'],
      synchronize: true,
    }),
    UserModule,
  ],
})
export class AppModule {}
