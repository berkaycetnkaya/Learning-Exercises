import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincoComponent } from './mainco.component';

describe('MaincoComponent', () => {
  let component: MaincoComponent;
  let fixture: ComponentFixture<MaincoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaincoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
