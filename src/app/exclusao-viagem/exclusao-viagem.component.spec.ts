import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusaoViagemComponent } from './exclusao-viagem.component';

describe('ExclusaoViagemComponent', () => {
  let component: ExclusaoViagemComponent;
  let fixture: ComponentFixture<ExclusaoViagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExclusaoViagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExclusaoViagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
