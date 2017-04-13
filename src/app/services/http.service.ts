/**
 * This class contains method to call rest services using Http
 */
import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
@Injectable()
export class HttpService {

  constructor(private http: Http) {
  }

  /**
   * This method send single http get request
   * @param url
   * @param loadingBarFlag
   * @returns {Observable<R>}
   */
  public httpGet(url: string) {
    return this.http.get(url);
  }

  /**
   * This method send single http post requests
   * @param url
   * @param body
   * @param loadingBarFlag
   * @returns {Observable<R>}
   */
  public httpPost(url: string, body: any) {
    let header: Headers = new Headers();
    header.append('content-type', 'application/json');
    let options = new RequestOptions({headers: header});
    return this.http.post(url, body, options);
  }

}
