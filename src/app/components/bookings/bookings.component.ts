import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  constructor(
    private service:SharedService,
  ) { }
  
  bookingsList:any=[];

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.service.getBookingsList().subscribe(
      data=>{
      this.bookingsList=data as string[];
      console.log('resultou?', this.bookingsList);
    });
  }

}
