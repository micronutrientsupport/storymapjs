import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryTwoComponent } from './story-two.component';

describe('StoryTwoComponent', () => {
  let component: StoryTwoComponent;
  let fixture: ComponentFixture<StoryTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
