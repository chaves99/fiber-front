interface SeasonBaseModel {
    name: string;
    description: string;
    caloriesGoal?: number;
    carbohydrateGoal?: number;
    proteinGoal?: number;
    fatGoal?: number;
    initialDate: string;
    finalDate?: string;
}

export interface SeasonModel extends SeasonBaseModel {
    id?: number;
    active: true;
}

export interface SeasonCreateModel extends SeasonBaseModel {
    userId: number;
  }