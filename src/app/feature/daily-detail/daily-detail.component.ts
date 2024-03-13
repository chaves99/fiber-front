import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MealModel } from '@core/models/meal.model';
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

  openMeal(meal: MealModel) {
    // let url = getUrlByType(MenuListEnum.MEAL_DETAIL);
    // console.log(meal);
    // if (url !== undefined) {
    // }
    this.router.navigateByUrl(this.router.createUrlTree(['meal', meal.id], { relativeTo: this.route.parent }));
  }
}

interface CalculatedMacro {
  kcal: number;
  fat: number;
  protein: number;
  carbs: number;
}
