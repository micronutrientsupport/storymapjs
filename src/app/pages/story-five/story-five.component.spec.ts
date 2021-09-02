import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryFiveComponent } from './story-five.component';

describe('StoryFiveComponent', () => {
  let component: StoryFiveComponent;
  let fixture: ComponentFixture<StoryFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
