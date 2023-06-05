import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  getAllMovie_url = 'https://utnnwjcwml.execute-api.us-west-2.amazonaws.com/FirstDeploy/movieservice';
  createMovie_url = 'https://utnnwjcwml.execute-api.us-west-2.amazonaws.com/FirstDeploy/movieservice';
  deleteMovie_url = 'https://utnnwjcwml.execute-api.us-west-2.amazonaws.com/FirstDeploy/movieservice/'
  url = 'http://localhost:8250/api/v1.0/moviebooking/';

  constructor(private http: HttpClient) { }

  createMovie(movie: Movie | any): Observable<Movie> {
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.post<Movie>(this.createMovie_url, movie, { headers });
  }
  getAllMovie(): Observable<Movie[]> {
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`

    });


    return this.http.get<Movie[]>(this.getAllMovie_url, { headers })
  }
  deleteMovie(id: any): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`

    });
    return this.http.delete<any>(`${this.deleteMovie_url}${id}`, { headers });
  }
  updateMovie(movie: any, id: number): Observable<Movie> {
    return this.http.put<Movie>(`${this.url}/${id}`, movie);
  }
}
