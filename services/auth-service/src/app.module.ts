import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import configuration from './configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      load: [configuration],
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class AppModule {}
