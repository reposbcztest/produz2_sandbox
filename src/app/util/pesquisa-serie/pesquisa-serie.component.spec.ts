import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaSerieComponent } from './pesquisa-serie.component';

describe('PesquisaSerieComponent', () => {
  let component: PesquisaSerieComponent;
  let fixture: ComponentFixture<PesquisaSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesquisaSerieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesquisaSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
