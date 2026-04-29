import type { InventoryItem } from "../models/types.js";

export function calculateTotalInventoryValue(items: InventoryItem[]): number {
  return items.reduce((total, item) => total + item.quantity * item.unitPrice, 0);
}

export function findOutOfStockItems(items: InventoryItem[]): InventoryItem[] {
  return items.filter((item) => item.quantity === 0);
}
