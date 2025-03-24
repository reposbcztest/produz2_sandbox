import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimaisnewComponent } from './animaisnew.component';

describe('AnimaisnewComponent', () => {
  let component: AnimaisnewComponent;
  let fixture: ComponentFixture<AnimaisnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimaisnewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimaisnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
