import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllBlogsByDateComponent } from './view-all-blogs-by-date.component';

describe('ViewAllBlogsByDateComponent', () => {
  let component: ViewAllBlogsByDateComponent;
  let fixture: ComponentFixture<ViewAllBlogsByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllBlogsByDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllBlogsByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
