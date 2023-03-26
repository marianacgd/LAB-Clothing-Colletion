import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListagemComponent } from './card-listagem.component';

describe('CardListagemComponent', () => {
  let component: CardListagemComponent;
  let fixture: ComponentFixture<CardListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardListagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
