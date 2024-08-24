import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { DatabaseModule } from 'src/database/database.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { DatabaseService } from 'src/database/database.service';
import { JwtStrategy } from './jwtstragy';


@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'yourSecretKey',  // Make sure to provide a secret key here
      signOptions: { expiresIn: '60m' },  // Optional: Set token expiration
    }),
  ],
  providers: [AuthService, JwtStrategy,DatabaseService],
})
export class AuthModule {}
