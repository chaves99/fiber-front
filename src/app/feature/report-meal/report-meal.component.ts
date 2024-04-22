import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MealReportMeals, MealReportModel } from '@core/models/meal-report.model';
import { ReportService } from '@core/services/http/report.service';

@Component({
  selector: 'fib-report-meal',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule,
    MatExpansionModule
  ],
  templateUrl: './report-meal.component.html',
  styleUrl: './report-meal.component.scss'
})
export class ReportMealComponent implements OnInit {

  reportService = inject(ReportService);

  report?: MealReportModel;

  ngOnInit(): void {
    this.reportService.report().subscribe(report => {
      this.report = report;
      console.log(this.report);
    });
  }

  getTotalKcalDay(meals: MealReportMeals[]): number {
    let total = 0;
    meals.forEach(meal => {
      total += this.getTotalKcalMeal(meal);
    });
    return total;
  }

  getTotalKcalMeal(meal: MealReportMeals): number {
    let total = 0;
    meal.foods.forEach(food => {
      total += food.kcal;
    });
    return total;
  }

}
