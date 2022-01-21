import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { ColourPalette } from 'src/assets/scss/colourPalette.enum';
import { Story2ModalService } from '../story-two/modal/story2_modal.service';

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
        path: 'https://micronutrientsupport.github.io/MAPS_story_vitA/', // required; URL path to zoomable image folder
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
        text: {           // optional if media present

          headline: 'How does the MAPS tool make subnational estimates of dietary supply of micronutrients?',
          text: ' ',
          // '          <img height="20px"; width="20px"; class="open" src="./assets/images/launch.png">       <div style="display: none;" class="modal-outer">            <div class="modal-inner">              <button class="close">X</button>              <h1>custom MODAL</h1>              <p>SOME text</p>            </div>          </div> '
                 // may contain HTML markup
        },

        media: {               // optional if text present
          url: '',       // url for featured media
          // caption: string,   // optional; brief explanation of media content
          // credit: string     // optional; creator of media content
        }
      },
      //slide1

      {
        location: {            // Zoom in on first screenshot
          lat: 82.5,      // latitude of point on map
          lon: -120,       // longitude of point on map
          zoom: 8
        },
        text: {                // optional if media present
          headline: 'MAPS Tool Landing Page',
          text:

          'MAPS is a web-hosted tool, communicating estimates of dietary micronutrient (MN) supplies and deficiency risks at national and sub-national scales in Africa.'
          + '<br>'
          + '   <p> ➤ Navigate to the MAPS Tool Portal from the landing page. </p>   '
          + '<br>'
                    + '<button  class="mat-focus-indicator mat-flat-button mat-button-base mat-primary md-ripples ripples-light"> <a href="https://develop--micronutrientsupport-tool.netlify.app/"> MAPS Tool </a> </button>'

       },
        media: {               // media of datasource
          url: '',       // url for featured media  './assets/images/malawi_map.PNG',
          // caption: string,   // optional; brief explanation of media content
          // credit: string     // optional; creator of media content
        }
      },

      {
        location: {            // Zoom in on 2nd screenshot
          lat: 82.5,      // latitude of point on map
          lon: -60,       // longitude of point on map
          zoom: 8
        },
        text: {                // optional if media present
          headline: 'The Quick MAPS tool',
          text:

          'Launch the MAPS Tool using default mode settings to explore micronutrient deficiencies in your geography of interest and possible interventions to mitigate the Micronutrient deficiencies'
          + '<br>'
          + '<p>Users can generate estimates of dietary micronutrient supply and inadequacy using the map feature and drop down selections for various micronutrients available on Quick MAPS.</p> '

       },
       media: {               // media of datasource
        url: '',
           // url for featured media
        // caption: string,   // optional; brief explanation of media content
      }
      },

      {
        location: {            // Zoom in on Mallai map
          lat: 83,      // latitude of point on map
          lon: 35,       // longitude of point on map
          zoom: 8
        },
        text: {                // optional if media present
          headline: 'Vitamin A supply/inadequacy',
          text:
          '   <p>In this example, we will demonstrate the functionality of the quickMAPS tool by estimating dietary vitamin A supply </p>  '
          + '➤ Country selection'
          + '<br>'
          + '➤  Micronutrient selection'
          + '<br>'
          + '➤  Measure of nutrient deficiency'
          + '<br>'
          + '➤  Data source selection'


       },
       media: {               // media of datasource
        url: './assets/images/selection.PNG',
           // url for featured media
        // caption: string,   // optional; brief explanation of media content
      }
      },
      {
        location: {            // Zoom in on HCES Data selection
          lat: 75,      // latitude of point on map
          lon: -140,       // longitude of point on map
          zoom: 8
        },
        text: {                // optional if media present
          headline: 'Household Consumption & Expenditure Surveys',
          text:
          '➤ For the first example, under “dietary data source”, we will select “<strong>Fourth integrated household survey (IHS4)</strong>” to estimate dietary vitamin A supply, using HCES data from Malawi.'
          + '<br>'
          +'➤ The MAPS Tool is supported by data from Household Consumption & Expenditure Surveys, a rich source of data that can be used to inform our understanding of diets across populations. '
          + '<br>'
          +'Samples of this size presents the opportunity to separate results by various sub-population characteristics such as the geographic region participants are from, their relative wealth, or the time of year they took part in the survey.'


       },
        media: {               // media of datasource
          url: '',       // url for featured media  './assets/images/malawi_map.PNG',
          // caption: string,   // optional; brief explanation of media content
          // credit: string     // optional; creator of media content
        }
      },
      {
        location: {            // Zoom in on Mallai map
          lat: 75,      // latitude of point on map
          lon: -92,       // longitude of point on map
          zoom: 8
        },
        text: {                // optional if media present
          headline: 'Household Consumption & Expenditure Surveys',
          text:
          '➤ A family of large sub-nationally-representative household surveys, which are primarily designed to provide data to characterise an array of socioeconomic conditions. '
          + '<br>'
          +'➤ Food supply modules of these surveys collect data on household food consumption using a predefined list of commonly consumed food items.'
          + '<br>'
          +'➤ Operated by the Food and Agriculture Organization (FAO).'
         +'<br>'
          +'<a class="textlink" href="https://www.lshtm.ac.uk/aboutus/people/tang.kevin" target="_blank">Tang et al 20XX <img class="tooltip" src="../../assets/images/textlink_icon.png"></a>'
          + '<a class="weblink" href="https://journals.sagepub.com/doi/abs/10.1177/15648265120333S203" target="_blank">Weisell & Dop 2012<img class="tooltip" src="../../assets/images/weblink_icon.png"></a>'

        },
       media: {               // media of datasource
        url: 'https://selfhelpafrica.org/ie/wp-content/uploads/sites/4/2020/11/reports.jpg',       // url for featured media  './assets/images/malawi_map.PNG',
        // caption: string,   // optional; brief explanation of media content
        credit: 'selfhelpafrica.org'     // optional; creator of media content
      }
      },

      {
        location: {            // Zoom in on Mallai map
          lat: 75,      // latitude of point on map
          lon: -45,       // longitude of point on map
          zoom: 8
        },
        text: {                // optional if media present
          headline: 'HCES: How to interpret results (district level maps)',
          text:
          '➤ Since HCES methods collect dietary data, users will be able to explore how micronutrient supply, apparent intake, and inadequacy vary at sub-national scales within countries.   '
          +'<br>'
          +'➤ For example, using HCES data, '
          +'users can use the quickMAPS tool to estimate the prevalence of inadequate apparent vitamin A supply by administrative district in Malawi.'




       },
       media: {               // media of datasource
        url: './assets/images/districtlevelMalawi.png',      // url for featured media  './assets/images/malawi_map.PNG',
        // caption: string,   // optional; brief explanation of media content
        credit: ''     // optional; creator of media content
      }
      },

      {
        location: {            // Zoom in on Mallai map
          lat: 76,      // latitude of point on map
          lon: 45,       // longitude of point on map
          zoom: 8
        },
        text: {                // optional if media present
          headline: 'HCES: How to interpret results (food groups)',
          text:
          '➤ Similar to the food balance sheet data, we can identify the food groups supplying the most to the vitamin A to the diet.'
          +'<br>'
          +'➤ Here we see that in Malawi, the largest contributions to vitamin A supply from the diet is from green leafy vegetable, orange fleshed fruits and orange-fleshed sweet potatoes.'
          +'<br>'
          +' ➤ With HCES data, users will be able to view how contributions from different food groups vary across seasons and across subnational geographies. '
       },
       media: {               // media of datasource
        url: '',      // url for featured media  './assets/images/malawi_map.PNG',
        // caption: string,   // optional; brief explanation of media content
        credit: ''     // optional; creator of media content
      }
      },

      {
        location: {            // Zoom in on Mallai map
          lat: 75,      // latitude of point on map
          lon: -35,       // longitude of point on map
          zoom: 8
        },
        text: {                // optional if media present
          headline: 'HCES: How to interpret results (district level maps)',
          text:
          '➤ Additionally, HCES data can be used to explore other sub-populations of interest and model scenarios relevant to micronutrient policies within a country.'
          +'<br>'
          +'➤ In this example, vitamin A apparent intake and contributions from large-scale food fortification is lowest in the poorest, most rural populations in Malawi.'
          +'<br>'
          +'<a class="textlink" href="https://nyaspubs.onlinelibrary.wiley.com/doi/full/10.1111/nyas.14697" target="_blank">Tang et al 2021 <img class="tooltip" src="../../assets/images/textlink_icon.png"></a>'


       },
       media: {               // media of datasource
        url: './assets/images/Malawi_AdultFemaleEquivalent.PNG',       // url for featured media //graph from powerpoint
        caption: 'Graph displaying AdultFemaleEquivalent data for Malawi',   // optional; brief explanation of media content
        // credit: string     // optional; creator of media content
      }
      },
