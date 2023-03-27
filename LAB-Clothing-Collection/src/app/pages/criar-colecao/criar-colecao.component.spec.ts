import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarColecaoComponent } from './criar-colecao.component';

describe('CriarColecaoComponent', () => {
  let component: CriarColecaoComponent;
  let fixture: ComponentFixture<CriarColecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarColecaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarColecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
