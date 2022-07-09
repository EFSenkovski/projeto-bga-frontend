import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCentroscustoComponent } from './lista-centroscusto.component';

describe('ListaCentroscustoComponent', () => {
  let component: ListaCentroscustoComponent;
  let fixture: ComponentFixture<ListaCentroscustoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCentroscustoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCentroscustoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
