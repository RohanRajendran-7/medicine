import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmedicinesComponent } from './adminmedicines.component';

describe('AdminmedicinesComponent', () => {
  let component: AdminmedicinesComponent;
  let fixture: ComponentFixture<AdminmedicinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminmedicinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
