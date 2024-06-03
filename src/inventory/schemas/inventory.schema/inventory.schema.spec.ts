import { InventorySchema } from './inventory.schema';

describe('InventorySchema', () => {
  it('should be defined', () => {
    expect(new InventorySchema()).toBeDefined();
  });
});
