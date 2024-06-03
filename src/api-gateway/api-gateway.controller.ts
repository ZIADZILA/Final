import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiGatewayService } from './api-gateway.service';

@Controller('api')
export class ApiGatewayController {
  constructor(private readonly apiGatewayService: ApiGatewayService) {}

  @Post('user')
  createUser(@Body() createUserDto: any) {
    return this.apiGatewayService.createUser(createUserDto);
  }

  @Get('user')
  findAllUsers() {
    return this.apiGatewayService.findAllUsers();
  }
}
