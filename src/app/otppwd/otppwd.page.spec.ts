import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtppwdPage } from './otppwd.page';

describe('OtppwdPage', () => {
  let component: OtppwdPage;
  let fixture: ComponentFixture<OtppwdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtppwdPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtppwdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
