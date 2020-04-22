import { Component, OnInit } from '@angular/core';
import { QuzService } from 'src/app/services/quz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
emailpattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private quizservice:QuzService,private route:Router) { }

  ngOnInit(): void {
  }
OnSubmit(name:string,email:string){
this.quizservice.insertParticipant(name,email).subscribe(
  (data : any)=>{
    localStorage.clear();
    localStorage.setItem('participant',JSON.stringify(data));
    this.route.navigate(['/navbar']);
  }
);
}
}
