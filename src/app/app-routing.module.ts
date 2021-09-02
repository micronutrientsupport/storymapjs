import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { StoryEightComponent } from './pages/story-eight/story-eight.component';
import { StoryFiveComponent } from './pages/story-five/story-five.component';
import { StoryFourComponent } from './pages/story-four/story-four.component';
import { StoryNineComponent } from './pages/story-nine/story-nine.component';
import { StoryOneComponent } from './pages/story-one/story-one.component';
import { StorySevenComponent } from './pages/story-seven/story-seven.component';
import { StorySixComponent } from './pages/story-six/story-six.component';
import { StoryThreeComponent } from './pages/story-three/story-three.component';
import { StoryTwoComponent } from './pages/story-two/story-two.component';

const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'story-one', component: StoryOneComponent},
  { path: 'story-two', component: StoryTwoComponent},
  { path: 'story-three', component: StoryThreeComponent},
  { path: 'story-four', component: StoryFourComponent},
  { path: 'story-five', component: StoryFiveComponent},
  { path: 'story-six', component: StorySixComponent},
  { path: 'story-seven', component: StorySevenComponent},
  { path: 'story-eight', component: StoryEightComponent},
  { path: 'story-nine', component: StoryNineComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
