import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FoodModel } from '@core/models/food.model';

@Component({
  selector: 'fib-food-table',
  templateUrl: './food-table.component.html',
  styleUrls: ['./food-table.component.scss']
})
export class FoodTableComponent {

  displayedColumns: string[] = ["Name", "Qtd", "Kcal", "Prot", "Carbs", "Fat", "ActionButton"];
  displayedColumnsFooter: string[] = ["Name", "Qtd", "Kcal", "Prot", "Carbs", "Fat"];

  @Input() tableFood: MatTableDataSource<FoodAddedTableInterface> = new MatTableDataSource();

  getTotalKcal(): number {
    let sum = 0;
    this.tableFood.data.forEach(f => {
      sum += f.kcal;
    });
    return sum;
  }

  getTotalFat(): number {
    let sum = 0;
    this.tableFood.data.forEach(f => {
      sum += f.fat;
    });
    return sum;
  }

  getTotalProtein(): number {
    let sum = 0;
    this.tableFood.data.forEach(f => {
      sum += f.protein;
    });
    return sum;
  }

  getTotalCarbs(): number {
    let sum = 0;
    this.tableFood.data.forEach(f => {
      sum += f.carbs;
    });
    return sum;
  }

  addFood(food: FoodModel, quantity: number) {
    this.tableFood.data.push({
      food: food, 
      quantity: quantity,
      kcal: (quantity * food.calories) / food.baseQuantity,
      protein: (quantity * food.protein) / food.baseQuantity,
      carbs: (quantity * food.carbohydrate) / food.baseQuantity,
      fat: (quantity * food.fat) / food.baseQuantity,
    });
    this.tableFood._updateChangeSubscription();
  }

  removeFood(id: number): void {
    this.tableFood.data = this.tableFood.data.filter(fa => fa.food.id !== id);
    this.tableFood._updateChangeSubscription();
  }

  cleanTable(): void {
    this.tableFood.data = [];
    this.tableFood._updateChangeSubscription();
  }

}

interface FoodAddedTableInterface {
  food: FoodModel,
  quantity: number,
  kcal: number,
  protein: number,
  carbs: number,
  fat: number,
}
