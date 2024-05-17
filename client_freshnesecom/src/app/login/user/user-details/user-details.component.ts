import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../login.service";
import {ServerStatus} from "../../../enums/server.status";
import {UserModule} from "../user.module";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {DataService} from "../../../data.service";

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  providers: [LoginService],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit {
  user: UserModule;

  constructor(
    private loginService: LoginService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {

  }

  ngOnInit(): void {
    if (!this.checkUser()) return;
    this.activatedRoute.params.subscribe((params: Params) => {
      this.user.id = params['id'];
      this.loginService.findById(this.user).subscribe({
          next: (user: UserModule) => {
            this.user = user;
          },
          error: (error) => {
            if (error.status === ServerStatus.UNAUTHORISED) {
              this.router.navigate(['/404']).then(r => true);
            }
          }
        }
      )
    })
  }

  checkUser() {
    this.dataService.data.subscribe(data => {
      if (data && data.user !== null) this.user = data.user;
      else this.router.navigate(['/404']).then(r => true);
    });
    return this.user !== undefined;
  }
}
