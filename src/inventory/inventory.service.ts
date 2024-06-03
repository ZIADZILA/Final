import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Inventory, InventoryDocument } from './schemas/inventory.schema/inventory.schema';
import { CreateInventoryDto } from './dto/create-inventory.dto/create-inventory.dto';

@Injectable()
export class InventoryService {
  constructor(@InjectModel(Inventory.name) private inventoryModel: Model<InventoryDocument>) {}

  async create(createInventoryDto: CreateInventoryDto): Promise<Inventory> {
    const createdInventory = new this.inventoryModel(createInventoryDto);
    return createdInventory.save();
  }

  async findAll(): Promise<Inventory[]> {
    return this.inventoryModel.find().exec();
  }

  async findOne(id: string): Promise<Inventory> {
    const inventory = await this.inventoryModel.findById(id).exec();
    if (!inventory) {
      throw new NotFoundException(`Inventory with ID ${id} not found`);
    }
    return inventory;
  }

  async update(id: string, updateInventoryDto: CreateInventoryDto): Promise<Inventory> {
    const updatedInventory = await this.inventoryModel.findByIdAndUpdate(id, updateInventoryDto, { new: true }).exec();
    if (!updatedInventory) {
      throw new NotFoundException(`Inventory with ID ${id} not found`);
    }
    return updatedInventory;
  }

  async remove(id: string): Promise<Inventory> {
    const deletedInventory = await this.inventoryModel.findByIdAndDelete(id).exec();
    if (!deletedInventory) {
      throw new NotFoundException(`Inventory with ID ${id} not found`);
    }
    return deletedInventory;
  }
}
