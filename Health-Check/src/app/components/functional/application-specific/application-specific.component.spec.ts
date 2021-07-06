import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationSpecificComponent } from './application-specific.component';

describe('ApplicationSpecificComponent', () => {
  let component: ApplicationSpecificComponent;
  let fixture: ComponentFixture<ApplicationSpecificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationSpecificComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
