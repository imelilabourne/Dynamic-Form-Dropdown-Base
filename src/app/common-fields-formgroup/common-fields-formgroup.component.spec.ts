import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonFieldsFormgroupComponent } from './common-fields-formgroup.component';

describe('CommonFieldsFormgroupComponent', () => {
  let component: CommonFieldsFormgroupComponent;
  let fixture: ComponentFixture<CommonFieldsFormgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonFieldsFormgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonFieldsFormgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
