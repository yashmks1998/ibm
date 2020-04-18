import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quizz } from '../models/quizz';

const baseUrl = 'http://localhost:8085/api/quiz/'
@Injectable({
  providedIn: 'root'
})

export class QuzService {

  constructor(private http: HttpClient) {

   
  
    // adddEmployee(employee: Employee){
    //   console.log('In service : ', employee)
    //   return this.http.post(baseUrl, 
    //     employee,{observe : 'response'})
  
    // }
   }
   fetchAllQuiz(){
    // console.log('@@@@@@@@@@@@@@@@@@@@')
    
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

}
