import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaOneComponent } from './meta-one.component';

describe('MetaOneComponent', () => {
  let component: MetaOneComponent;
  let fixture: ComponentFixture<MetaOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetaOneComponent]
    });
    fixture = TestBed.createComponent(MetaOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
