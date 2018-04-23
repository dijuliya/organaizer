import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskofmonthComponent } from './taskofmonth.component';

describe('TaskofmonthComponent', () => {
  let component: TaskofmonthComponent;
  let fixture: ComponentFixture<TaskofmonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskofmonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskofmonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
