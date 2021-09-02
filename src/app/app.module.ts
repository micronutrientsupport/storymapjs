import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { StoryOneComponent } from './pages/story-one/story-one.component';
import { StoryTwoComponent } from './pages/story-two/story-two.component';
import { StoryThreeComponent } from './pages/story-three/story-three.component';
import { StoryFourComponent } from './pages/story-four/story-four.component';
import { StoryFiveComponent } from './pages/story-five/story-five.component';
import { StorySixComponent } from './pages/story-six/story-six.component';
import { StorySevenComponent } from './pages/story-seven/story-seven.component';
import { StoryEightComponent } from './pages/story-eight/story-eight.component';
import { StoryNineComponent } from './pages/story-nine/story-nine.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    StoryOneComponent,
    StoryTwoComponent,
    StoryThreeComponent,
    StoryFourComponent,
    StoryFiveComponent,
    StorySixComponent,
    StorySevenComponent,
    StoryEightComponent,
    StoryNineComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
