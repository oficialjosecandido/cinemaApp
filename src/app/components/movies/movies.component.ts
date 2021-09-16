import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  
  constructor(
    private service:SharedService,
  ) { }
  
  moviesList:any=[];
  movieName: string | undefined;

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.service.getMoviesList().subscribe(data=>{
      this.moviesList=data as string[];
      console.log('resultou?', this.moviesList);
    });
  }
  
  createMovie() {
    var val = {
      name:this.movieName,
      runtime: 120
    };
    this.service.createMovie(val).subscribe(
      res=>{
      alert('Movie Created Successfully'); 
      window.location.reload();     
    });
  }

}
