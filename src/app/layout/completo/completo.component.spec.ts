import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletoComponent } from './completo.component';

describe('CompletoComponent', () => {
  let component: CompletoComponent;
  let fixture: ComponentFixture<CompletoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
