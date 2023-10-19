import { Component, OnInit } from '@angular/core';
import { SeasonModel } from '@core/models/season.model';
import { SeasonService } from '@core/services/http/season.service';
import { StorageService } from '@core/services/storage.service';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.scss']
})
export class AddMealComponent implements OnInit {

  season?: SeasonModel;

  constructor(
    private storageService: StorageService,
    private seasonService: SeasonService
  ) { }

  ngOnInit(): void {
    let user = this.storageService.getUser();
    if (user && user.id) {
      this.seasonService.getActiveByIdUser(user.id).subscribe(s => this.season = s);
    }
  }



}
