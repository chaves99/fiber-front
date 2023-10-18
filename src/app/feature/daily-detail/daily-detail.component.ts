import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealService } from '@core/services/http/meal.service';
import { SeasonService } from '@core/services/http/season.service';

@Component({
  selector: 'app-daily-detail',
  templateUrl: './daily-detail.component.html',
  styleUrls: ['./daily-detail.component.scss']
})
export class DailyDetailComponent implements OnInit{
  
  constructor(
    private seasonService: SeasonService,
    private mealService: MealService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(obj => {
      let seasonId = obj.get('seasonId');
      // this.seasonService. TODO It needs a endpoint that return the season by id
      console.log(new Number(seasonId));
    });
  }

}
