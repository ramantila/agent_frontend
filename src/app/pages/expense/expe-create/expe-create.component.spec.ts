import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeCreateComponent } from './expe-create.component';

describe('ExpeCreateComponent', () => {
  let component: ExpeCreateComponent;
  let fixture: ComponentFixture<ExpeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpeCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
