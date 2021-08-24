import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // storymap_data can be an URL or a Javascript object
  public storymap_data = '/static/demo/demo.json';
  public title = 'storymap';
  public storymap_options = {};

  ngOnInit() {
    const storymap_data = 'https://uploads.knightlab.com/storymapjs/8ae5bf425ed73e388274fbce519d1e43/maps-collage/index.html';

    // certain settings must be passed within a separate options object
    const storymap_options = {
      width: 600,                // required for embed tool; width of StoryMap
      height: 600,               // required for embed tool; height of StoryMap
      font_css: 'Calibri',              // optional; font set
      calculate_zoom: true,              // optional; defaults to true.
      storymap: {
        language: 'en',          // required; two-letter ISO language code
        map_type: 'osm:standard',          // required
        map_as_image: false,       // required
        // map_subdomains: string,    // optional
        slides: [{
          type: "overview",      // optional; if present must be set to "overview"
          // location: {            // required for all slides except "overview" slide
          //   lat: decimal,      // latitude of point on map
          //   lon: decimal       // longitude of point on map
          // },
          text: {                // optional if media present
            headline: 'TEST',
            text: 'TEST'       // may contain HTML markup
          },
          media: {               // optional if text present
            url: 'https://miro.medium.com/max/10368/1*1XPSskRR5Mbe3X01BmV3zw.jpeg',       // url for featured media
            // caption: string,   // optional; brief explanation of media content
            // credit: string     // optional; creator of media content
          }
        }]           // required; array of slide objects (see below)
      }
    };

    // var storymap = new KLStoryMap.StoryMap('mapdiv', storymap_data, storymap_options);
    // console.debug('call');
    // window.onresize = function (event) {
    //   storymap.updateDisplay(); // this isn't automatic
    // }

  }
}
