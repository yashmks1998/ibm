import { Component, OnInit,Input,Output, NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { Quizz } from 'src/app/models/quizz';
import { Questionss } from 'src/app/models/questionss';
import { Options } from 'src/app/models/options';
import{ QuzService } from 'src/app/services/quz.service'
import{AppComponent} from 'src/app/app.component'
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent implements OnInit {
  @Output('data') data:String = ''
  
  emp1: Array<Questionss> = []

  emp2: Array<Options> = []
  
  emp: Array<Quizz> = []
  constructor(private QuizService : QuzService,private App:AppComponent,private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params => {
      console.log('***', params.get('name'));
  this.data=params.get('name');
  console.log(this.data)
});
console.log("ab question")
this.Questionsss();
  

  
    // this.QuizService.fetchAllQuiz()
    // .subscribe((res:Array<Quizz>)=> {
    //   console.log(res);
    //   this.emp = res;
     
      
      
      
     
    
      
      
    // })
   

  }
  Questionsss(){
    
      console.log("mai chala") ;
      
      this.QuizService.fetchQuestion(this.data)
  .subscribe((res1:Array<Questionss>)=> {
    console.log(res1);
    this.emp1=res1;
    console.log('>>>>>>>>>>>>');
   
 
  })
 
  
  }
  
  Optionsss(name2:String){
    
    // console.log(name1) ;
    
    this.QuizService.fetchOptions(this.data,name2)
.subscribe((res2:Array<Options>)=> {
  console.log(res2);
  this.emp2=res2;
  console.log('>>>>>>>>>>>>');
  
  
})


}



}

