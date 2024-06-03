import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'USER_SERVICE', transport: Transport.TCP, options: { host: 'localhost', port: 3001 } },
      { name: 'PRODUCT_SERVICE', transport: Transport.TCP, options: { host: 'localhost', port: 3002 } },
      { name: 'ORDER_SERVICE', transport: Transport.TCP, options: { host: 'localhost', port: 3003 } },
      { name: 'INVENTORY_SERVICE', transport: Transport.TCP, options: { host: 'localhost', port: 3004 } },
    ]),
  ],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}
