import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCaixasComponent } from './lista-caixas.component';

describe('ListaCaixasComponent', () => {
  let component: ListaCaixasComponent;
  let fixture: ComponentFixture<ListaCaixasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCaixasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCaixasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
