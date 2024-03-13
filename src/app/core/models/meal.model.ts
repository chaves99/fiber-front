export interface MealModel {
  id?: number,
  seasonId?: number,
  description?: string,
  dayTime?: string,
  order?: number;
  foods?: FoodMealModel[];
}

export interface FoodMealModel {
  id: number;
  name: string;
  quantity: number;
  totalCarbs?: number;
  totalKcal?: number;
  totalFat?: number;
  totalFiber?: number;
  totalProtein?: number;
}