import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CinemasComponent } from './components/cinemas/cinemas.component';
import { CinemaComponent } from './components/cinemas/cinema/cinema.component';
import { ScreenComponent } from './components/cinemas/cinema/screen/screen.component';
import { MoviesComponent } from './components/movies/movies.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CinemasComponent,
    CinemaComponent,
    ScreenComponent,
    MoviesComponent,
    BookingsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
