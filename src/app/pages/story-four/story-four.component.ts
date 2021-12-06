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
          '   <p>Navigate to the MAPS Tool Portal from the landing page. </p>   '
          + '<a href="https://develop--micronutrientsupport-tool.netlify.app/"> MAPS Tool </a>'


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
          '   <p>Users can generate estimates of dietary micronutrient supply and inadequacy using the map feature and drop down selections for various micronutrients available on Quick MAPS.</p> '


       },
        media: {               // media of datasource
          url: '',       // url for featured media  './assets/images/malawi_map.PNG',
          // caption: string,   // optional; brief explanation of media content
          // credit: string     // optional; creator of media content
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
          + '<li> Country selection</li>'
          + '<li> Micronutrient selection</li>'
          + '<li> Data source selection</li>'


       },
        media: {               // media of datasource
          url: '',       // url for featured media  './assets/images/malawi_map.PNG',
          // caption: string,   // optional; brief explanation of media content
          // credit: string     // optional; creator of media content
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
          '   <li>For the first example, under “dietary data source”, we will select “Fourth integrated household survey (IHS4)” to estimate dietary vitamin A supply, using HCES data from Malawi.</li>'
          +'<li>The MAPS Tool is supported by data from Household Consumption & Expenditure Surveys, a rich source of data that can be used to inform our understanding of diets across populations. '
          +'Samples of this size presents the opportunity to separate results by various sub-population characteristics such as the geographic region participants are from, their relative wealth, or the time of year they took part in the survey. </li>'


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
          '<li>A family of large sub-nationally-representative household surveys, which are primarily designed to provide data to characterise an array of socioeconomic conditions. </li>'
          +'<li>Food supply modules of these surveys collect data on household food consumption using a predefined list of commonly consumed food items.</li>'
          +'<li>Operated by the Food and Agriculture Organization (FAO).</li>'
          +'<a id="textlink" href="https://www.lshtm.ac.uk/aboutus/people/tang.kevin" target="_blank">Tang et al 20XX <img class="tooltip" src="../../assets/images/textlink_icon.png"></a>'
          + '<a id="weblink" href="https://journals.sagepub.com/doi/abs/10.1177/15648265120333S203" target="_blank">Weisell& Dop 2012<img class="tooltip" src="../../assets/images/weblink_icon.png"></a>'

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
          '<li>Since HCES methods collect dietary data, users will be able to explore how micronutrient supply, apparent intake, and inadequacy vary at sub-national scales within countries.           </li>'
          +'<li>For example, using HCES data, '
          +'users can use the quickMAPS tool to estimate the prevalence of inadequate apparent vitamin A supply by administrative district in Malawi.</li>'




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
          '<li>Similar to the food balance sheet data, we can identify the food groups supplying the most to the vitamin A to the diet.          </li>'
          +'<li>Here we see that in Malawi, the largest contributions to vitamin A supply from the diet is from green leafy vegetable, orange fleshed fruits and orange-fleshed sweet potatoes. </li>'
          +' <li>With HCES data, users will be able to view how contributions from different food groups vary across seasons and across subnational geographies.          </li>'
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
          '<li>Additionally, HCES data can be used to explore other sub-populations of interest and model scenarios relevant to micronutrient policies within a country.          </li>'
          +'<li>In this example, vitamin A apparent intake and contributions from large-scale food fortification is lowest in the poorest, most rural populations in Malawi.</li>'

          +'<a id="textlink" href="https://nyaspubs.onlinelibrary.wiley.com/doi/full/10.1111/nyas.14697" target="_blank">Tang et al 2021 <img class="tooltip" src="../../assets/images/textlink_icon.png"></a>'



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
    '<h2>Strenghts </h2>'
    +'<li><strong>Available</strong> for many LMICs</li>'
    +'<li>Nationally and sub-nationally <strong>representative</strong>     </li>'
    +'<li> Includes detailed data on household food consumption quantity, source of food acquisition (e.g., own production, market purchased), and money spent if purchased </li>'
  +'<li>Includes data on household characteristics (poverty, geography, living conditions, socioeconomic status), enabling subnational modeling and equity considerations </li>'
    +'<h2>Weaknesses </h2>'
    +'<li>Optimistically collected every <strong>5 years</strong>    </li>'
    +'<li> Food consumption data is subject to <strong>recall error</strong>   </li>'
    +'<li> <strong>Foods consumed away from home</strong> often inadequately captured or not captured at all    </li>'
    +'<li>Intrahousehold food distribution unknown…no insights into <strong>populations of policy priority</strong> (e.g., infants, children, women, girls)    </li>'
    +'<a id="textlink" href="https://www.lshtm.ac.uk/aboutus/people/tang.kevin" target="_blank">Tang et al 20XX <img class="tooltip" src="../../assets/images/textlink_icon.png"></a>'
 },
 media: {               // media of datasource
  url: '',       // url for featured media //graph from powerpoint
  caption: '',   // optional; brief explanation of media content
  // credit: string     // optional; creator of media content
}
},



        {
        location: {            // Zoom in on Mallai map
          lat: 60,      // latitude of point on map
          lon: -145,       // longitude of point on map
          zoom: 8
        },
        text: {                // optional if media present
          headline: 'Food Balance Sheets',
          text:
          '   <li>For the second example, under “dietary data source”, we will select ”food balance sheets” to estimate dietary vitamin A supply at national levels.</li>'
          +'<li>Food balance sheet data is available for all countries in the MAPS tool </li>'


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
          '<li>A national-level accounting framework collecting annual data on production, imports and and exports of agricultural products.</li>'
          +'<li>Reports the national ‘availability’ of 94 different food items, where estimates of national supply adjusts for food refuse and retention to develop a proxy for food available for consumption.</li>'
          +'<li>Operated by the Food and Agriculture Organization (FAO).</li>'
          +'<a id="textlink" href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0175554" target="_blank">Beal et al 2017<img class="tooltip" src="../../assets/images/textlink_icon.png"></a>'
          + '<a id="weblink" href="https://www.fao.org/faostat/en/#data/FBS" target="_blank">FAOSTAT<img class="tooltip" src="../../assets/images/weblink_icon.png"></a>'
          + '<a id="weblink" href="https://journals.sagepub.com/doi/abs/10.1177/15648265120333S203" target="_blank">Weisell& Dop 2012<img class="tooltip" src="../../assets/images/weblink_icon.png"></a>'





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
          '<li>The results using the food balance sheet data show that at the national level in Malawi, the food groups that contribute the most to the total dietary vitamin A supply are vegetables, sweet potatoes, and fruits.  </li>'



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
          '<strong>Strenghts </strong>'
          +'<li>Available for almost all countries using consistent methodology          </li>'
          +'<li>Annual estimates over a long time period         </li>'
          +'<li> mGood for: between country comparison, trends over time, ‘food system’ applications          </li>'
          +'<strong>Weaknesses </strong>'
          +'<li> ‘Food available for consumption’ ≠ consumption          </li>'
          +'<li> National average might mask sub-national heterogeneity          </li>'
          +'<li> Foods are aggregated which limits the precision of nutrition assessment          </li>'
          + '<a id="weblink" href="https://pubmed.ncbi.nlm.nih.gov/32556245/" target="_blank">Thar et al 2020<img class="tooltip" src="../../assets/images/weblink_icon.png"></a>'



       },
       media: {               // media of datasource
        url: '',       // url for featured media //graph from powerpoint
        caption: '',   // optional; brief explanation of media content
        // credit: string     // optional; creator of media content
      }
      },

