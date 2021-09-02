import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryEightComponent } from './story-eight.component';

describe('StoryEightComponent', () => {
  let component: StoryEightComponent;
  let fixture: ComponentFixture<StoryEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryEightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
