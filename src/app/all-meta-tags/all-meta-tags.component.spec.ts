import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMetaTagsComponent } from './all-meta-tags.component';

describe('AllMetaTagsComponent', () => {
  let component: AllMetaTagsComponent;
  let fixture: ComponentFixture<AllMetaTagsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllMetaTagsComponent]
    });
    fixture = TestBed.createComponent(AllMetaTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
