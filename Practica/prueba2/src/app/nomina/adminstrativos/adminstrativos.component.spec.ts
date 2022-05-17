import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminstrativosComponent } from './adminstrativos.component';

describe('AdminstrativosComponent', () => {
  let component: AdminstrativosComponent;
  let fixture: ComponentFixture<AdminstrativosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminstrativosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminstrativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
