import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url_register = 'https://utnnwjcwml.execute-api.us-west-2.amazonaws.com/FirstDeploy/login-service/register'
  url_login = 'https://utnnwjcwml.execute-api.us-west-2.amazonaws.com/FirstDeploy/login-service'

  constructor(private http: HttpClient) { }

  registerUser(user: User | any): Observable<User> {
    return this.http.post<User>(this.url_register, user);
  }

  loginUser(userDetails: any): Observable<any> {

    let headers = new HttpHeaders().set("Access-Control-Allow-Origin", "*")
    return this.http.post<loginResponse>(this.url_login, userDetails);
  }
  // getAllUser(): Observable<User[]> {
  //   let headers = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem('token')}`)
  //     .set("Access-Control-Allow-Origin", "*")
  //   return this.http.get<User[]>('http://localhost:8082/api/v1.0/moviebooking/getAllUsers', { headers });
  // }


}
interface loginResponse {
  Message: any
  Token: any
}
