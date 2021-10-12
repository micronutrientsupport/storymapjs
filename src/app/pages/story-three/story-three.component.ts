import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { ColourPalette } from 'src/assets/scss/colourPalette.enum';
import { ModalService } from '../story-three/modal/modal.service';

declare const $: any;
declare const KLStoryMap: any;



function triggerStory() {
  var storymap_options = {
    width: 7100,                // required for embed tool; width of StoryMap
    height: 2500,               // required for embed tool; height of StoryMap
    font_css: 'Calibri',              // optional; font set
    calculate_zoom: false,              // optional; defaults to true.
    zoomControl: true,
    storymap: {
      language: 'en',          // required; two-letter ISO language code
      map_type: 'zoomify',           // required
      map_as_image: true,         // required; omit connecting lines between slide locations
      map_background_color:  'white', // optional; hexadecimal color value for map background
      zoomify: {
        path: 'https://micronutrientsupport.github.io/MAPS_story2/', // required; URL path to zoomable image folder
    //    path: './assets/images/',
        width: 3500,            // required; maximum width of image
        height: 1250,           // required; maximum height of image
        tolerance: 0.9         // required; display tolerance
    },
      slides: [{
        type: "overview",      // optional; if present must be set to "overview"
        location: {            // required for all slides except "overview" slide

        //   lat: decimal,      // latitude of point on map
        //   lon: decimal       // longitude of point on map
        zoom: 10
        },
        text: {                // optional if media present

          headline: 'How does the MAPS tool make subnational estimates of dietary supply of micronutrients?',
          text:
          '          <img height="20px"; width="20px"; class="open" src="./assets/images/launch.png">       <div style="display: none;" class="modal-outer">            <div class="modal-inner">              <button class="close">X</button>              <h1>custom MODAL</h1>              <p>SOME text</p>            </div>          </div> '
                 // may contain HTML markup
        },

        media: {               // optional if text present
          url: '',       // url for featured media
          // caption: string,   // optional; brief explanation of media content
          // credit: string     // optional; creator of media content
        }
      },
      {
        location: {            // required for all slides except "overview" slide
          lat: 78.9486,      // latitude of point on map
          lon: -115,       // longitude of point on map
          zoom: 3
        },
        text: {                // optional if media present
          headline: 'Survey nutrition recall data',
          text:

           '<p class="Story1_italic">The MAPS Tool combines data where participants recall the food they have consumed, with information on the nutrient composition of the food item. </p>' + '<br>' +          'The MAPS Tool makes particular use of information from Living Standards Measurement Surveys – these surveys are undertaken relatively frequently, at a density that allows data to be presented broken down into categories such as the geographic region participants are from, what their relative wealth is or what time of year they took part in the survey.  This makes for a potential rich data source to inform our understanding of diet at the household level. However, there are assumptions which must be made using these data (as they are collected primarily to understand economic conditions) and limits to the extent to which we can use them. '
           + '<br>'
           +  '<button id="procon-button" > <a href="https://www.google.com/">Pros & Cons of LSMS Data DIALOG</a></button>'
           + '<br>'
           +  '<button id="test-button">Test Alert </button>'
           +'<p>&nbsp;</p>'

           +   '<a href="https://www.google.com/"><img src="./assets/images/video_walkthrough_play.png"><p>&nbsp;</p> video walk through </a>',
          },
        media: {               // optional if text present
          url: 'https://www.mydiasporakitchen.com/wp-content/uploads/2017/08/img_8989.jpg',       //some plate of food
          // caption: string,   // optional; brief explanation of media content
          // credit: string     // optional; creator of media content
          size: {height: "160", width: "160"}
        }
      }
    ]           // required; array of slide objects (see below)
  }
};
const storymap = new KLStoryMap.StoryMap('mapdiv', storymap_options);
window.onresize = function () {
  storymap.updateDisplay(); // this isn't automatic
}
}
@Component({
  selector: 'app-story-three',
  templateUrl: './story-three.component.html',
  styleUrls: ['./story-three.component.scss']
})
export class StoryThreeComponent implements OnInit {
  public bodyText!: string;
  public dataSourceArray:any = [
    'Household Consumption & Expenditure Surveys',
    'Food Balance Sheet data',
  ];
  public selectedItem: any;
  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    this.bodyText = 'This text can be updated in modal 1';
    triggerStory();
  }

  ngAfterViewInit() {
    document.getElementById("test-button")?.addEventListener("click", () => { this.testClick(); });

    $(".Story1_italic").css({fontStyle: 'italic', fontSize: "15px"});
    $(".Story1_paragraph").css({fontStyle: 'normal', fontSize: "15px"});
    $("#procon-button").css({backgroundColor: ColourPalette.PRIMARY, fontSize: "15px", color: "white", padding: "10px", margin:"15px"});
    $("#viewData").css({
      background:"linear-gradient(-120deg, transparent 1em, #0099C3 1.05em , #0099C3 1.5em, transparent 1.45em, transparent 2em, #0099C3 2.05em) top no-repeat",
      backgroundColor: ColourPalette.PRIMARY, color: "white", fontSize: "15px", padding: "10px", margin:"15px"});
    $('.open').click(function () {
        $('.modal-outer').fadeIn('slow');
      });
     $('.close').click(function () {
        $('.modal-outer').fadeOut('slow');
      });



    // $(".Story1_italic").click(() => {
    //   $(".Story1_italic").css({ backgroundColor: ColourPalette.PRIMARY, borderLeft: "5px solid #ccc" });
    // });
  }

  public testClick() {
    // alert('click');
    this.openModal('custom-modal-2');
  }

  openModal(id: string) {
      this.modalService.open(id);
  }

  closeModal(id: string) {
      this.modalService.close(id);
  }
}
