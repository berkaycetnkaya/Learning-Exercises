import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenemparentComponent } from './denemparent.component';

describe('DenemparentComponent', () => {
  let component: DenemparentComponent;
  let fixture: ComponentFixture<DenemparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DenemparentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DenemparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
