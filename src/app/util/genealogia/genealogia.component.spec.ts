import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenealogiaComponent } from './genealogia.component';

describe('GenealogiaComponent', () => {
  let component: GenealogiaComponent;
  let fixture: ComponentFixture<GenealogiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenealogiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenealogiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
