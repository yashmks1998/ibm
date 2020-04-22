import { Component, OnInit } from '@angular/core';
import { QuzService } from 'src/app/services/quz.service';
import {Router } from '@angular/router';
import { Quizz } from 'src/app/models/quizz';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private QuizService : QuzService,private route:Router) { }
  emp: Array<Quizz> = []
  ngOnInit(): void {
      
    this.QuizService.fetchAllQuiz()
    .subscribe((res:Array<Quizz>)=> {
      console.log(res);
      this.emp = res;
    })
   
  }
  
  SignOut(){
    localStorage.clear();
    alert("are you sure!!!!!!");
    clearInterval(this.QuizService.timer);
    this.route.navigate(['/register']);
  }
  
  
  
  
  quiza(employee:Quizz)
  {
console.log(employee);

console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
this.route.navigate(['/question',employee])

  }
}
