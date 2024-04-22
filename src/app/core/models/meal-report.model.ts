export interface MealReportModel {
    seasonId: number,
    mealDays: MealDaysReport[]
}

export interface MealDaysReport {
    day: Date | string,
    meals: MealReportMeals[],
}

export interface MealReportMeals {
    description: string,
    hour: Date | string,
    foods: MealReportFood[]
}

export interface MealReportFood {
    name: string,
    quantity: number,
    kcal: number,
    carbs: number,
    fat: number,
    protein: number
}