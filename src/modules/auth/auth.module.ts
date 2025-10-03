import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtAccessTokenModule } from '../../common/jwt/jwt.access.module';
import { JwtRefreshTokenModule } from '../../common/jwt/jwt.refresh.module';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from '../../core/prisma/prisma.service';
@Module({
  imports: [JwtAccessTokenModule, JwtRefreshTokenModule, JwtModule],
  controllers: [AuthController],
  providers: [AuthService, PrismaService]
})
export class AuthModule {}


