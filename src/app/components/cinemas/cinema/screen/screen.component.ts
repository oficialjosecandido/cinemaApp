import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private service:SharedService,
    private router: Router
  ) { }

    screenings: any;
  error: any;
  movies: any;
  screeningName: string | undefined;

  ngOnInit(): void {
    this.getScreenings();
    this.getMovies();
  }

  getScreenings(){
    const cinemaId = this.route.snapshot.paramMap.get('id');    
    this.service.getScreenings(cinemaId).subscribe(
      (data) => {
        this.screenings = data as string[];
        console.log('temos exibições?', this.screenings);
      }, 
      error => {
        this.error = error;
      }
    );
  }

  openCreate() {
    document.getElementById('createScreening')!.style.display = 'block';
  }

  createScreening() {
    const cinemaId = this.route.snapshot.paramMap.get('id');
    const screenId = this.screenings.id;
    var val = {
      id: cinemaId,
      cinemaName:this.screeningName
    };
    this.service.createScreening(cinemaId, screenId, val).subscribe(
      res=>{
      alert('Screen Created Successfully');      
    });

    this.router.navigate(['']);
  }

  getMovies(){
    this.service.getMoviesList().subscribe(
      (data) => {
        this.movies = data as string[];
        console.log('vamos a isso?', this.screenings);
      }, 
      error => {
        this.error = error;
        console.log('deu erro', error);
      }
    );
  }

}
