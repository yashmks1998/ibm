import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuzService } from 'src/app/services/quz.service';
import { Questionss } from 'src/app/models/questionss';
import { Options } from 'src/app/models/options';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
arr:Array<Options>=[]
a:string
aa:string="Next";
i1:number
  constructor(private route: ActivatedRoute,public quizService:QuzService,public router:Router) { }

  ngOnInit(): void {
    this.quizService.qnProgress=0;
    this.quizService.sec=0;
    this.route.paramMap.subscribe(params => {
      console.log('***', );
      this.a=params.get('name');
this.quizService.fetchQuestion(this.a)
.subscribe((res1:Array<Questionss>)=> {
  console.log(res1);
  this.quizService.quest=res1
  this.quizService.questa=res1
  
 
  this.startTimer();
  
 

})
  
});

  }
  startTimer()
  {
    this.quizService.timer=setInterval(()=>{
      this.quizService.sec++;
    },1000)
  }
  next(){

    if(this.quizService.qnProgress == 8){
      this.aa="submit";
      this.quizService.qnProgress++;
     
    }
   else if(this.quizService.qnProgress == 9){
      clearInterval(this.quizService.timer);
      this.router.navigate(['/result']);
    }
    else{
      this.aa="Next";
      this.quizService.qnProgress++;
    }

    

  }
  Answer(id:number,i:number){
    console.log(id,i);
    this.quizService.answer[this.quizService.qnProgress]=i;
    console.log(this.quizService.answer);
    this.arr=this.quizService.quest[this.quizService.qnProgress].option;
    this.i1=0;
    for(var emp of this.arr)
    {
      
    if(emp.is_answer=="true")
    {
      console.log(this.i1);
      this.quizService.matchAnswer[this.quizService.qnProgress]=this.i1;
    
      }
      else{this.i1=this.i1+1;}
    

    }
    
    this.quizService.qnProgress++;
    console.log(this.quizService.answer,this.quizService.matchAnswer);
    if(this.quizService.qnProgress == 10){
      clearInterval(this.quizService.timer);
      this.router.navigate(['/result']);
    }
    else if(this.quizService.qnProgress==9){
      this.aa="submit"
    }
else{this.aa="Next"}
  }
  
  back(){
    this.aa='next';
    this.quizService.qnProgress--;
    


  }
}
