import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryThreeComponent } from './story-three.component';

describe('StoryThreeComponent', () => {
  let component: StoryThreeComponent;
  let fixture: ComponentFixture<StoryThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
