import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { FoodModel } from '@core/models/food.model';
import { FoodMealModel, MealModel } from '@core/models/meal.model';
import { SeasonModel } from '@core/models/season.model';
import { FoodService } from '@core/services/http/food.service';
import { MealService } from '@core/services/http/meal.service';
import { SeasonService } from '@core/services/http/season.service';
import { StorageService } from '@core/services/storage.service';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.scss']
})
export class AddMealComponent implements OnInit {

  foodFormControl = new FormControl('');
  quantityFormControl = new FormControl(0);
  hourFormControl = new FormControl('');
  dateFormControl = new FormControl('');

  season?: SeasonModel;

  displayedColumns: string[] = ["Name", "Qtd", "Kcal", "Prot", "Carbs", "Fat", "ActionButton"];
  displayedColumnsFooter: string[] = ["Name", "Qtd", "Kcal", "Prot", "Carbs", "Fat"];
  foodAdded: MatTableDataSource<FoodAddedTableInterface> = new MatTableDataSource();

  foods: FoodModel[] = [];

  filteredFoods?: Observable<FoodModel[]>;

  constructor(
    private storageService: StorageService,
    private seasonService: SeasonService,
    private foodService: FoodService,
    private mealService: MealService
  ) { }

  ngOnInit(): void {
    let user = this.storageService.getUser();
    if (user && user.id) {
      this.seasonService.getActiveByIdUser(user.id).subscribe(s => this.season = s);
    }
    
    this.foodService.getAll().subscribe(f => this.foods = f);

    this.filteredFoods = this.foodFormControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        return this._filter(value || '')
      })
    );
  }

  private _filter(value: string): FoodModel[] {
    return this.foods.filter(food => food.name.toLowerCase().includes(value.toLowerCase()));
  }

  addMealSubmit() {
    let food = this.foods.filter(food => food.name === this.foodFormControl.value)[0];
    if (this.quantityFormControl.value != null) {
      this.foodAdded.data.push({
        food: food, 
        quantity: this.quantityFormControl.value,
        kcal: (this.quantityFormControl.value * food.calories) / food.baseQuantity,
        protein: (this.quantityFormControl.value * food.protein) / food.baseQuantity,
        carbs: (this.quantityFormControl.value * food.carbohydrate) / food.baseQuantity,
        fat: (this.quantityFormControl.value * food.fat) / food.baseQuantity,
      });
      this.foodAdded._updateChangeSubscription();
      this.cleanInput();
    }
    if (this.dateFormControl.value && this.hourFormControl.value) {
      let date = new Date(this.dateFormControl.value);
    }
  }

  cleanInput(): void {
    this.foodFormControl.reset();
    this.quantityFormControl.reset();
  }

  getTotalKcal(): number {
    let sum = 0;
    this.foodAdded.data.forEach(f => {
      sum += f.kcal;
    });
    return sum;
  }

  getTotalFat(): number {
    let sum = 0;
    this.foodAdded.data.forEach(f => {
      sum += f.fat;
    });
    return sum;
  }

  getTotalProtein(): number {
    let sum = 0;
    this.foodAdded.data.forEach(f => {
      sum += f.protein;
    });
    return sum;
  }

  getTotalCarbs(): number {
    let sum = 0;
    this.foodAdded.data.forEach(f => {
      sum += f.carbs;
    });
    return sum;
  }

  removeFood(id: number): void {
    this.foodAdded.data = this.foodAdded.data.filter(fa => fa.food.id !== id);
    this.foodAdded._updateChangeSubscription();
  }

  // TODO it needs to clean the table
  addMeal(): void {
    let foodMealModel: FoodMealModel[] = [];

    this.foodAdded.data.forEach(f => {
      if (f.food.id && f.food.name && f.quantity) {
        foodMealModel.push({
          id: f.food.id,
          name: f.food.name,
          quantity: f.quantity
        });
      }
    });

    if (foodMealModel) {
      let meal: MealModel = {foods: foodMealModel};

      if (this.season) {
        meal.seasonId = this.season.id;
      }
      
      this.mealService.create(meal).subscribe(m => console.log(m));
    }

    this.cleanTable();
  }

  cleanTable(): void {
    this.foodAdded.data = [];
    this.foodAdded._updateChangeSubscription();
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
