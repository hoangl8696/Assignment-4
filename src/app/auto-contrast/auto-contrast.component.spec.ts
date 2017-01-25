/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AutoContrastComponent } from './auto-contrast.component';

describe('AutoContrastComponent', () => {
  let component: AutoContrastComponent;
  let fixture: ComponentFixture<AutoContrastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoContrastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoContrastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
