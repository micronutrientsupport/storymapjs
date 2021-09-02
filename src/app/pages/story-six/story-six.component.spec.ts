import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorySixComponent } from './story-six.component';

describe('StorySixComponent', () => {
  let component: StorySixComponent;
  let fixture: ComponentFixture<StorySixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorySixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorySixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
