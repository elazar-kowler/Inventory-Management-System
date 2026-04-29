import { inventoryItems, users } from "./data/data.js";
import { calculateTotalInventoryValue, findOutOfStockItems } from "./utils/utils.js";

const totalValue = calculateTotalInventoryValue(inventoryItems);
const outOfStockItems = findOutOfStockItems(inventoryItems);

console.log(`Total inventory value: $${totalValue.toFixed(2)}`);
console.log("Out of stock items:", outOfStockItems);
console.log("Users:", users);
