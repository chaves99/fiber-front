import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealModel } from '@core/models/meal.model';
import { MealService } from '@core/services/http/meal.service';

@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.component.html',
  styleUrls: ['./meal-detail.component.scss']
})
export class MealDetailComponent implements OnInit {

  meal?: MealModel;

  constructor(
    private mealService: MealService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let mealId = this.route.snapshot.paramMap.get('mealId');
    if (mealId) {
      this.mealService.getByMealId(parseInt(mealId)).subscribe(m => this.meal = m);
    }
  }

  getTotalkcal(): number {
    let total = 0;
    this.meal?.foods?.forEach(food => {
      if (food.totalKcal) {
        total += food.totalKcal;
      }
    });
    return total;
  }
}
