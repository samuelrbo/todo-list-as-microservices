import { Module } from '@nestjs/common';
import { UserModule } from '@modules/user/user.module';
import { AuthModule } from '@modules/auth/auth.module';
import { ProjectModule } from '@modules/project/project.module';
import { SharedModule } from './modules/shared/shared.module';

@Module({
  imports: [UserModule, AuthModule, ProjectModule, SharedModule],
})
export class AppModule {}
