/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PinguinoListComponent } from './pinguino-list.component';

describe('PinguinoListComponent', () => {
  let component: PinguinoListComponent;
  let fixture: ComponentFixture<PinguinoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinguinoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinguinoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
