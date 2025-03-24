import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosAbertosComponent } from './documentos-abertos.component';

describe('DocumentosAbertosComponent', () => {
  let component: DocumentosAbertosComponent;
  let fixture: ComponentFixture<DocumentosAbertosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentosAbertosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentosAbertosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
