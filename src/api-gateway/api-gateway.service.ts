import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class ApiGatewayService {
  private userClient: ClientProxy;

  constructor() {
    this.userClient = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 3001,
      },
    });
  }

  createUser(createUserDto: any) {
    return this.userClient.send({ cmd: 'createUser' }, createUserDto);
  }

  findAllUsers() {
    return this.userClient.send({ cmd: 'findAllUsers' }, {});
  }
}
