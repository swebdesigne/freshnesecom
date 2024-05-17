import {Component, Input, NgModule, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryModule} from '../category/category.module';
import {CategoryComponent} from '../category/category.component';
import {RouterLink} from '@angular/router';
import {DropdownDirective} from "../shared/dropdown.directive";
import {
  FormControl,
  FormGroup,
  FormsModule, NgModel, ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {UserModule} from "../login/user/user.module";
import {LoginService} from "../login/login.service";
import {ServerStatus} from "../enums/server.status";
import {DataService} from "../data.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    CategoryComponent,
    FormsModule,
    RouterLink,
    DropdownDirective,
    ReactiveFormsModule
  ],
  providers: [NgModel, LoginService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  signupForm: FormGroup | any;
  @Input() category: CategoryModule;
  isAuthorisation = false;
  user: UserModule
  isRegistration: boolean = false;

  constructor(private loginService: LoginService, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [Validators.required]),
      }),
    });
  }

  logIn() {
    const data = this.signupForm.value.userData;
    this.loginService.logIn(data).subscribe({
      next: (user: UserModule) => {
        this.user = user;
        this.user.password = data.password;
        this.dataService.updateData({'user': this.user});
      },
      error: (error) => {
        this.user = undefined;
        this.signupForm.reset()
      }
    });
  }

  logOut() {
    this.loginService.logOut();
    this.user = undefined;
  }

  onCreate() {
    this.user = this.signupForm.value.userData;
    this.loginService.create(this.user).subscribe({
      next: (user: UserModule) => {
        this.user = user;
      },
      error: (error) => {
        this.user = undefined;
        this.signupForm.reset()
      }
    });
  }

  showMenuRegistration() {
    this.isRegistration = !this.isRegistration
  }

  showMenu() {
    this.isAuthorisation = !this.isAuthorisation;
  }
}
