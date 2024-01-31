import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealModel } from '@core/models/meal.model';
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
    private route: ActivatedRoute
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
        console.log(`index:${index} ${food.name}:${food.quantity}`);
        if (index == 0 && 1 == arr.length) {
          description = description.concat(`${food.name}: ${food.quantity}.`);
        } else if (index == 0 && arr.length > 1) {
          description = description.concat(`${food.name}: ${food.quantity}, `);
        } else if (index > 0 && (index+1) < arr.length) {
          description = description.concat(` ${food.name}: ${food.quantity}, `);
        } else if (index > 0 && (index+1) == arr.length) {
          description = description.concat(` ${food.name}: ${food.quantity}.`);
        }
        if (food.totalKcal) {
          totalKcal += food.totalKcal;
        }
      });
    }
    return description.concat(` - total calories:${totalKcal}`);
  }

}

interface CalculatedMacro {
  kcal: number;
  fat: number;
  protein: number;
  carbs: number;
}
