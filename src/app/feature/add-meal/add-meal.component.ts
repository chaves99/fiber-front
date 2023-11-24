import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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

  season?: SeasonModel;

  foodAdded: FoodModel[] = [];

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
      map(value => this._filter(value || ''))
    );
  }

  private _filter(value: string): FoodModel[] {
    return this.foods.filter(food => food.name.toLowerCase().includes(value.toLowerCase()));
  }

  submit() {

  }



}
