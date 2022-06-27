import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEmpresasComponent } from './form-empresas.component';

describe('FormEmpresasComponent', () => {
  let component: FormEmpresasComponent;
  let fixture: ComponentFixture<FormEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEmpresasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
