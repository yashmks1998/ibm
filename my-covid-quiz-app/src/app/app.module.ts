import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'
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
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuizmainComponent } from './components/quizmain/quizmain.component';
import { ResultComponent } from './components/result/result.component';
import { AuthGuard } from './auth/auth.guard';
import { CommonModule } from '@angular/common';
//import { MatToolbarModule, MatIconModule, MatListModule, MatButtonModule } from  '@angular/material';
const appRoutes: Routes = [
  {path: 'register', component:  RegisterComponent},
  {path: 'quizmain', component:  QuizmainComponent},
  {path: 'navbar', component:  NavbarComponent,canActivate:[AuthGuard]},
  {path: 'result', component:  ResultComponent,canActivate:[AuthGuard]},
  {path: 'app', component:  AppComponent},
  { path: 'quiz', component:  QuizComponent},
  { path: 'question',component: QuestionComponent,canActivate:[AuthGuard]}
,
  { path: '',redirectTo:'/register',pathMatch:'full' }  
];
@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuestionComponent,
    RegisterComponent,
    NavbarComponent,
    QuizmainComponent,
    ResultComponent
  ],
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  ),
  BrowserModule,
 
  FormsModule,
  BrowserAnimationsModule,
  HttpClientModule,
  MatSidenavModule,MatCheckboxModule,
  MatToolbarModule,
    
    MatListModule,
    MatButtonModule,
    MatIconModule
  
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
