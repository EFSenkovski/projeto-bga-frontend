import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPessoasComponent } from './form-pessoas.component';

describe('FormPessoasComponent', () => {
  let component: FormPessoasComponent;
  let fixture: ComponentFixture<FormPessoasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPessoasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
