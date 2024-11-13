import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksPreviewSetupComponent } from './links-preview-setup.component';

describe('LinksPreviewSetupComponent', () => {
  let component: LinksPreviewSetupComponent;
  let fixture: ComponentFixture<LinksPreviewSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinksPreviewSetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinksPreviewSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
