import { Component, OnInit } from '@angular/core';
import { SeasonModel } from '@core/models/season.model';
import { SeasonService } from '@core/services/http/season.service';
import { StorageService } from '@core/services/storage.service';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss']
})
export class DailyComponent implements OnInit {

  seasons: SeasonModel[] = [];

  constructor(
    private seasonService: SeasonService,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    let user = this.storageService.getUser();
    if (user && user.id) {
      this.seasonService.getByIdUser(user.id).subscribe(s => this.seasons = s);
    }
  }

  detail(season: SeasonModel) {
    console.log(season);
  }

}
