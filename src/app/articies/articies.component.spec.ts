import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticiesComponent } from './articies.component';

describe('ArticiesComponent', () => {
  let component: ArticiesComponent;
  let fixture: ComponentFixture<ArticiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
