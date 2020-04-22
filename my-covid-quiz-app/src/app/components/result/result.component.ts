import { Component, OnInit } from '@angular/core';
import { QuzService } from 'src/app/services/quz.service';
import { Router } from '@angular/router';
// import { QuzService } from 'src/app/services/quz.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(public quizService:QuzService,public router:Router) { }

  ngOnInit(): void {
    console.log("hello");
    this.quizService.correctAnswer=0;

    for(var i=0;i<10;i++)
    {
      console.log(this.quizService.matchAnswer[i]);
if(this.quizService.answer[i] == this.quizService.matchAnswer[i])
{
  this.quizService.correctAnswer++;
}

    }


    console.log(this.quizService.correctAnswer);
  }

}
