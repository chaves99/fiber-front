import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '@core/services/storage.service';

@Component({
  selector: 'fib-logout',
  template: ''
})
export class LogoutComponent implements OnInit {

  constructor(
    private storageService: StorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.storageService.clearUser();
    this.router.navigateByUrl('feature/login');
  }

}
