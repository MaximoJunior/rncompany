import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCompanyScreenComponent } from './manage-company-screen.component';

describe('ManageCompanyScreenComponent', () => {
  let component: ManageCompanyScreenComponent;
  let fixture: ComponentFixture<ManageCompanyScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCompanyScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCompanyScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
