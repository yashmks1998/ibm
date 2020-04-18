import { Component,OnInit,Output, EventEmitter } from '@angular/core';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { Quizz } from 'src/app/models/quizz';
import { Questionss } from 'src/app/models/questionss';
import { Options } from 'src/app/models/options';
import{ QuzService } from 'src/app/services/quz.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  
  emp: Array<Quizz> = []
  constructor(private QuizService : QuzService,private router: Router) { }
  title = 'Quiz';
  ngOnInit(): void {
    
    this.QuizService.fetchAllQuiz()
    .subscribe((res:Array<Quizz>)=> {
      console.log(res);
      this.emp = res;
     
      
      
      
     
    
      
      
    })
   

  }
  quiza(employee:Quizz)
  {
console.log(employee);

console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
this.router.navigate(['quiz',employee])

  }
}
