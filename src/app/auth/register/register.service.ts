import {Injectable} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {User} from "../../models/user";

@Injectable()
export class AuthService {

  constructor(private http: HttpService) {
  }

  /**
   * This method get the login url for login rest service and send it to the
   * HttpService class to make the login request.
   * @param user
   * @returns {Observable<R>}
   */
  // public doLogin(user: User) {
  //   return this.centeralHttpService.post(URL.LOGIN, user);
  // }

  /**
   * This method call a service which return user location detail
   * @returns {Observable<R>}
   */
  public register(user: User) {
    return this.http.httpPost("http://localhost:8080/yourmailweb/api/auth/register", JSON.stringify(user));
  }


}

