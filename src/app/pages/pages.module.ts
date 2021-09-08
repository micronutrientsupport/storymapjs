import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryOneComponent } from './story-one/story-one.component';
import { StoryTwoComponent } from './story-two/story-two.component';
import { StoryThreeComponent } from './story-three/story-three.component';
import { StoryFourComponent } from './story-four/story-four.component';
import { StoryFiveComponent } from './story-five/story-five.component';
import { StorySixComponent } from './story-six/story-six.component';
import { StoryEightComponent } from './story-eight/story-eight.component';
import { StoryNineComponent } from './story-nine/story-nine.component';
import { StorySevenComponent } from './story-seven/story-seven.component';
import { TableModule } from '../dialogs/table-dialog/table.module';

import { ModalModule } from './story-three/modal/modal.module';
import { FormsModule } from '@angular/forms';
import { Story2ModalModule } from './story-two/modal/story2_modal.module';



@NgModule({
  declarations: [
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
    CommonModule,
    TableModule,
    ModalModule,
    FormsModule,
    Story2ModalModule,
  ]
})
export class PagesModule { }
