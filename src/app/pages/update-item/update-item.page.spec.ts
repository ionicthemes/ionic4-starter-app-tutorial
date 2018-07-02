import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateItemPage } from './update-item.page';

describe('UpdateItemPage', () => {
  let component: UpdateItemPage;
  let fixture: ComponentFixture<UpdateItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
