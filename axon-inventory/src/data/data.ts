import type { InventoryItem, User } from "../models/types.js";

export const users: User[] = [
  { id: 1, username: "elazar", role: "admin" },
  { id: 2, username: "maya", role: "manager" },
  { id: 3, username: "roni", role: "staff" },
];

export const inventoryItems: InventoryItem[] = [
  { id: 101, name: "Laptop", quantity: 8, unitPrice: 1450.5 },
  { id: 102, name: "Wireless Mouse", quantity: 25, unitPrice: 24.99 },
  { id: 103, name: "Keyboard", quantity: 0, unitPrice: 59.9 },
  { id: 104, name: "Monitor", quantity: 12, unitPrice: 229.99 },
  { id: 105, name: "Printer", quantity: 0, unitPrice: 189.5 },
];
