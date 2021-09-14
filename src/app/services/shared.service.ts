import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "https://develop.hybrid.iov99.com/ultraplex/api/v1/";

  constructor( private http: HttpClient ) { }

  // Cinemas

  getCinemasList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + 'cinemas/');
  }

  // Cinema

  addCinema(val:any){
    console.log('o que enviei', val);
    return this.http.put(this.APIUrl + 'cinemas', val);
  }


  updateCinema(val: any){
    return this.http.put(this.APIUrl + 'cinemas', val);
  }
  
  // Screens

  getCinema(value: string | null):Observable<any> {
    return this.http.get(this.APIUrl+`cinemas/${value}/screens`);
  }

  createScreen(id: any, val: any) {
    return this.http.put(this.APIUrl + 'cinemas/' + id + '/screens', val);
  }


  // Screenings

  getScreenings(value: string | null):Observable<any>  {
    return this.http.get(this.APIUrl+`cinemas/${value}/screenings`);
  }

  createScreening(id: any, sid: any, val: any) {
    return this.http.put(this.APIUrl + 'cinemas/' + id + '/screens/' + sid + '/screenings', val);
  }

  
  // Movies

  getMoviesList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + 'movies/');
  }

  // Bookings

  getBookingsList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + 'bookings/');
  }

}