//HCES: Strengths & weaknesses
{
  location: {            // Zoom in on Mallai map
    lat: 75,      // latitude of point on map
    lon: -35,       // longitude of point on map
    zoom: 8
  },
  text: {                // optional if media present
    headline: 'HCES: '
    +'<br>'
    +'Strengths & weaknesses',
    text:
    '<h4>Strenghts </h4>'
    +'<li><strong>Available</strong> for many LMICs</li>'
    +'<li>Nationally and sub-nationally <strong>representative</strong>     </li>'
    +'<li> Includes detailed data on household food consumption quantity, source of food acquisition (e.g., own production, market purchased), and money spent if purchased </li>'
  +'<li>Includes data on household characteristics (poverty, geography, living conditions, socioeconomic status), enabling subnational modeling and equity considerations </li>'
    +'<h4>Weaknesses </h4>'
    +'<li>Optimistically collected every <strong>5 years</strong>    </li>'
    +'<li> Food consumption data is subject to <strong>recall error</strong>   </li>'
    +'<li> <strong>Foods consumed away from home</strong> often inadequately captured or not captured at all    </li>'
    +'<li>Intrahousehold food distribution unknown…no insights into <strong>populations of policy priority</strong> (e.g., infants, children, women, girls)    </li>'
   +'<br>'
    +'<a class="textlink" href="https://www.lshtm.ac.uk/aboutus/people/tang.kevin" target="_blank">Tang et al 20XX <img class="tooltip" src="../../assets/images/textlink_icon.png"></a>'
 },
 media: {               // media of datasource
  url: '',       // url for featured media //graph from powerpoint
  caption: '',   // optional; brief explanation of media content
  // credit: string     // optional; creator of media content
}
},
        {
        location: {            //
          lat: 60,      // latitude of point on map
          lon: -145,       // longitude of point on map
          zoom: 8
        },
        text: {                // optional if media present
          headline: 'Food Balance Sheets',
          text:
          ' ➤ For the second example, under “dietary data source”, we will select ”food balance sheets” to estimate dietary vitamin A supply at national levels.'
          +'<br>'
          +'➤ Food balance sheet data is available for all countries in the MAPS tool '


       },
        media: {               // media of datasource
          url: '',       // url for featured media  './assets/images/malawi_map.PNG',
          // caption: string,   // optional; brief explanation of media content
          // credit: string     // optional; creator of media content
        }
      },
      {
        location: {            // Zoom in on Mallai map
          lat: 60,      // latitude of point on map
          lon: -90,       // longitude of point on map
          zoom: 8
        },
        text: {                // optional if media present
          headline: 'Food Balance Sheets',
          text:
          '➤ A national-level accounting framework collecting annual data on production, imports and and exports of agricultural products.'
          +'<br>'
          +'➤ Reports the national ‘availability’ of 94 different food items, where estimates of national supply adjusts for food refuse and retention to develop a proxy for food available for consumption.'
          +'<br>'
          +'➤ Operated by the Food and Agriculture Organization (FAO).'

          +'<br>'
          +'<a class="textlink" href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0175554" target="_blank">Beal et al 2017<img class="tooltip" src="../../assets/images/textlink_icon.png"></a>'
          + '<a class="weblink" href="https://www.fao.org/faostat/en/#data/FBS" target="_blank">FAOSTAT<img class="tooltip" src="../../assets/images/weblink_icon.png"></a>'
          + '<a class="weblink" href="https://journals.sagepub.com/doi/abs/10.1177/15648265120333S203" target="_blank">Weisell& Dop 2012<img class="tooltip" src="../../assets/images/weblink_icon.png"></a>'





       },
        media: {               // media of datasource
          url: '',       // url for featured media  './assets/images/malawi_map.PNG',
          // caption: string,   // optional; brief explanation of media content
          // credit: string     // optional; creator of media content
        }
      },


      {
        location: {            // Zoom in
          lat: 60,      // latitude of point on map
          lon: -45,       // longitude of point on map
          zoom: 8
        },
        text: {                // optional if media present
          headline: 'Food Balance Sheets: How to interpret results',
          text:
          '➤ The results using the food balance sheet data show that at the national level in Malawi, the food groups that contribute the most to the total dietary vitamin A supply are vegetables, sweet potatoes, and fruits'



       },
       media: {               // media of datasource
        url: './assets/images/Malawi_VitA_monthlyFoodItemCard.PNG',      // url for featured media  './assets/images/malawi_map.PNG',
        // caption: string,   // optional; brief explanation of media content
        credit: ''     // optional; creator of media content
      }
      },



      {
        location: {            // Zoom in on Mallai map
          lat: 60,      // latitude of point on map
          lon: -45,       // longitude of point on map
          zoom: 8
        },
        text: {                // optional if media present
          headline: 'Food Balance Sheets: '
          +'<br>'
          +'Strengths & weaknesses',
          text:
          '<h4>Strenghts </h4>'
          +'<li><strong>Available</strong>for almost all countries using <strong>consistent</strong> methodology          </li>'
          +'<li><strong>Annual</strong> estimates over a long time period         </li>'
          +'<li> Good for: <strong>between country</strong> comparison, <strong>trends</strong> over time, ‘<strong>food system</strong>’ applications          </li>'
          +'<h4>Weaknesses </h4>'
          +'<li> ‘Food available for consumption’ <strong>≠ consumption</strong>          </li>'
          +'<li> National average might mask <strong>sub-national heterogeneity</strong>          </li>'
          +'<li> Likely to have uncertainty regarding <strong>food waste, food acquired from informal cross-border trade, and homegrown foods </strong>  </li>'
          +'<br>'
          + '<a class="weblink" href="https://pubmed.ncbi.nlm.nih.gov/32556245/" target="_blank">Thar et al 2020<img class="tooltip" src="../../assets/images/weblink_icon.png"></a>'



       },
       media: {               // media of datasource
        url: '',       // url for featured media //graph from powerpoint
        caption: '',   // optional; brief explanation of media content
        // credit: string     // optional; creator of media content
      }
      },

      ]           // required; array of slide objects (see below)
    }
  };

  const storymap = new KLStoryMap.StoryMap('mapdiv', storymap_options);
  window.onresize = function () {
    storymap.updateDisplay(); // this isn't automatic
  }
}
@Component({
  selector: 'app-story-four',
  templateUrl: './story-four.component.html',
  styleUrls: ['./story-four.component.scss']
})
export class StoryFourComponent implements OnInit,AfterViewInit {
  public title = 'storymap';

