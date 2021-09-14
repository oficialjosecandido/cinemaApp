import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cinemaList: any;
  cinemaCount: any;
  movieCount: any;
  movieList: any;
  bookingList: any;
  bookingCount: any;

  constructor(
    private service:SharedService,
  ) { }



  ngOnInit(): void {
    this.getCinemas();
    this.getMovies();
    this.getBookings();
  }

  getCinemas(): void {
    this.service.getCinemasList().subscribe(
      data=>{
        this.cinemaList=data as string[];        
        this.cinemaCount = this.cinemaList.content.length;      
    });
  }

  getMovies() {
    this.service.getMoviesList().subscribe(
      data=>{
        this.movieList=data as string[];
        this.movieCount = this.movieList.content.length;      
    });
  }

  getBookings() {
    this.service.getBookingsList().subscribe(
      data=>{
        this.bookingList=data as string[];
        this.bookingCount = this.bookingList.content.length;
        console.log('bookings are....', data);      
    });
  }

}
