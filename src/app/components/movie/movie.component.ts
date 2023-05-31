
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: Movie = new Movie();
  movies: Movie[] = [];
  data: any = {}

  createMovieForm = new FormGroup({
    movieId: new FormControl(''),
    movieName: new FormControl(''),
    totalTickets: new FormControl(''),
    theaterName: new FormControl('')
  })

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
  }

  addMovie() {
    this.movie.movieId = this.createMovieForm.value.movieId
    this.movie.movieName = this.createMovieForm.value.movieName
    this.movie.totalTickets = this.createMovieForm.value.totalTickets
    this.movie.theaterName = this.createMovieForm.value.theaterName
    this.movieService.createMovie(this.movie).subscribe(data => {
      console.log(data)
      this.router.navigate(['/home'])
    },
      error => {
        console.log(error);
      })
  }
}
