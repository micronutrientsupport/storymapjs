import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryNineComponent } from './story-nine.component';

describe('StoryNineComponent', () => {
  let component: StoryNineComponent;
  let fixture: ComponentFixture<StoryNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryNineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
