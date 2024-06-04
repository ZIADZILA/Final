import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto/create-order.dto';

@Controller('order') // Defining the base path for the controller's routes
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  // Handling POST requests to create a new order
  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  // Handling POST requests to create a new order
  @Get()
  async findAll() {
    return this.orderService.findAll();
  }

   // Handling GET requests to retrieve a single order by its ID
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.orderService.findOne(id);
  }

  // Handling PUT requests to update an existing order by its ID
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateOrderDto: CreateOrderDto) {
    return this.orderService.update(id, updateOrderDto);
  }

  // Handling DELETE requests to remove an order by its ID
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.orderService.remove(id);
  }
}