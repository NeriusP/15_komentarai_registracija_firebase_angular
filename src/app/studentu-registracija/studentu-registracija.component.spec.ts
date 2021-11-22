import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentuRegistracijaComponent } from './studentu-registracija.component';

describe('StudentuRegistracijaComponent', () => {
  let component: StudentuRegistracijaComponent;
  let fixture: ComponentFixture<StudentuRegistracijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentuRegistracijaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentuRegistracijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
