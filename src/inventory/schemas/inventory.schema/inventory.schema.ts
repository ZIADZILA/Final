import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Inventory {
  @Prop()
  name: string;

  @Prop()
  quantity: number;
}

export type InventoryDocument = Inventory & Document;
export const InventorySchema = SchemaFactory.createForClass(Inventory);
