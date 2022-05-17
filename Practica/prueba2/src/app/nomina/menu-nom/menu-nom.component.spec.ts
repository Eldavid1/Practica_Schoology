import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNomComponent } from './menu-nom.component';

describe('MenuNomComponent', () => {
  let component: MenuNomComponent;
  let fixture: ComponentFixture<MenuNomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuNomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuNomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
