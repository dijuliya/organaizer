import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskofdayComponent } from './taskofday.component';

describe('TaskofdayComponent', () => {
  let component: TaskofdayComponent;
  let fixture: ComponentFixture<TaskofdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskofdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskofdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
