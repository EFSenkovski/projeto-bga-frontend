import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMovimentacoesComponent } from './form-movimentacoes.component';

describe('FormMovimentacoesComponent', () => {
  let component: FormMovimentacoesComponent;
  let fixture: ComponentFixture<FormMovimentacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMovimentacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMovimentacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
