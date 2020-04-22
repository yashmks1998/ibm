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

  
 
  
  title = 'Quiz';
  ngOnInit(): void {
  

  }
 
}
