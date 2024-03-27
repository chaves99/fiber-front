import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MealModel } from '@core/models/meal.model';

@Component({
  selector: 'fib-each-meal-card',
  templateUrl: './each-meal-card.component.html',
  styleUrls: ['./each-meal-card.component.scss']
})
export class EachMealCardComponent implements OnInit {

  @Input() meal: MealModel | undefined;

  @Output() clickEvent = new EventEmitter<MealModel>();

  macros: CalculatedMacro | undefined;

  description = '';

  ngOnInit(): void {
    this.buildDescription();
    this.calculateMacro();
  }

  calculateMacro() {
    let kcal = 0;
    let carbs = 0;
    let fat = 0;
    let prot = 0;
    this.meal?.foods?.forEach((food) => {
      if (food.totalCarbs && food.totalProtein && food.totalFat && food.totalKcal) {
        kcal += food.totalKcal;
        fat += food.totalFat;
        prot += food.totalProtein;
        carbs += food.totalCarbs;
      }
    });
    this.macros = { kcal: kcal, carbs: carbs, fat: fat, protein: prot }
  }

  cardClicked() {
    if (this.meal) {
      this.clickEvent.emit(this.meal);
    }
  }

  buildDescription(): void {
    let desc = '';
    this.meal?.foods?.forEach((food, index, arr) => {
      desc = desc.concat('(').concat(food.quantity.toString()).concat(')').concat(food.name);
      if (index === (arr.length - 1)) {
        desc = desc.concat('.')
      } else {
        desc = desc.concat(', ')
      }
    });
    this.description = desc;
  }
}

interface CalculatedMacro {
  kcal: number;
  fat: number;
  protein: number;
  carbs: number;
}
