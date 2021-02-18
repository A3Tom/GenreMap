import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostListenedComponent } from './most-listened.component';

describe('MostListenedComponent', () => {
  let component: MostListenedComponent;
  let fixture: ComponentFixture<MostListenedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostListenedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostListenedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
