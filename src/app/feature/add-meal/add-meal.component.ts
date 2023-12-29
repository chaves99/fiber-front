import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { FoodModel } from '@core/models/food.model';
import { SeasonModel } from '@core/models/season.model';
import { FoodService } from '@core/services/http/food.service';
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
  quantityFormControl = new FormControl('');

  season?: SeasonModel;

  displayedColumns: string[] = ["Name"]
  foodAdded: MatTableDataSource<FoodModel> = new MatTableDataSource();

  foods: FoodModel[] = [];

  filteredFoods?: Observable<FoodModel[]>;

  constructor(
    private storageService: StorageService,
    private seasonService: SeasonService,
    private foodService: FoodService
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
    this.foodAdded.data.push(food);
    this.foodAdded._updateChangeSubscription();
    console.log(this.foodAdded);
  }

}
