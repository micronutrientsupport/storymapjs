import { Component, OnInit } from '@angular/core';
// declare function hello(): any;
declare const KLStoryMap: any;

function triggerStory() {
  console.debug('call');
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
    width: 600,                // required for embed tool; width of StoryMap
    height: 600,               // required for embed tool; height of StoryMap
    font_css: 'Calibri',              // optional; font set
    calculate_zoom: true,              // optional; defaults to true.
    storymap: {
      language: 'en',          // required; two-letter ISO language code
      map_type: "zoomify",           // required
      map_as_image: true,         // required; omit connecting lines between slide locations
      map_background_color:  '#808080', // optional; hexadecimal color value for map background
      zoomify: {
        path: 'https://github.com/Sveouu/MAPS_help/tree/main/TileGroup0',              // required; URL path to zoomable image folder
        width: 600,            // required; maximum width of image
        height: 600,           // required; maximum height of image
        tolerance: 1         // required; display tolerance
    },
      slides: [{
        type: "overview",      // optional; if present must be set to "overview"
        // location: {            // required for all slides except "overview" slide
        //   lat: decimal,      // latitude of point on map
        //   lon: decimal       // longitude of point on map
        // },
        text: {                // optional if media present
          headline: 'Edinburgh Castle',
          text: 'Edinburgh'       // may contain HTML markup
        },
        media: {               // optional if text present
          url: 'https://miro.medium.com/max/10368/1*1XPSskRR5Mbe3X01BmV3zw.jpeg',       // url for featured media
          // caption: string,   // optional; brief explanation of media content
          // credit: string     // optional; creator of media content
        }
      },
       {
          type: "2",      // optional; if present must be set to "overview"
          location: {            // required for all slides except "overview" slide
            lat: 55.9486,      // latitude of point on map
            lon: -3.1999       // longitude of point on map
          },
          text: {                // optional if media present
            headline: 'Old Kincardine Castle',
            text: 'Kincardine Estate, Auchterarder'       // may contain HTML markup
          },
          media: {               // optional if text present
            url: 'https://i.pinimg.com/736x/d7/00/9d/d7009de6041addff3c9bf88c7c1bc147.jpg',       // url for featured media
            // caption: string,   // optional; brief explanation of media content
            // credit: string     // optional; creator of media content
          }
        }
        // {
        //   // type: "overview",      // optional; if present must be set to "overview"
        //   location: {            // required for all slides except "overview" slide
        //     lat: 55.9486,      // latitude of point on map
        //     lon: -3.1999       // longitude of point on map
        //   },
        //   text: {                // optional if media present
        //     headline: 'TEST',
        //     text: 'TEST'       // may contain HTML markup
        //   },
        //   media: {               // optional if text present
        //     url: 'https://miro.medium.com/max/10368/1*1XPSskRR5Mbe3X01BmV3zw.jpeg',       // url for featured media
        //     // caption: string,   // optional; brief explanation of media content
        //     // credit: string     // optional; creator of media content
        //   }
        // }
      ]           // required; array of slide objects (see below)
    }
  };

  var storymap = new KLStoryMap.StoryMap('mapdiv', storymap_options);
  window.onresize = function () {
    storymap.updateDisplay(); // this isn't automatic
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // storymap_data can be an URL or a Javascript object
  public title = 'storymap';


  ngOnInit() {
    triggerStory();
    // fetch("./story.html")
    //   .then(response => {
    //     return response.text()
    //   })
    //   .then(data => {
    //     if (null != data) {
    //       console.debug('call');
    //      this.element = document.querySelector('body')?.innerHTML;
    //       this.element = data;
    //     }

    //   });

  }
}