///other story content for reference
//       {
//         location: {            // required for all slides except "overview" slide
//           lat: 78.9486,      // latitude of point on map
//           lon: -115,       // longitude of point on map
//           zoom: 3
//         },
//         text: {                // optional if media present
//           headline: 'Food Balance Sheets',
//           text:

//            '<p class="Story1_italic">A national-level accounting framework collecting annual data on production, imports and and exports of agricultural products.'
//            + '<br>'
//            +  '<p> </p>'
// },
//         media: {               // optional if text present
//           url: 'https://www.mydiasporakitchen.com/wp-content/uploads/2017/08/img_8989.jpg',       //some plate of food
//           // caption: string,   // optional; brief explanation of media content
//           // credit: string     // optional; creator of media content
//           size: {height: "160", width: "160"}
//         }
//       },
//       {
//         location: {            // Zoom in on Mallai map
//           lat: 75.9486,      // latitude of point on map
//           lon: -90,       // longitude of point on map
//           zoom: 4
//         },
//         text: {                // optional if media present
//           headline: 'Data holdings ',
//           text:

//            '<img height="20px"; width="20px";  class="open" src="./assets/images/expand_right.png">       <div style="display: none;" class="modal-outer">            <div class="modal-inner">              <img height="20px"; width="20px"; class="close" src="./assets/images/expand.png" >           '
//           +'   <h1>The data availability varies by country</h1>           '+
//           '   <p>Navigate the map for data availability per country</p>            </div>          </div> '
//           +'<p>&nbsp;</p>' +
//           '<button class="test-button">Link to map showing data availability per country</button>'

