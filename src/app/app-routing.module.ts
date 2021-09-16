import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinemaComponent } from './components/cinemas/cinema/cinema.component';
import { CinemasComponent } from './components/cinemas/cinemas.component';
import { ScreenComponent } from './components/cinemas/cinema/screen/screen.component';
import { MoviesComponent } from './components/movies/movies.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BookingComponent } from './components/movies/booking/booking.component';

const routes: Routes = [
  {path: '', component:DashboardComponent},
  {path: 'cinemas', component:CinemasComponent},
  {path: 'cinema/:id', component:CinemaComponent, children: [
    {
      path:'screen/:id', component: ScreenComponent
    },
  ]
  },
  {path: 'movies', component:MoviesComponent},
  {path: 'movie/:id', component:BookingComponent},      
  {path: 'bookings', component:BookingsComponent},    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
