import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllBlogsByCategoryComponent } from './view-all-blogs-by-category.component';

describe('ViewAllBlogsByCategoryComponent', () => {
  let component: ViewAllBlogsByCategoryComponent;
  let fixture: ComponentFixture<ViewAllBlogsByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllBlogsByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllBlogsByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
