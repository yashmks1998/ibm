import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quizz } from '../models/quizz';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Questionss } from '../models/questionss';
const url='http://localhost:8085'
const baseUrl = 'http://localhost:8085/api/quiz/'
const rooturl=''
@Injectable({
  providedIn: 'root'
})

export class QuzService {
  quiza:any
  questa:any
  quest:Array<Questionss>;
  // quest:Array<any>=[];
  
  sec:number;
  timer;
  qnProgress:number;
  answer:Array<any>=[];
  answersF:Array<any>=[];
  matchAnswer:Array<number>=[];
 correctAnswer:number
  constructor(private http: HttpClient) {

   
  
    // adddEmployee(employee: Employee){
    //   console.log('In service : ', employee)
    //   return this.http.post(baseUrl, 
    //     employee,{observe : 'response'})
  
    // }
   }
   insertParticipant(name:string,email:string)
   {
var body={
name:name,
email:email
}
return this.http.post(url +'/api/InsertParticipant',body);
   }
   fetchAllQuiz(){
    // console.log('@@@@@@@@@@@@@@@@@@@@')
    console.log(this.questa);   
    return this.http.get(baseUrl);


  }
fetchQuestion(name:String)
{
  const url=baseUrl+name;
// console.log(url);
// console.log(this.http.get(url))
return this.http.get(url);

}
fetchOptions(opname:String,ppname:String)
{
  const url=baseUrl+opname+'/'+ppname;
  console.log(url);
  return this.http.get(url);
}

displayTime()
{
  return Math.floor(this.sec/3600)+':'+Math.floor(this.sec/60) + ':' +Math.floor(this.sec%60);
}
}
