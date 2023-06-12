import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  // getTicket_url = 'https://utnnwjcwml.execute-api.us-west-2.amazonaws.com/FirstDeploy/ticketservice'
  // bookTicket_url = 'https://utnnwjcwml.execute-api.us-west-2.amazonaws.com/FirstDeploy/ticketservice/'
  base_Url = 'http://localhost:8250/api/v1.0/moviebooking/'
  getTicket_url = 'http://localhost:8250/api/v1.0/moviebooking/ticket/all'
  bookTicket_url = 'http://localhost:8250/api/v1.0/moviebooking/'

  constructor(private http: HttpClient) { }

  getAllTicket(): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`

    });

    return this.http.get<any>(this.getTicket_url, { headers })
  }
  bookTicket(data: any, movieName: any): Observable<any> {
    return this.http.post<any>(`${this.bookTicket_url}${movieName}/book`, data)
  }
}
