import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryFourComponent } from './story-four.component';

describe('StoryFourComponent', () => {
  let component: StoryFourComponent;
  let fixture: ComponentFixture<StoryFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
