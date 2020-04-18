import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { QuizComponent } from './components/quiz/quiz.component';
import { QuestionComponent } from './components/question/question.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MatSidenavModule} from '@angular/material'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
//import { MatToolbarModule, MatIconModule, MatListModule, MatButtonModule } from  '@angular/material';
const appRoutes: Routes = [
  {path: 'app', component:  AppComponent},
  { path: 'quiz', component:  QuizComponent},
  { path: 'question',component: QuestionComponent },
  
];
@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuestionComponent
  ],
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  ),
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
  MatSidenavModule,MatCheckboxModule,
  MatToolbarModule,
    
    MatListModule,
    MatButtonModule,
    MatIconModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
