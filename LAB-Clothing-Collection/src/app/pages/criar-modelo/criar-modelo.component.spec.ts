import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarModeloComponent } from './criar-modelo.component';

describe('CriarModeloComponent', () => {
  let component: CriarModeloComponent;
  let fixture: ComponentFixture<CriarModeloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarModeloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarModeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
