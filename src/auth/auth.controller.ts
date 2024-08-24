import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './auth.guard';
import { ApiOperation, ApiTags } from '@nestjs/swagger';


@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}


  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({description:'To register a new User with email..',summary:'Register a User with details'})
  create(@Body() registerData: RegisterUserDto) {
    return this.authService.register(registerData);
  }

  @Get()
  @ApiOperation({description:'To Login a user with email..',summary:'Login a User with details'})
  login(@Body() loginData:LoginDto){
    return this.authService.login(loginData)
  }

}
