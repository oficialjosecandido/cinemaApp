import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {

  screensList: any;
  error: any;
  screenName: string | undefined;

  constructor(
    private route:ActivatedRoute,
    private service:SharedService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadCinema(); 
  }

  loadCinema(){
    const cinemaId = this.route.snapshot.paramMap.get('id');    
    this.service.getCinema(cinemaId).subscribe(
      (data) => {
        this.screensList = data as string[];
      }, 
      error => {
        this.error = error;
        console.log('deu erro', error);
      }
    );
  }

  openCreate() {
    document.getElementById('create')!.style.display = 'block';
  }

  createScreen() {
    const cinemaId = this.route.snapshot.paramMap.get('id');
    var val = {
      id: cinemaId,
      name:this.screenName
    };
    this.service.createScreen(cinemaId, val).subscribe(
      res=>{
      alert('Screen Created Successfully');      
    });

    this.router.navigate(['']);
  }

  

}
