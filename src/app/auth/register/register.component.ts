import {Component} from "@angular/core";
import {User} from "../../models/user";
import {MONTHS, DAYS, YEARS} from "../../constant/misc.constant";
import {AuthService} from "./register.service";
@Component({
  selector: "app-registeration",
  templateUrl: "./register.component.html"
})
export class RegisterComponent {

  constructor(private authService: AuthService) {
  }

  user: User = new User();
  months = MONTHS;
  days = DAYS;
  years = YEARS;

  day: number;
  month: number;
  year: number;
  confirmPassword: string;

  register() {
    console.log(this.user);
    console.log(this.day);
    console.log(this.month);
    console.log(this.year);
    console.log(this.user.gender)
    this.user.dateOfBirth = this.year + "-" + this.month + "-" + this.day;

    this.authService.register(this.user)
      .subscribe(
        (data: any) => {
          console.log(data);
        },
        (err: any) => {
          console.log(err);
        },
      );

  }

}
