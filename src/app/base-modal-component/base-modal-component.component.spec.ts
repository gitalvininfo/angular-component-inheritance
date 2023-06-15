import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseModalComponentComponent } from './base-modal-component.component';

describe('BaseModalComponentComponent', () => {
  let component: BaseModalComponentComponent;
  let fixture: ComponentFixture<BaseModalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseModalComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseModalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
