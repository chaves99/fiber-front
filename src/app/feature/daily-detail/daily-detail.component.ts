import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodMealModel, MealModel } from '@core/models/meal.model';
import { MenuListEnum, getUrlByType } from '@core/models/menu-list.model';
import { SeasonModel } from '@core/models/season.model';
import { MealService } from '@core/services/http/meal.service';
import { SeasonService } from '@core/services/http/season.service';

@Component({
  selector: 'app-daily-detail',
  templateUrl: './daily-detail.component.html',
  styleUrls: ['./daily-detail.component.scss']
})
export class DailyDetailComponent implements OnInit {

  season?: SeasonModel;

  meals: MealModel[] = [];

  constructor(
    private seasonService: SeasonService,
    private mealService: MealService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(obj => {
      let seasonId = obj.get('seasonId');
      if (seasonId) {
        this.seasonService.getSeasonById(parseInt(seasonId)).subscribe(season => {
          this.season = season;
          if (season.id) {
            this.mealService.getBySeasonId(season.id).subscribe(m => {
              this.meals = m;
            });
          }
        });
      }
    });
  }

  getCardDescription(meal: MealModel): string {
    let description = '';
    let totalKcal = 0;
    if (meal.foods) {
      meal.foods.forEach((food, index, arr) => {
        if (index == 0 && 1 == arr.length) {
          description = description.concat(`${food.name}: ${food.quantity}.`);
        } else if (index == 0 && arr.length > 1) {
          description = description.concat(`${food.name}: ${food.quantity}, `);
        } else if (index > 0 && (index + 1) < arr.length) {
          description = description.concat(` ${food.name}: ${food.quantity}, `);
        } else if (index > 0 && (index + 1) == arr.length) {
          description = description.concat(` ${food.name}: ${food.quantity}.`);
        }
        if (food.totalKcal) {
          totalKcal += food.totalKcal;
        }
      });
    }
    return description.concat(` - total calories:${totalKcal}`);
  }

  getTotalCarbs(foods?: FoodMealModel[]) {
    if (foods) {
      let total = foods
        .map(f => f.totalCarbs)
        .reduce((previousValue, current) => this.calculate(previousValue, current));
      return total !== undefined ? total : 0;
    }
    return 0;
  }

  calculate(previous: number | undefined, current: number | undefined): number {
    if (previous && current) {
      return previous + current;
    }
    return 0;
  }

  getTotalKcal(foods?: FoodMealModel[]): number {
    if (foods) {
      let total = foods
        .map(f => f.totalKcal)
        .reduce((previousValue, current) => this.calculate(previousValue, current));
      return total !== undefined ? total : 0;
    }
    return 0;
  }

  openMeal(meal: MealModel) {
    this.router.navigateByUrl(this.router.createUrlTree(['meal-detail', meal.id], { relativeTo: this.route.parent }));
  }
}
