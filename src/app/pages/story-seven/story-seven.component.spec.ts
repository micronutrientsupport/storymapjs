import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorySevenComponent } from './story-seven.component';

describe('StorySevenComponent', () => {
  let component: StorySevenComponent;
  let fixture: ComponentFixture<StorySevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorySevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorySevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
