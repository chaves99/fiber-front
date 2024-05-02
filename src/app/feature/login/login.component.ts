import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '@core/services/http/login.service';
import { StorageService } from '@core/services/storage.service';
import { catchError, throwError } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username = "";
  password = "";

  constructor(
    private loginService: LoginService,
    private storageService: StorageService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
  ) { }

  login() {
    this.loginService.login(this.username, this.password)
      .subscribe({
        next: (user) => {
            this.storageService.setUser(user);
            this.router.navigate(['user'], { relativeTo: this.activatedRoute.parent?.parent }); // this works!
          },
          error: (err) => {
            this.snackBar.open(`Error when logging in`, 'OK', { duration: 5000 });
          }
      })
      // .subscribe(user => {
      //   this.storageService.setUser(user);
      //   this.router.navigate(['user'], { relativeTo: this.activatedRoute.parent?.parent }); // this works!
      // })
      ;
  }

}
