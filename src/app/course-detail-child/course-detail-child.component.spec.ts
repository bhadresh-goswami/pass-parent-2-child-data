import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailChildComponent } from './course-detail-child.component';

describe('CourseDetailChildComponent', () => {
  let component: CourseDetailChildComponent;
  let fixture: ComponentFixture<CourseDetailChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseDetailChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseDetailChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
