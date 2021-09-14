import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.css']
})
export class CinemasComponent implements OnInit {


  constructor(
    private service:SharedService,
    private router: Router,
    private route:ActivatedRoute,
  ) { }

  cinemaList:any=[];
  cinemaName: string | undefined;

  ngOnInit(): void {
    this.getCinemas();
  }

  getCinemas(): void {
    this.service.getCinemasList().subscribe(data=>{
      this.cinemaList=data as string[];
      console.log('lista completa', data);
    });
  }

  addCinema(){
    var val = {
      name:this.cinemaName
    };
    this.service.addCinema(val).subscribe(res=>{
      alert(res.toString());
    });
    this.router.navigate(['']);
  }
  
  updateCinema(){
    const cinemaId = this.route.snapshot.paramMap.get('id'); 
    var val = {
      id: cinemaId,
      name:this.cinemaName
    };
    this.service.updateCinema(val).subscribe(res=>{
      alert(res.toString());
    });
    this.router.navigate(['']);
  }

}