//        },
//         media: {               // media of datasource
//           url: './assets/images/africa_map_selection.PNG',       // url for featured media  './assets/images/malawi_map.PNG',
//           // caption: string,   // optional; brief explanation of media content
//           // credit: string     // optional; creator of media content
//         }
//       },
//       {
//         location: {            // required for all slides except "overview" slide
//           lat: 78.9486,      // latitude of point on map
//           lon: -115,       // longitude of point on map
//           zoom: 3
//         },
//         text: {                // optional if media present
//           headline: 'Benefits & Limitations of Data ',
//           text:
//           '        Select a Data Source   <img height="20px"; width="20px"; id="test-button" class="open" src="./assets/images/launch.png">   '

//        },
//         media: {               // media of datasource
//           url: '',       // url for featured media  './assets/images/Story1_benefits_limitatons.PNG',
//           // caption: string,   // optional; brief explanation of media content
//           // credit: string     // optional; creator of media content
//         }
//       },
//            {
//         location: {            // Zoom in on Mallai map
//           lat: 78.9486,      // latitude of point on map
//           lon: -140,       // longitude of point on map
//           zoom: 3
//         },
//         text: {                // optional if media present
//           headline: 'Why use these data?  ',
//           text:

//            'Where survey data exist for a nation these can provide a nationally representative estimate of dietary supply.' + '<br>'+ 'The detail possible in the results will depend on the detail in the input data. ' +'<br>'+ 'These data provide a useful overview of the food system in a nation or region, and they can form an important component of the nutrition toolkit, or design of more detailed micronutrient surveys. ',
//           },
//         media: {               // media of datasource
//           url: './assets/images/Malawi_DataSource.PNG',       // url for featured media
//           // caption: string,   // optional; brief explanation of media content
//           // credit: string     // optional; creator of media content
//         }
//       },
//       //https://selfhelpafrica.org/ie/wp-content/uploads/sites/4/2020/11/reports.jpg
//       {
//         location: {            // Zoom in on Mallai map
//           lat: 75.9486,      // latitude of point on map
//           lon: -120,       // longitude of point on map
//           zoom: 3
//         },
//         text: {                // optional if media present
//           headline: 'Data & Methods  ',
//           text:
//             'Data used:'
//             + '<br>'
//             + '✓ Malawi FCT with ...'
//             + '<br>'
//             +'✓ IHS4 LSMS data (2015-2016)'
//             +'<p>&nbsp;</p>'
//             + 'Data joined using food dictionary (LINK)'
//             + '<br>'
//             + 'See methods for full working methodology [LINK]'
//             +'<p>&nbsp;</p>'
//             + 'Key points on the IHS4 data:  '
//             + '<br>'
//             +  '➤ Data coverage is both nationally and subnationally representative for households  '
//             + '<br>'
//             +  '➤ Data collection was conducted throughout a 13 month period, allowing seasonal comparison'
//             + '<br>'
//             +  '➤ Data collection also includes (1) wealth quintiles (2) rural/urban locations'
//             +'<p>&nbsp;</p>'
//          },
//         media: {               // media of datasource
//           url: 'https://selfhelpafrica.org/ie/wp-content/uploads/sites/4/2020/11/reports.jpg',       // url for featured media  './assets/images/malawi_map.PNG',
//           // caption: string,   // optional; brief explanation of media content
//           credit: 'selfhelpafrica.org'     // optional; creator of media content
//         }
//       },
//       {
//         location: {            // Zoom in on Malawi map
//           lat: 75.9486,      // latitude of point on map
//           lon: 45,       // longitude of point on map
//           zoom: 3
//         },
//         text: {                // optional if media present
//           headline: 'What do the results show?',
//           text:
//             '➤ 50% of households vitamin A deficient when compared to dietary requirements of an adult female ' +'<p>&nbsp;</p>' + '➤ 50% of households vitamin A deficient in the three regions of Malawi. Variation in the Districts shown as the default view in the tool shown in the map.' +'<p>&nbsp;</p>' + 'Key food items are shown in the diagram above, showing how important fruit is.'
//         },
//             media: {               // media of datasource
//           url: './assets/images/Malawi_top20.PNG',       // url for featured media
//           caption: 'Top 20 food items currently not available for Vitamin A in Malawi',   // optional; brief explanation of media content
//           // credit: string     // optional; creator of media content
//         }
//       },
//       {
//         location: {            // Zoom in on Malawi map
//           lat: 75.9486,      // latitude of point on map
//           lon: 45,       // longitude of point on map
//           zoom: 5
//         },
//         text: {                // optional if media present
//           headline: 'Disaggregated results',
//           text:
//             '➤ When compared to wealth quintile <a href="https://www.lshtm.ac.uk/aboutus/people/tang.kevin"> Tang et al. 2021 </a> show how important household wealth is in influencing dietary supplies of vitamin A, with the consistently highest supply estimated in the most wealthy households, decreasing through to the lowest income households. '
//             +'<p>&nbsp;</p>'
//             +  'Link to <a href="https://www.lshtm.ac.uk/aboutus/people/tang.kevin"> Tang et al. 2021 </a>'
//             +'<p>&nbsp;</p>'
//             +  '<a href="https://www.google.com" <button id="viewData"> View data in the MAPS Tool </button></a>'
//             +  '<a href="https://www.google.com/"><img alt="video-walk-through" src="./assets/images/video_walkthrough_play.png" width=150" height="70">  <p>&nbsp;</p> video walk through </a>'
//         },
//             media: {               // media of datasource
//           url: './assets/images/Malawi_AdultFemaleEquivalent.PNG',       // url for featured media //graph from powerpoint
//           caption: 'Graph displaying AdultFemaleEquivalent data for Malawi; currently not available in the tool',   // optional; brief explanation of media content
//           // credit: string     // optional; creator of media content
//         }
//       },

