export type User = {
  id: number;
  username: string;
  role: "admin" | "manager" | "staff";
};

export type InventoryItem = {
  id: number;
  name: string;
  quantity: number;
  unitPrice: number;
};
