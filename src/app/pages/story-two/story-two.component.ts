import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

declare const KLStoryMap: any;

function triggerStory() {
  var storymap_options = {
    width: 5000,                // required for embed tool; width of StoryMap
    height: 4532,               // required for embed tool; height of StoryMap
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
        width: 5000,            // required; maximum width of image
        height: 3866,           // required; maximum height of image
        tolerance: 0.9         // required; display tolerance
    },
      slides: [{
        type: "overview",      // optional; if present must be set to "overview"
        location: {            // required for all slides except "overview" slide

        //   lat: decimal,      // latitude of point on map
        //   lon: decimal       // longitude of point on map
        zoom: 2
        },
        text: {                // optional if media present

          headline: 'How does the MAPS tool make subnational estimates of dietary supply of micronutrients?',
          text: 'TEXT' + '<br>' + '<button id="test-button" >test</button>'       // may contain HTML markup
        },

        media: {               // optional if text present
          url: '',       // url for featured media
          // caption: string,   // optional; brief explanation of media content
          // credit: string     // optional; creator of media content
        }
      },
      {
        location: {            // required for all slides except "overview" slide
          lat: 60.9486,      // latitude of point on map
          lon: -45,       // longitude of point on map
          zoom: 3
        },
        text: {                // optional if media present
          headline: 'Survey nutrition recall data',
          text:

           'The MAPS Tool combines data where participants recall the food they have consumed, with information on the nutrient composition of the food item.' + '<br>' +          'The MAPS Tool makes particular use of information from Living Standards Measurement Surveys – these surveys are undertaken relatively frequently, at a density that allows data to be presented broken down into categories such as the geographic region participants are from, what their relative wealth is or what time of year they took part in the survey.  This makes for a potential rich data source to inform our understanding of diet at the household level. However, there are assumptions which must be made using these data (as they are collected primarily to understand economic conditions) and limits to the extent to which we can use them. '+ '<button id="test-button" >Pros & Cons of LSMS Data DIALOG</button>' + '<br>' + '<button id="test-button" >Link to video walkthrough</button>',
          },
        media: {               // optional if text present
          url: 'https://www.mydiasporakitchen.com/wp-content/uploads/2017/08/img_8989.jpg',       // url for featured media
          // caption: string,   // optional; brief explanation of media content
          // credit: string     // optional; creator of media content
        }
      },
           {
        location: {            // Zoom in on Mallai map
          lat: 60.9486,      // latitude of point on map
          lon: -45,       // longitude of point on map
          zoom: 3
        },
        text: {                // optional if media present
          headline: 'Why use these data?  ',
          text:

           'Where survey data exist for a nation these can provide a nationally representative estimate of dietary supply.' + '<br>'+ 'The detail possible in the results will depend on the detail in the input data. ' +'<br>'+ 'These data provide a useful overview of the food system in a nation or region, and they can form an important component of the nutrition toolkit, or design of more detailed micronutrient surveys. ',
          },
        media: {               // media of datasource
          url: './assets/images/Malawi_DataSource.PNG',       // url for featured media  './assets/images/malawi_map.PNG',
          // caption: string,   // optional; brief explanation of media content
          // credit: string     // optional; creator of media content
        }
      },
      //https://selfhelpafrica.org/ie/wp-content/uploads/sites/4/2020/11/reports.jpg
      {
        location: {            // Zoom in on Mallai map
          lat: 60.9486,      // latitude of point on map
          lon: -45,       // longitude of point on map
          zoom: 3
        },
        text: {                // optional if media present
          headline: 'Data & Methods  ',
          text:
            'Data used:' + '<br>' + '✓ Malawi FCT with ...' + '<br>' +'✓ IHS4 LSMS data (2015-2016)' +'<p>&nbsp;</p>' + 'Data joined using food dictionary (LINK)' + '<br>' + 'See methods for full working methodology [LINK]'  +'<p>&nbsp;</p>' + 'Key points on the IHS4 data:  ' + '<br>' +  '➤ Data coverage is both nationally and subnationally representative for households  ' + '<br>' +  '➤ Data collection was conducted throughout a 13 month period, allowing seasonal comparison'+ '<br>' +  '➤ Data collection also includes (1) wealth quintiles (2) rural/urban locations'
         },
        media: {               // media of datasource
          url: 'https://selfhelpafrica.org/ie/wp-content/uploads/sites/4/2020/11/reports.jpg',       // url for featured media  './assets/images/malawi_map.PNG',
          // caption: string,   // optional; brief explanation of media content
          // credit: string     // optional; creator of media content
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
  selector: 'app-story-two',
  templateUrl: './story-two.component.html',
  styleUrls: ['./story-two.component.scss']
})
export class StoryTwoComponent implements OnInit {

  constructor() { }
  // storymap_data can be an URL or a Javascript object
  public title = 'storymap';


  ngOnInit(): void {
    triggerStory();
  }

  ngAfterViewInit() {
    document.getElementById("test-button")?.addEventListener("click", () => { this.testClick(); });
  }

  public testClick() {
    alert('click');
  }


}