// {
//   location: {            // Zoom in on Malawi map
//     lat: 65.9486,      // latitude of point on map
//     lon: 55,       // longitude of point on map
//     zoom: 5
//   },
//   text: {                // optional if media present
//     headline: 'Disaggregated results',
//     text:
//       '➤ Seasonality of supply is also seen to be really important – especially for fruit and vegetables. The Dec-Mar season for fresh mangos creates a very noticeable increase in vitamin A in the diet, as shown below.  '
//       +'<p>&nbsp;</p>'
//       +  'Link to <a href="https://www.lshtm.ac.uk/aboutus/people/tang.kevin"> Tang et al. 2021 </a>'
//       +'<p>&nbsp;</p>'
//       +  '<a href="https://www.google.com" <button id="viewData"> View data in the MAPS Tool </button></a>'
//       +'<p>&nbsp;</p>'

//       // +  '<a href="https://www.google.com/"><img alt="mangoes" src="./assets/images/Malawi_magoes.jpg" width=300" height="140"><p>&nbsp;</p> </a>'
//   },
//       media: {               // media of datasource
//     url: './assets/images/Malawi_Monthly Food.PNG',       // url for featured media //graph from powerpoint
//     caption: 'Percentage of food group making up the Vitamin A supply',   // optional; brief explanation of media content
//     // credit: string     // optional; creator of media content
//   }
// },
// {
//   location: {            // Zoom in on Malawi map
//     lat: 75.9486,      // latitude of point on map
//     lon: 70,       // longitude of point on map
//     zoom: 3
//   },
//   text: {                // optional if media present
//     headline: 'Implications of the findings',
//     text:
//     '<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/2fc87421d3504912ae8f7a7731fb2e5d" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 80%; height: 80%;"></iframe></div>'
//       + 'The strong influence of location, wealth and seasonality indicate that'
//       +
//       '<br>'
//       +
//       '➤ Not an easy thing to increase vitamin A in the diet'
//       +
//       '<br>'
//       +
//       '➤ Any more detailed/localised studies should consider these findings in their study design'
//       +
//       '<p>&nbsp;</p>'
//       +  'Link to <a href="https://www.lshtm.ac.uk/aboutus/people/tang.kevin"> Tang et al. 2021 </a>'
//       +'<p>&nbsp;</p>'
//       +  '<a href="https://www.google.com" <button id="viewData"> View data in the MAPS Tool </button></a>'
//   },
//       media: {               // media of datasource
//     // url: 'https://res.cloudinary.com/jerrick/image/upload/v1509742245/q0l5lwzd91liplir3odz.jpg',       // url for featured media //graph from powerpoint
//   //  url: './assets/videos/AB_video_loom.mp4',
//   url: '',
//     caption: '',   // optional; brief explanation of media content
//     // credit: string     // optional; creator of media content
//   }
// },
// {
//   location: {            // Zoom in on Malawi map
//     lat: 65.9486,      // latitude of point on map
//     lon: 50,       // longitude of point on map
//     zoom: 3
//   },
//   text: {                // optional if media present
//     headline: 'Pros & Cons',
//     text:
//       '➤ The nutritional content of food items are published in Food Composition Tables. Many nations have their own tables, but this is not always the case. It is also the case that very rarely does any one table contain data for all possible nutrients for all of the food items listed. This may be because some nutrients are more difficult to measure, so there is generally less data. This may also be because there was less interest in a nutrient historically, also resulting in fewer data points.  Given the difficulty in pulling together such data, many tables include data from other nations. Only very rarely is the specific location of the food item provided.       '
//       +'<p>&nbsp;</p>'
//       +  'Link to <a href="https://www.lshtm.ac.uk/aboutus/people/tang.kevin"> Tang et al. 2021 </a>'
//       +'<p>&nbsp;</p>'
//       +  '<a href="https://www.google.com" <button id="viewData"> View data in the MAPS Tool </button></a>'
//   },
//       media: {               // media of datasource
//     url: './assets/images/Malawi_magoes.jpg',       // url for featured media //graph from powerpoint
//     caption: 'Malawi food stall',   // optional; brief explanation of media content
//     // credit: string     // optional; creator of media content
//   }
// }

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

      $("#textlink").attr('title', 'Link to Beal et al 2017');
      $("#weblink").attr('title', 'Link to FAOSTAT');


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
