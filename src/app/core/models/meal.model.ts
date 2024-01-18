export interface MealModel {
    seasonId?: number,
    description?: string,
    dayTime?: string,
    order?: number;
    foods?: FoodMealModel[];
  }

export interface FoodMealModel {
    id: number;
    name: string;
    quantity: number
}