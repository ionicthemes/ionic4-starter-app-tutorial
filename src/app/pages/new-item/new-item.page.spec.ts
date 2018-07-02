import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewItemPage } from './new-item.page';

describe('NewItemPage', () => {
  let component: NewItemPage;
  let fixture: ComponentFixture<NewItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
