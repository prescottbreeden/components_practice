import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFavoriteComponent } from './test-favorite.component';

describe('TestFavoriteComponent', () => {
  let component: TestFavoriteComponent;
  let fixture: ComponentFixture<TestFavoriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFavoriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