  public dataSourceArray:any = [
    'Household Consumption & Expenditure Surveys',
    'Food Balance Sheet data',
  ];
  public selectedItem: any;
  constructor(private Story2ModalService: Story2ModalService) { }

  ngOnInit(): void {
    triggerStory();
  }
  ngAfterViewInit() {
    document.getElementById("test-button")?.addEventListener("click", () => { this.testClick(); });

    $(".Story1_italic").css({fontStyle: 'italic', fontSize: "15px"});
    $(".Story1_paragraph").css({fontStyle: 'normal', fontSize: "15px"});
    $(".test-button").css({backgroundColor: ColourPalette.PRIMARY, fontSize: "15px", color: "white", padding: "10px", margin:"15px"});

    $("#procon-button").css({backgroundColor: ColourPalette.PRIMARY, fontSize: "15px", color: "white", padding: "10px", margin:"15px"});
    $("#viewData").css({
      background:"linear-gradient(-120deg, transparent 1em, #0099C3 1.05em , #0099C3 1.5em, transparent 1.45em, transparent 2em, #0099C3 2.05em) top no-repeat",
      backgroundColor: ColourPalette.PRIMARY, color: "white", fontSize: "15px", padding: "10px", margin:"15px"});
    $('.open').click(function () {
        $('.modal-outer').fadeIn('slow');
        $('.open').css({display: 'none'});

      });
     $('.close').click(function () {
        $('.modal-outer').fadeOut('fast');
        $('.open').css({display: 'block'});
      });

      $(".textlink").attr('title', 'Link to article');
      $(".weblink").attr('title', 'Link to web resource');


    // $(".Story1_italic").click(() => {
    //   $(".Story1_italic").css({ backgroundColor: ColourPalette.PRIMARY, borderLeft: "5px solid #ccc" });
    // });
  }

  public testClick() {
    // alert('click');
    this.openModal('custom-modal-2');
  }
  openModal(id: string) {
    this.Story2ModalService.open(id);
}

closeModal(id: string) {
    this.Story2ModalService.close(id);
}

}
