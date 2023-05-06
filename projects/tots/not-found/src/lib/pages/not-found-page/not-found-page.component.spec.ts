import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotsNotFoundPageComponent } from './not-found-page.component';

describe('NotFoundPageComponent', () => {
  let component: TotsNotFoundPageComponent;
  let fixture: ComponentFixture<TotsNotFoundPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotsNotFoundPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotsNotFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
