import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrgtmobPage } from './frgtmob.page';

describe('FrgtmobPage', () => {
  let component: FrgtmobPage;
  let fixture: ComponentFixture<FrgtmobPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrgtmobPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrgtmobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
