import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizmainComponent } from './quizmain.component';

describe('QuizmainComponent', () => {
  let component: QuizmainComponent;
  let fixture: ComponentFixture<QuizmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
