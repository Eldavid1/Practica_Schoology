import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaProductComponent } from './alta-product.component';

describe('AltaProductComponent', () => {
  let component: AltaProductComponent;
  let fixture: ComponentFixture<AltaProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
