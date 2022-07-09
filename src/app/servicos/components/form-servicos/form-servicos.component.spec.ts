import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormServicosComponent } from './form-servicos.component';

describe('FormServicosComponent', () => {
  let component: FormServicosComponent;
  let fixture: ComponentFixture<FormServicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormServicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
