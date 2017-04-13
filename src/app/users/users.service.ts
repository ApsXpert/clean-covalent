import {Injectable} from "@angular/core";
import {User} from "../../services/users.service";
import {Observable} from "rxjs";
@Injectable()
export class UsersService {

  users: User[] = [
    {
      displayName: "Suzy Cuningham",
      id: "suzy.cuningham",
      email: "suzy.cuningham@gmail.com",
      created: "10/01/2015 11:05 AM",
      lastAccess: "12/23/2015 11:05 AM",
      siteAdmin: true
    },
    {
      displayName: "Bobby Daniels",
      id: "bobbyD",
      email: "bobbyD@outlook.com",
      created: "10/01/2015 11:05 AM",
      lastAccess: "12/23/2015 11:05 AM",
      siteAdmin: false
    },
    {
      displayName: "John Walker",
      id: "johnnyWalker",
      email: "johnnyWalker@blue.com",
      created: "10/01/2015 11:05 AM",
      lastAccess: "12/23/2015 11:05 AM",
      siteAdmin: false
    },
    {
      displayName: "Eddy Stevens",
      id: "eStevens",
      email: "eStevens@yahoo.com",
      created: "10/01/2015 11:05 AM",
      lastAccess: "12/23/2015 11:05 AM",
      siteAdmin: false
    },
    {
      displayName: "Jan Williams",
      id: "jDubz",
      email: "jDubz@msn.com",
      created: "10/01/2015 11:05 AM",
      lastAccess: "12/23/2015 11:05 AM",
      siteAdmin: false
    }
  ]

  getUsers(): Observable<User[]> {
    return Observable.of(this.users).delay(2000);
  }

  get(userId: string): Observable<User> {

    let u = this.users.filter(
      user => {
        if (user.id == userId)
          return user;
      }
    )

    return Observable.of(u[0]).delay(2000);
  }

  create(user: User) {
    this.users.push(user);
    return Observable.of(this.users).delay(2000);
  }

  update(id: string, _user: User) {
    this.users = this.users.filter(
      user => {
        if (user.id == id)
          return _user;
        else
          return user;

      }
    )

    return Observable.of(this.users).delay(2000);
  }

}
