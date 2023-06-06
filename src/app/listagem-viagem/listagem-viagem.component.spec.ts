import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemViagemComponent } from './listagem-viagem.component';

describe('ListagemViagemComponent', () => {
  let component: ListagemViagemComponent;
  let fixture: ComponentFixture<ListagemViagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemViagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemViagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
