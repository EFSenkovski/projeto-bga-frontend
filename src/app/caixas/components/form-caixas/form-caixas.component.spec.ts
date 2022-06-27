import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCaixasComponent } from './form-caixas.component';

describe('FormCaixasComponent', () => {
  let component: FormCaixasComponent;
  let fixture: ComponentFixture<FormCaixasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCaixasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCaixasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
