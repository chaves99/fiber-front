export interface FoodModel {
  id?: number;
  name: string;
  baseQuantity: number;
  carbohydrate: number;
  protein: number;
  fiber?: number;
  calories: number;
  fat: number;
}

export interface FoodAddedTableInterface {
  food: FoodModel,
  quantity: number,
  kcal: number,
  protein: number,
  carbs: number,
  fat: number,
}