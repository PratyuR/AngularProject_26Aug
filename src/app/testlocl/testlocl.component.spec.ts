import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestloclComponent } from './testlocl.component';

describe('TestloclComponent', () => {
  let component: TestloclComponent;
  let fixture: ComponentFixture<TestloclComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestloclComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestloclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
