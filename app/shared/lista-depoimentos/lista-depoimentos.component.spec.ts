import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDepoimentosComponent } from './lista-depoimentos.component';

describe('ListaDepoimentosComponent', () => {
  let component: ListaDepoimentosComponent;
  let fixture: ComponentFixture<ListaDepoimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaDepoimentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDepoimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
