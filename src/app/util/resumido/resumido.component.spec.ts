import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumidoComponent } from './resumido.component';

describe('ResumidoComponent', () => {
  let component: ResumidoComponent;
  let fixture: ComponentFixture<ResumidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
