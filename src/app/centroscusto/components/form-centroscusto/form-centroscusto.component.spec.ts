import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCentroscustoComponent } from './form-centroscusto.component';

describe('FormCentroscustoComponent', () => {
  let component: FormCentroscustoComponent;
  let fixture: ComponentFixture<FormCentroscustoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCentroscustoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCentroscustoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
