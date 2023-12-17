import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.scss']
})
export class FoodFormComponent implements OnInit {
  
  foodFormGroup = new FormGroup({
    foodName: new FormControl(),
    quantityBase: new FormControl(),
    carbs: new FormControl(),
    fiber: new FormControl(),
    protein: new FormControl(),
    calories: new FormControl(),
    fat: new FormControl(),
  });

  ngOnInit(): void {
    
  }

}
