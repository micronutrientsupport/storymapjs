
import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

declare const KLStoryMap: any;

function triggerStory() {

  // var storymap_options = {
  //   width: 600,                // required for embed tool; width of StoryMap
  //   height: 600,               // required for embed tool; height of StoryMap
  //   font_css: 'Calibri',              // optional; font set
  //   calculate_zoom: true,              // optional; defaults to true.
  //   storymap: {
  //     language: 'en',          // required; two-letter ISO language code
  //     map_type: 'osm:standard',          // required
  //     map_as_image: true,       // required
  //     // map_subdomains: string,    // optional
  //     slides: [{
  //       type: "overview",      // optional; if present must be set to "overview"
  //       // location: {            // required for all slides except "overview" slide
  //       //   lat: decimal,      // latitude of point on map
  //       //   lon: decimal       // longitude of point on map
  //       // },
  //       text: {                // optional if media present
  //         headline: 'TEST',
  //         text: 'TEST'       // may contain HTML markup
  //       },
  //       media: {               // optional if text present
  //         url: 'https://miro.medium.com/max/10368/1*1XPSskRR5Mbe3X01BmV3zw.jpeg',       // url for featured media
  //         // caption: string,   // optional; brief explanation of media content
  //         // credit: string     // optional; creator of media content
  //       }
  //     },
  //       {
  //         // type: "overview",      // optional; if present must be set to "overview"
  //         location: {            // required for all slides except "overview" slide
  //           lat: 55.9486,      // latitude of point on map
  //           lon: -3.1999       // longitude of point on map
  //         },
  //         text: {                // optional if media present
  //           headline: 'TEST',
  //           text: 'TEST'       // may contain HTML markup
  //         },
  //         media: {               // optional if text present
  //           url: 'https://miro.medium.com/max/10368/1*1XPSskRR5Mbe3X01BmV3zw.jpeg',       // url for featured media
  //           // caption: string,   // optional; brief explanation of media content
  //           // credit: string     // optional; creator of media content
  //         }
  //       }]           // required; array of slide objects (see below)
  //   }
  // };


  var storymap_options = {
    width: 10000,                // required for embed tool; width of StoryMap
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
        path: 'https://sveouu.github.io/MAPS_story/', // required; URL path to zoomable image folder
    //    path: './assets/images/',
        width: 5000,            // required; maximum width of image
        height: 2266,           // required; maximum height of image
        tolerance: 0.9         // required; display tolerance
    },
      slides: [{
        type: "overview",      // optional; if present must be set to "overview"
        location: {            // required for all slides except "overview" slide
        //   lat: decimal,      // latitude of point on map
        //   lon: decimal       // longitude of point on map
        zoom: 15
        },
        text: {                // optional if media present

          headline: 'How the tool works',
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
          lat: 83.9486,      // latitude of point on map
          lon: -158,       // longitude of point on map
          zoom: 8
        },
        text: {                // optional if media present
          headline: 'Country selection',
          text: 'Country selection'
           + '<br>' + '<button id="test-button" >Data Availability per country</button>'       // may contain HTML markup
        },
        media: {               // optional if text present
          url: 'https://github.com/Sveouu/MAPS_story/blob/main/africa_map_selection.PNG?raw=true',       // url for featured media
          // caption: string,   // optional; brief explanation of media content
          // credit: string     // optional; creator of media content
        }
      },
      {
        location: {            // required for all slides except "overview" slide
          lat: 81,      // latitude of point on map
          lon: -160
          ,       // longitude of point on map
          zoom: 8
        },
        text: {                // optional if media present
          headline: 'Micronutrient selection',
          text: 'The current estimate of the micronutrient situation in the population can be explored through: proxies for dietary composition [->], or through direct measures using biomarkers [->] pre-loaded in the tool, or provided by users [->]'
           + '<br>' + '<button id="test-button" >test</button>'       // may contain HTML markup
        },
        media: {               // optional if text present
          url: '',       // url for featured media
          // caption: string,   // optional; brief explanation of media content
          // credit: string     // optional; creator of media content
        }
      },
      {
        location: {            // required for all slides except "overview" slide
          lat: 81.5,      // latitude of point on map
          lon: -50
          ,       // longitude of point on map
          zoom: 4
        },
        text: {                // optional if media present
          headline: 'Baseline Map',
          text: 'Present day micronutrient information for selection'
           + '<br>' + '<button id="test-button" background-color: $color_primary >test</button>'       // may contain HTML markup
        },
        media: {               // optional if text present
          url: 'https://github.com/Sveouu/MAPS_story/blob/main/malawi_map.PNG?raw=true',       // url for featured media
          // caption: string,   // optional; brief explanation of media content
          // credit: string     // optional; creator of media content
        }
      },
      {
        location: {            // required for all slides except "overview" slide
          lat: 81,      // latitude of point on map
          lon: -10
          ,       // longitude of point on map
          zoom: 4
        },
        text: {                // optional if media present
          headline: 'Baseline Graphs',
          text: 'The current estimate of the micronutrient situation in the population can be explored through: proxies for dietary composition [->], or through direct measures using biomarkers [->] pre-loaded in the tool, or provided by users [->]'
           + '<br>' + '<button id="test-button" >test</button>'       // may contain HTML markup
        },
        media: {               // optional if text present
          url: 'https://github.com/Sveouu/MAPS_story/blob/main/MAPS_baseline_Graphs.PNG?raw=true',       // url for featured media
          // caption: string,   // optional; brief explanation of media content
          // credit: string     // optional; creator of media content
        }
      },
       {
          location: {            // required for all slides except "overview" slide
            lat: 76.5,      // latitude of point on map
            lon: -130.1999,       // longitude of point on map
            zoom: 4
          },
          text: {                // optional if media present
            headline: 'Projections',
            text: '...'       // may contain HTML markup
          },
          media: {               // optional if text present
            url: 'https://github.com/Sveouu/MAPS_story/blob/main/MAPS_Malawi%20Projections.PNG?raw=true',       // url for featured media
            // caption: string,   // optional; brief explanation of media content
            // credit: string     // optional; creator of media content
          }
        },
        {
          location: {            // required for all slides except "overview" slide
            lat: 76.5,      // latitude of point on map
            lon: -18.1999,       // longitude of point on map
          zoom: 4
        },
          text: {                // optional if media present
            headline: 'Dietary Change scenarios',
            text: '...'       // may contain HTML markup
          },
          media: {               // optional if text present
            url: '',       // url for featured media
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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, AfterViewInit {

  // storymap_data can be an URL or a Javascript object
  public title = 'storymap';
  public bla!: ElementRef;



  ngOnInit() {
    triggerStory();
  }

  ngAfterViewInit() {
    document.getElementById("test-button")?.addEventListener("click", () => { this.testClick(); });
  }

  public testClick() {
    alert('click');
  }


}
