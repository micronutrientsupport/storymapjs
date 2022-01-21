(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Development\Developers\svea\storymapJS\dan\storymapjs\src\main.ts */"zUnb");


/***/ }),

/***/ "3SbQ":
/*!**********************************************************!*\
  !*** ./src/app/pages/story-five/story-five.component.ts ***!
  \**********************************************************/
/*! exports provided: StoryFiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryFiveComponent", function() { return StoryFiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class StoryFiveComponent {
    constructor() { }
    ngOnInit() {
    }
}
StoryFiveComponent.ɵfac = function StoryFiveComponent_Factory(t) { return new (t || StoryFiveComponent)(); };
StoryFiveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StoryFiveComponent, selectors: [["app-story-five"]], decls: 2, vars: 0, template: function StoryFiveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "story-five works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9yeS1maXZlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "6qrQ":
/*!********************************************************!*\
  !*** ./src/app/pages/story-two/story-two.component.ts ***!
  \********************************************************/
/*! exports provided: StoryTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryTwoComponent", function() { return StoryTwoComponent; });
/* harmony import */ var src_assets_scss_colourPalette_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/assets/scss/colourPalette.enum */ "PVfv");
/* harmony import */ var _gabrielfins_ripple_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gabrielfins/ripple-effect */ "+s/z");
/* harmony import */ var _gabrielfins_ripple_effect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gabrielfins_ripple_effect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _story_two_modal_story2_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../story-two/modal/story2_modal.service */ "v+Uo");
/* harmony import */ var src_app_components_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/dialogs/dialog.service */ "WyYs");
/* harmony import */ var _modal_story2_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal/story2_modal.component */ "94UP");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








function StoryTwoComponent_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r3);
} }
function StoryTwoComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Benefits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Limitations ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " \u2713 High frequency (3-5 yr) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " \u2713 Nationally representative ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " \u2713 Often cover the whole year ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " ! Not specifically a nutrition survey ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " ! People forget things ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " ! People forget more things ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function StoryTwoComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Benefits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Limitations ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " \u2713 Cover most nations globally ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " \u2713 Consistent food names and reporting format ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " ! Does not represent consumption ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " ! No spatial resolution ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " ! No seasonal variation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function triggerStory() {
    var storymap_options = {
        width: 7100,
        height: 2500,
        font_css: 'Calibri',
        calculate_zoom: false,
        zoomControl: true,
        storymap: {
            language: 'en',
            map_type: 'zoomify',
            map_as_image: true,
            map_background_color: 'white',
            zoomify: {
                path: 'https://micronutrientsupport.github.io/MAPS_story2/',
                //    path: './assets/images/',
                width: 3500,
                height: 1250,
                tolerance: 0.9 // required; display tolerance
            },
            slides: [{
                    type: "overview",
                    location: {
                        //   lat: decimal,      // latitude of point on map
                        //   lon: decimal       // longitude of point on map
                        zoom: 10
                    },
                    text: {
                        headline: 'How does the MAPS tool make subnational estimates of dietary supply of micronutrients?',
                        text: '          <img height="20px"; width="20px"; class="open" src="./assets/images/launch.png">       <div style="display: none;" class="modal-outer">            <div class="modal-inner">              <button class="close">X</button>              <h1>custom MODAL</h1>              <p>SOME text</p>            </div>          </div> '
                        // may contain HTML markup
                    },
                    media: {
                        url: '',
                    }
                },
                {
                    location: {
                        lat: 78.9486,
                        lon: -115,
                        zoom: 3
                    },
                    text: {
                        headline: 'Survey nutrition recall data',
                        text: '<p class="Story1_italic">The MAPS Tool combines data where participants recall the food they have consumed, with information on the nutrient composition of the food item. </p>' + '<br>' + 'The MAPS Tool makes particular use of information from Living Standards Measurement Surveys – these surveys are undertaken relatively frequently, at a density that allows data to be presented broken down into categories such as the geographic region participants are from, what their relative wealth is or what time of year they took part in the survey.  This makes for a potential rich data source to inform our understanding of diet at the household level. However, there are assumptions which must be made using these data (as they are collected primarily to understand economic conditions) and limits to the extent to which we can use them. '
                            + '<br>'
                            + '<button id="ripple" class="mat-focus-indicator mat-flat-button mat-button-base mat-primary md-ripples ripples-light"> Pros & Cons of LSMS Data DIALOG </button>'
                            + '<br>'
                            + '<a href="https://www.google.com/"><img src="./assets/images/video_walkthrough_play.png"><p>&nbsp;</p> video walk through </a>',
                    },
                    media: {
                        url: 'https://www.mydiasporakitchen.com/wp-content/uploads/2017/08/img_8989.jpg',
                        // caption: string,   // optional; brief explanation of media content
                        // credit: string     // optional; creator of media content
                        size: { height: "160", width: "160" }
                    }
                },
                {
                    location: {
                        lat: 75.9486,
                        lon: -90,
                        zoom: 4
                    },
                    text: {
                        headline: 'Data holdings ',
                        text: '<img height="20px"; width="20px";  class="open" src="./assets/images/expand_right.png">       <div style="display: none;" class="modal-outer">            <div class="modal-inner">              <img height="20px"; width="20px"; class="close" src="./assets/images/expand.png" >           '
                            + '   <h1>The data availability varies by country</h1>           ' +
                            '   <p>Navigate the map for data availability per country</p>            </div>          </div> '
                            + '<p>&nbsp;</p>' +
                            '<button class="mat-focus-indicator mat-flat-button mat-button-base mat-primary md-ripples ripples-light" id="map-dialog-button" >Link to map showing data availability per country</button>'
                    },
                    media: {
                        url: './assets/images/africa_map_selection.PNG',
                    }
                },
                {
                    location: {
                        lat: 78.9486,
                        lon: -115,
                        zoom: 3
                    },
                    text: {
                        headline: 'Benefits & Limitations of Data',
                        text: '        Select a Data Source   <img height="20px"; width="20px"; id="test-button" class="open" src="./assets/images/launch.png">   '
                    },
                    media: {
                        url: '',
                    }
                },
                {
                    location: {
                        lat: 78.9486,
                        lon: -140,
                        zoom: 3
                    },
                    text: {
                        headline: 'Why use these data?  ',
                        text: 'Where survey data exist for a nation these can provide a nationally representative estimate of dietary supply.' + '<br>' + 'The detail possible in the results will depend on the detail in the input data. ' + '<br>' + 'These data provide a useful overview of the food system in a nation or region, and they can form an important component of the nutrition toolkit, or design of more detailed micronutrient surveys. ',
                    },
                    media: {
                        url: './assets/images/Malawi_DataSource.PNG',
                    }
                },
                //https://selfhelpafrica.org/ie/wp-content/uploads/sites/4/2020/11/reports.jpg
                {
                    location: {
                        lat: 75.9486,
                        lon: -120,
                        zoom: 3
                    },
                    text: {
                        headline: 'Data & Methods  ',
                        text: 'Data used:'
                            + '<br>'
                            + '✓ Malawi FCT with ...'
                            + '<br>'
                            + '✓ IHS4 LSMS data (2015-2016)'
                            + '<p>&nbsp;</p>'
                            + 'Data joined using food dictionary (LINK)'
                            + '<br>'
                            + 'See methods for full working methodology [LINK]'
                            + '<p>&nbsp;</p>'
                            + 'Key points on the IHS4 data:  '
                            + '<br>'
                            + '➤ Data coverage is both nationally and subnationally representative for households  '
                            + '<br>'
                            + '➤ Data collection was conducted throughout a 13 month period, allowing seasonal comparison'
                            + '<br>'
                            + '➤ Data collection also includes (1) wealth quintiles (2) rural/urban locations'
                            + '<p>&nbsp;</p>'
                    },
                    media: {
                        url: 'https://selfhelpafrica.org/ie/wp-content/uploads/sites/4/2020/11/reports.jpg',
                        // caption: string,   // optional; brief explanation of media content
                        credit: 'selfhelpafrica.org' // optional; creator of media content
                    }
                },
                {
                    location: {
                        lat: 75.9486,
                        lon: 45,
                        zoom: 3
                    },
                    text: {
                        headline: 'What do the results show?',
                        text: '➤ 50% of households vitamin A deficient when compared to dietary requirements of an adult female ' + '<p>&nbsp;</p>' + '➤ 50% of households vitamin A deficient in the three regions of Malawi. Variation in the Districts shown as the default view in the tool shown in the map.' + '<p>&nbsp;</p>' + 'Key food items are shown in the diagram above, showing how important fruit is.'
                    },
                    media: {
                        url: './assets/images/Malawi_top20.PNG',
                        caption: 'Top 20 food items currently not available for Vitamin A in Malawi',
                    }
                },
                {
                    location: {
                        lat: 75.9486,
                        lon: 45,
                        zoom: 5
                    },
                    text: {
                        headline: 'Disaggregated results',
                        text: '➤ When compared to wealth quintile <a href="https://www.lshtm.ac.uk/aboutus/people/tang.kevin"> Tang et al. 2021 </a> show how important household wealth is in influencing dietary supplies of vitamin A, with the consistently highest supply estimated in the most wealthy households, decreasing through to the lowest income households. '
                            + '<p>&nbsp;</p>'
                            + 'Link to <a class="mat-focus-indicator mat-flat-button mat-button-base mat-primary md-ripples ripples-light" href="https://www.lshtm.ac.uk/aboutus/people/tang.kevin" target="_blank"> Tang et al. 2021 </a>'
                            + '<p>&nbsp;</p>'
                            + '<button class="mat-focus-indicator mat-flat-button mat-button-base mat-primary md-ripples ripples-light"> View data in the MAPS Tool </button>'
                            + '<p>&nbsp;</p>'
                            + '<button class="mat-focus-indicator mat-flat-button mat-button-base mat-primary md-ripples ripples-light"> View data in the MAPS Tool </button>'
                    },
                    media: {
                        url: './assets/images/Malawi_AdultFemaleEquivalent.PNG',
                        caption: 'Graph displaying AdultFemaleEquivalent data for Malawi; currently not available in the tool',
                    }
                },
                {
                    location: {
                        lat: 65.9486,
                        lon: 55,
                        zoom: 5
                    },
                    text: {
                        headline: 'Disaggregated results',
                        text: '➤ Seasonality of supply is also seen to be really important – especially for fruit and vegetables. The Dec-Mar season for fresh mangos creates a very noticeable increase in vitamin A in the diet, as shown below.  '
                            + '<p>&nbsp;</p>'
                            + 'Link to <a class="mat-focus-indicator mat-flat-button mat-button-base mat-primary md-ripples ripples-light" href="https://www.lshtm.ac.uk/aboutus/people/tang.kevin" target="_blank"> Tang et al. 2021 </a>'
                            + '<p>&nbsp;</p>'
                            + '<button class="mat-focus-indicator mat-flat-button mat-button-base mat-primary md-ripples ripples-light"> View data in the MAPS Tool </button>'
                            + '<p>&nbsp;</p>'
                        // +  '<a href="https://www.google.com/"><img alt="mangoes" src="./assets/images/Malawi_magoes.jpg" width=300" height="140"><p>&nbsp;</p> </a>'
                    },
                    media: {
                        url: './assets/images/Malawi_Monthly Food.PNG',
                        caption: 'Percentage of food group making up the Vitamin A supply',
                    }
                },
                {
                    location: {
                        lat: 75.9486,
                        lon: 70,
                        zoom: 3
                    },
                    text: {
                        headline: 'Implications of the findings',
                        text: '<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/2fc87421d3504912ae8f7a7731fb2e5d" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 80%; height: 80%;"></iframe></div>'
                            + 'The strong influence of location, wealth and seasonality indicate that'
                            +
                                '<br>'
                            +
                                '➤ Not an easy thing to increase vitamin A in the diet'
                            +
                                '<br>'
                            +
                                '➤ Any more detailed/localised studies should consider these findings in their study design'
                            +
                                '<p>&nbsp;</p>'
                            + 'Link to <a class="mat-focus-indicator mat-flat-button mat-button-base mat-primary md-ripples ripples-light" href="https://www.lshtm.ac.uk/aboutus/people/tang.kevin" target="_blank"> Tang et al. 2021 </a>'
                            + '<p>&nbsp;</p>'
                            + '<button class="mat-focus-indicator mat-flat-button mat-button-base mat-primary md-ripples ripples-light"> View data in the MAPS Tool </button>'
                    },
                    media: {
                        // url: 'https://res.cloudinary.com/jerrick/image/upload/v1509742245/q0l5lwzd91liplir3odz.jpg',       // url for featured media //graph from powerpoint
                        //  url: './assets/videos/AB_video_loom.mp4',
                        url: '',
                        caption: '',
                    }
                },
                {
                    location: {
                        lat: 65.9486,
                        lon: 50,
                        zoom: 3
                    },
                    text: {
                        headline: 'Pros & Cons',
                        text: '➤ The nutritional content of food items are published in Food Composition Tables. Many nations have their own tables, but this is not always the case. It is also the case that very rarely does any one table contain data for all possible nutrients for all of the food items listed. This may be because some nutrients are more difficult to measure, so there is generally less data. This may also be because there was less interest in a nutrient historically, also resulting in fewer data points.  Given the difficulty in pulling together such data, many tables include data from other nations. Only very rarely is the specific location of the food item provided.       '
                            + '<p>&nbsp;</p>'
                            + 'Link to <a class="mat-focus-indicator mat-flat-button mat-button-base mat-primary md-ripples ripples-light" href="https://www.lshtm.ac.uk/aboutus/people/tang.kevin" target="_blank"> Tang et al. 2021 </a>'
                            + '<p>&nbsp;</p>'
                            + '<button class="mat-focus-indicator mat-flat-button mat-button-base mat-primary md-ripples ripples-light"> View data in the MAPS Tool </button>'
                    },
                    media: {
                        url: './assets/images/Malawi_magoes.jpg',
                        caption: 'Malawi food stall',
                    }
                }
            ] // required; array of slide objects (see below)
        }
    };
    const storymap = new KLStoryMap.StoryMap('mapdiv', storymap_options);
    window.onresize = function () {
        storymap.updateDisplay(); // this isn't automatic
    };
}
class StoryTwoComponent {
    constructor(Story2ModalService, dialogService) {
        this.Story2ModalService = Story2ModalService;
        this.dialogService = dialogService;
        this.title = 'storymap';
        this.dataSourceArray = [
            'Household Consumption & Expenditure Surveys',
            'Food Balance Sheet data',
        ];
    }
    ngOnInit() {
        triggerStory();
    }
    ngAfterViewInit() {
        // document.getElementById("map-dialog-button")?.addEventListener("click", () => { this.testClick(); });
        // $('#ripple').addClass('md-ripples ripples-light');
        $(".Story1_italic").css({ fontStyle: 'italic', fontSize: "15px" });
        $(".Story1_paragraph").css({ fontStyle: 'normal', fontSize: "15px" });
        $(".test-button").css({ backgroundColor: src_assets_scss_colourPalette_enum__WEBPACK_IMPORTED_MODULE_0__["ColourPalette"].PRIMARY, fontSize: "15px", color: "white", padding: "10px", margin: "15px" });
        $("#procon-button").css({ backgroundColor: src_assets_scss_colourPalette_enum__WEBPACK_IMPORTED_MODULE_0__["ColourPalette"].PRIMARY, fontSize: "15px", color: "white", padding: "10px", margin: "15px" });
        $("#viewData").css({
            background: "linear-gradient(-120deg, transparent 1em, #0099C3 1.05em , #0099C3 1.5em, transparent 1.45em, transparent 2em, #0099C3 2.05em) top no-repeat",
            backgroundColor: src_assets_scss_colourPalette_enum__WEBPACK_IMPORTED_MODULE_0__["ColourPalette"].PRIMARY, color: "white", fontSize: "15px", padding: "10px", margin: "15px"
        });
        $('.open').click(function () {
            $('.modal-outer').fadeIn('slow');
            $('.open').css({ display: 'none' });
        });
        $('.close').click(function () {
            $('.modal-outer').fadeOut('fast');
            $('.open').css({ display: 'block' });
        });
        $('#map-dialog-button').click(() => {
            this.dialogService.openStoryTwoDataAvaliabilityPercountryComponent();
        });
        // $(".Story1_italic").click(() => {
        //   $(".Story1_italic").css({ backgroundColor: ColourPalette.PRIMARY, borderLeft: "5px solid #ccc" });
        // });
    }
    testClick() {
        alert('click');
        // this.openModal('custom-modal-2');
    }
    openModal(id) {
        this.Story2ModalService.open(id);
    }
    closeModal(id) {
        this.Story2ModalService.close(id);
    }
}
StoryTwoComponent.ɵfac = function StoryTwoComponent_Factory(t) { return new (t || StoryTwoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_story_two_modal_story2_modal_service__WEBPACK_IMPORTED_MODULE_3__["Story2ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_components_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"])); };
StoryTwoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: StoryTwoComponent, selectors: [["app-story-two"]], decls: 11, vars: 4, consts: [["id", "mapdiv", 2, "width", "100%", "height", "90%"], ["id", "test", 2, "width", "100%", "height", "600px", "background-color", "aliceblue"], ["id", "custom-modal-2"], [3, "ngModel", "ngModelChange"], ["value", "undefined", "selected", "", 2, "color", "grey"], [4, "ngFor", "ngForOf"], [4, "ngIf"]], template: function StoryTwoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "story2-modal", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Select a Data Source");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function StoryTwoComponent_Template_select_ngModelChange_5_listener($event) { return ctx.selectedItem = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Select the Survey Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, StoryTwoComponent_option_8_Template, 2, 1, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, StoryTwoComponent_span_9_Template, 20, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, StoryTwoComponent_span_10_Template, 18, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.dataSourceArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedItem == "Household Consumption & Expenditure Surveys");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedItem == "Food Balance Sheet data");
    } }, directives: [_modal_story2_modal_component__WEBPACK_IMPORTED_MODULE_5__["Story2ModalComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: ["#test-button[_ngcontent-%COMP%] {\n  background-color: #00BFA5;\n  border: 1px solid #00BFA5;\n}\n\n.modal-outer[_ngcontent-%COMP%] {\n  background-color: greenyellow;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100;\n  height: 100;\n}\n\n.modal-inner[_ngcontent-%COMP%] {\n  background-color: lightblue;\n  width: 500px;\n  height: 300px;\n  padding: 25px;\n  margin: 15%;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 800px;\n}\n\ntd.mat-cell[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n  word-break: break-all;\n}\n\noption[_ngcontent-%COMP%] {\n  width: auto;\n  padding: 15px;\n  margin: 15px;\n  background-color: #f1ecf6;\n}\n\nselect[_ngcontent-%COMP%] {\n  font-family: \"Quicksand\";\n  width: auto;\n  padding: 15px;\n  margin: 15px;\n  background-color: #00BFA5;\n}\n\n.ripple[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.4);\n  transform: scale(0);\n  position: absolute;\n  opacity: 1;\n}\n\n.rippleEffect[_ngcontent-%COMP%] {\n  animation: rippleDrop 0.6s linear;\n}\n\n@keyframes rippleDrop {\n  100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzdG9yeS10d28uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzY3NzXFxfY29sb3VyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUM7RUFDQyx5QkMrRGM7RUQ5RGQseUJBQUE7QUFERjs7QUFHQTtFQUNFLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFBRjs7QUFFQTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUNBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtBQUVGOztBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJDdUNzQjtBRHBDeEI7O0FBREE7RUFDRSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQzBCYztBRHRCaEI7O0FBREE7RUFDRSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUlGOztBQUZBO0VBQ0ksaUNBQUE7QUFLSjs7QUFGQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxVQUFBO0VBS0Y7QUFDRiIsImZpbGUiOiJzdG9yeS10d28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvYXNzZXRzL3Njc3MvX2NvbG91cic7XHJcblxyXG4gI3Rlc3QtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfcHJpbWFyeTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3JfcHJpbWFyeTtcclxuIH1cclxuLm1vZGFsLW91dGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMDtcclxuICBoZWlnaHQ6MTAwO1xyXG59XHJcbi5tb2RhbC1pbm5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBoZWlnaHQ6MzAwcHg7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICBtYXJnaW46IDE1JTtcclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOjgwMHB4O1xyXG59XHJcbnRkLm1hdC1jZWxsIHtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgd29yZC1icmVhazpicmVhay1hbGw7XHJcbn1cclxub3B0aW9ue1xyXG4gIHdpZHRoOmF1dG87XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX2JhY2tncm91bmRfZm9ybTtcclxufVxyXG5zZWxlY3Qge1xyXG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJztcclxuICB3aWR0aDphdXRvO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl9wcmltYXJ5O1xyXG59XHJcblxyXG4ucmlwcGxlIHtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi5yaXBwbGVFZmZlY3Qge1xyXG4gICAgYW5pbWF0aW9uOiByaXBwbGVEcm9wIC42cyBsaW5lYXI7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcmlwcGxlRHJvcCB7XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbiIsIiRfcHJpbWFyeV9wYWxsZXRlOiAoXHJcbiAgNTA6ICNFMEYyRjEsXHJcbiAgMTAwOiAjQjJERkRCLFxyXG4gIDIwMDogIzgwQ0JDNCxcclxuICAzMDA6ICM0REI2QUMsXHJcbiAgNDAwOiAjMjZBNjlBLFxyXG4gIDUwMDogIzAwOTY4OCxcclxuICA2MDA6ICMwMDg5N0IsXHJcbiAgNzAwOiAjMDA3OTZCLFxyXG4gIDgwMDogIzAwNjk1QyxcclxuICA5MDA6ICMwMDRENDAsXHJcbiAgQTEwMDogI0E3RkZFQixcclxuICBBMjAwOiAjNjRGRkRBLFxyXG4gIEE0MDA6ICMxREU5QjYsXHJcbiAgQTcwMDogIzAwQkZBNSxcclxuICBjb250cmFzdDogKFxyXG4gICAgNTA6ICMwMDAwMDAsXHJcbiAgICAxMDA6ICMwMDAwMDAsXHJcbiAgICAyMDA6ICMwMDAwMDAsXHJcbiAgICAzMDA6ICMwMDAwMDAsXHJcbiAgICA0MDA6ICNmZmZmZmYsXHJcbiAgICA1MDA6ICNmZmZmZmYsXHJcbiAgICA2MDA6ICNmZmZmZmYsXHJcbiAgICA3MDA6ICNmZmZmZmYsXHJcbiAgICA4MDA6ICNmZmZmZmYsXHJcbiAgICA5MDA6ICNmZmZmZmYsXHJcbiAgICBBMTAwOiAjMDAwMDAwLFxyXG4gICAgQTIwMDogIzAwMDAwMCxcclxuICAgIEE0MDA6ICNmZmZmZmYsXHJcbiAgICBBNzAwOiAjZmZmZmZmLFxyXG4gICksXHJcbik7XHJcblxyXG4kX2FjY2VudF9wYWxsZXRlOiAoXHJcbiAgNTA6ICNlMGZiZmIsXHJcbiAgMTAwOiAjYjNmNGY1LFxyXG4gIDIwMDogIzgwZWRlZixcclxuICAzMDA6ICM0ZGU2ZTgsXHJcbiAgNDAwOiAjMjZlMGUzLFxyXG4gIDUwMDogIzAwZGJkZSxcclxuICA2MDA6ICMwMGQ3ZGEsXHJcbiAgNzAwOiAjMDBkMmQ1LFxyXG4gIDgwMDogIzAwY2RkMSxcclxuICA5MDA6ICMwMGM0YzgsXHJcbiAgQTEwMDogI2YxZmZmZixcclxuICBBMjAwOiAjYmVmZGZmLFxyXG4gIEE0MDA6ICM4YmZjZmYsXHJcbiAgQTcwMDogIzcxZmJmZixcclxuICBjb250cmFzdDogKFxyXG4gICAgNTA6ICMwMDAwMDAsXHJcbiAgICAxMDA6ICMwMDAwMDAsXHJcbiAgICAyMDA6ICMwMDAwMDAsXHJcbiAgICAzMDA6ICMwMDAwMDAsXHJcbiAgICA0MDA6ICMwMDAwMDAsXHJcbiAgICA1MDA6ICMwMDAwMDAsXHJcbiAgICA2MDA6ICMwMDAwMDAsXHJcbiAgICA3MDA6ICMwMDAwMDAsXHJcbiAgICA4MDA6ICMwMDAwMDAsXHJcbiAgICA5MDA6ICMwMDAwMDAsXHJcbiAgICBBMTAwOiAjMDAwMDAwLFxyXG4gICAgQTIwMDogIzAwMDAwMCxcclxuICAgIEE0MDA6ICMwMDAwMDAsXHJcbiAgICBBNzAwOiAjMDAwMDAwLFxyXG4gICksXHJcbik7XHJcblxyXG4kY29sb3JfcHJpbWFyeTogbWFwX2dldCgkX3ByaW1hcnlfcGFsbGV0ZSwgQTcwMCk7XHJcbiRjb2xvcl9wcmltYXJ5X2Rhcms6IG1hcF9nZXQoJF9wcmltYXJ5X3BhbGxldGUsIEE1MDApO1xyXG4kY29sb3JfYWNjZW50OiAjYmYxZjM0O1xyXG4kY29sb3JfZ3JleTogIzRmNGY0ZjtcclxuJGNvbG9yX2JsdWU6ICMxZDM1NTc7XHJcbiRjb2xvcl9ibHVlX2Zvcm06ICMwMTMxNzE7XHJcbiRjb2xvcl9iYWNrZ3JvdW5kX2Zvcm06ICNmMWVjZjY7XHJcbiJdfQ== */"] });


/***/ }),

/***/ "8YQv":
/*!************************************************************!*\
  !*** ./src/app/pages/story-seven/story-seven.component.ts ***!
  \************************************************************/
/*! exports provided: StorySevenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorySevenComponent", function() { return StorySevenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class StorySevenComponent {
    constructor() { }
    ngOnInit() {
    }
}
StorySevenComponent.ɵfac = function StorySevenComponent_Factory(t) { return new (t || StorySevenComponent)(); };
StorySevenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StorySevenComponent, selectors: [["app-story-seven"]], decls: 2, vars: 0, template: function StorySevenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "story-seven works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9yeS1zZXZlbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "94UP":
/*!*****************************************************************!*\
  !*** ./src/app/pages/story-two/modal/story2_modal.component.ts ***!
  \*****************************************************************/
/*! exports provided: Story2ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Story2ModalComponent", function() { return Story2ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _story2_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./story2_modal.service */ "v+Uo");


const _c0 = ["*"];
class Story2ModalComponent {
    constructor(Story2ModalService, el) {
        this.Story2ModalService = Story2ModalService;
        this.el = el;
        this.element = el.nativeElement;
    }
    ngOnInit() {
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);
        // close modal on background click
        this.element.addEventListener('click', (el) => {
            if (el.target.className === 'story2-modal') {
                this.close();
            }
        });
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.Story2ModalService.add(this);
    }
    // remove self from modal service when component is destroyed
    ngOnDestroy() {
        this.Story2ModalService.remove(this.id);
        this.element.remove();
    }
    // open modal
    open() {
        this.element.style.display = 'block';
        document.body.classList.add('story2-modal-open');
    }
    // close modal
    close() {
        this.element.style.display = 'none';
        document.body.classList.remove('story2-modal-open');
    }
}
Story2ModalComponent.ɵfac = function Story2ModalComponent_Factory(t) { return new (t || Story2ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_story2_modal_service__WEBPACK_IMPORTED_MODULE_1__["Story2ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
Story2ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Story2ModalComponent, selectors: [["story2-modal"]], inputs: { id: "id" }, ngContentSelectors: _c0, decls: 6, vars: 0, consts: [[1, "story2-modal"], [1, "story2-modal-body"], [1, "story2-modal-background"]], template: function Story2ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "modal works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 2);
    } }, styles: ["/* MODAL STYLES\n-------------------------------*/\nstory2-modal {\n  /* modals are hidden by default */\n  display: none;\n}\nstory2-modal .story2-modal {\n  /* modal container fixed across whole screen */\n  position: fixed;\n  width: 70%;\n  height: 75%;\n  top: 25%;\n  right: 20%;\n  bottom: 0;\n  left: 20%;\n  /* z-index must be higher than .story2-modal-background */\n  z-index: 1000;\n  /* enables scrolling for tall modals */\n  overflow: auto;\n}\nstory2-modal .story2-modal .story2-modal-body {\n  padding: 20px;\n  background: #fff;\n  /* margin exposes part of the modal background */\n  margin: 40px;\n}\nstory2-modal .story2-modal-background {\n  /* modal background fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* semi-transparent black  */\n  background-color: #000;\n  opacity: 0.75;\n  /* z-index must be below .story2-modal and above everything else  */\n  z-index: 900;\n}\nbody.story2-modal-open {\n  /* body overflow is hidden to hide main scrollbar when modal window is open */\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3RvcnkyX21vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO2dDQUFBO0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGFBQUE7QUFDRjtBQUNFO0VBQ0ksOENBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBRUEseURBQUE7RUFDQSxhQUFBO0VBRUEsc0NBQUE7RUFDQSxjQUFBO0FBRE47QUFHTTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUVBLGdEQUFBO0VBQ0EsWUFBQTtBQUZWO0FBTUU7RUFDSSwrQ0FBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBRUEsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFFQSxtRUFBQTtFQUNBLFlBQUE7QUFOTjtBQVVBO0VBQ0UsNkVBQUE7RUFDQSxnQkFBQTtBQVBGIiwiZmlsZSI6InN0b3J5Ml9tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE1PREFMIFNUWUxFU1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuc3RvcnkyLW1vZGFsIHtcclxuICAvKiBtb2RhbHMgYXJlIGhpZGRlbiBieSBkZWZhdWx0ICovXHJcbiAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgLnN0b3J5Mi1tb2RhbCB7XHJcbiAgICAgIC8qIG1vZGFsIGNvbnRhaW5lciBmaXhlZCBhY3Jvc3Mgd2hvbGUgc2NyZWVuICovXHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgaGVpZ2h0Ojc1JTtcclxuICAgICAgdG9wOiAyNSU7XHJcbiAgICAgIHJpZ2h0OiAyMCU7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgbGVmdDogMjAlO1xyXG5cclxuICAgICAgLyogei1pbmRleCBtdXN0IGJlIGhpZ2hlciB0aGFuIC5zdG9yeTItbW9kYWwtYmFja2dyb3VuZCAqL1xyXG4gICAgICB6LWluZGV4OiAxMDAwO1xyXG5cclxuICAgICAgLyogZW5hYmxlcyBzY3JvbGxpbmcgZm9yIHRhbGwgbW9kYWxzICovXHJcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuICAgICAgLnN0b3J5Mi1tb2RhbC1ib2R5IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cclxuICAgICAgICAgIC8qIG1hcmdpbiBleHBvc2VzIHBhcnQgb2YgdGhlIG1vZGFsIGJhY2tncm91bmQgKi9cclxuICAgICAgICAgIG1hcmdpbjogNDBweDtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgLnN0b3J5Mi1tb2RhbC1iYWNrZ3JvdW5kIHtcclxuICAgICAgLyogbW9kYWwgYmFja2dyb3VuZCBmaXhlZCBhY3Jvc3Mgd2hvbGUgc2NyZWVuICovXHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG5cclxuICAgICAgLyogc2VtaS10cmFuc3BhcmVudCBibGFjayAgKi9cclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgICAgb3BhY2l0eTogMC43NTtcclxuXHJcbiAgICAgIC8qIHotaW5kZXggbXVzdCBiZSBiZWxvdyAuc3RvcnkyLW1vZGFsIGFuZCBhYm92ZSBldmVyeXRoaW5nIGVsc2UgICovXHJcbiAgICAgIHotaW5kZXg6IDkwMDtcclxuICB9XHJcbn1cclxuXHJcbmJvZHkuc3RvcnkyLW1vZGFsLW9wZW4ge1xyXG4gIC8qIGJvZHkgb3ZlcmZsb3cgaXMgaGlkZGVuIHRvIGhpZGUgbWFpbiBzY3JvbGxiYXIgd2hlbiBtb2RhbCB3aW5kb3cgaXMgb3BlbiAqL1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuIl19 */"], encapsulation: 2 });


/***/ }),

/***/ "Ai5k":
/*!**********************************************************!*\
  !*** ./src/app/pages/story-nine/story-nine.component.ts ***!
  \**********************************************************/
/*! exports provided: StoryNineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryNineComponent", function() { return StoryNineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class StoryNineComponent {
    constructor() { }
    ngOnInit() {
    }
}
StoryNineComponent.ɵfac = function StoryNineComponent_Factory(t) { return new (t || StoryNineComponent)(); };
StoryNineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StoryNineComponent, selectors: [["app-story-nine"]], decls: 2, vars: 0, template: function StoryNineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "story-nine works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9yeS1uaW5lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "El+l":
/*!************************************************************!*\
  !*** ./src/app/pages/story-eight/story-eight.component.ts ***!
  \************************************************************/
/*! exports provided: StoryEightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryEightComponent", function() { return StoryEightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class StoryEightComponent {
    constructor() { }
    ngOnInit() {
    }
}
StoryEightComponent.ɵfac = function StoryEightComponent_Factory(t) { return new (t || StoryEightComponent)(); };
StoryEightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StoryEightComponent, selectors: [["app-story-eight"]], decls: 2, vars: 0, template: function StoryEightComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "story-eight works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9yeS1laWdodC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "H5P0":
/*!*********************************************************!*\
  !*** ./src/app/pages/story-three/modal/modal.module.ts ***!
  \*********************************************************/
/*! exports provided: ModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.component */ "vHYS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class ModalModule {
}
ModalModule.ɵfac = function ModalModule_Factory(t) { return new (t || ModalModule)(); };
ModalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ModalModule });
ModalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ModalModule, { declarations: [_modal_component__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_modal_component__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"]] }); })();


/***/ }),

/***/ "I07+":
/*!****************************************************************!*\
  !*** ./src/app/dialogs/table-dialog/table-dialog.component.ts ***!
  \****************************************************************/
/*! exports provided: TableDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableDialogComponent", function() { return TableDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function TableDialogComponent_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3);
} }
function TableDialogComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Benefits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Limitations ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u2713 High frequency (3-5 yr) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u2713 Nationally representative ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u2713 Often cover the whole year ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " ! Not specifically a nutrition survey ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " ! People forget things ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " ! People forget more things ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableDialogComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Benefits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Limitations ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u2713 Cover most nations globally ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u2713 Consistent food names and reporting format ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " ! Does not represent consumption ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " ! No spatial resolution ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " ! No seasonal variation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TableDialogComponent {
    constructor() {
        this.dataSourceArray = [
            'Household Consumption & Expenditure Surveys',
            'Food Balance Sheet data',
        ];
    }
    ngOnInit() {
    }
}
TableDialogComponent.ɵfac = function TableDialogComponent_Factory(t) { return new (t || TableDialogComponent)(); };
TableDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableDialogComponent, selectors: [["app-table-dialog"]], decls: 8, vars: 4, consts: [[3, "ngModel", "ngModelChange"], ["value", "undefined", "selected", "", 2, "color", "grey"], [4, "ngFor", "ngForOf"], [4, "ngIf"]], template: function TableDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Select a Data Source");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TableDialogComponent_Template_select_ngModelChange_2_listener($event) { return ctx.selectedItem = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Select the Survey Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TableDialogComponent_option_5_Template, 2, 1, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TableDialogComponent_span_6_Template, 20, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TableDialogComponent_span_7_Template, 18, 0, "span", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataSourceArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedItem == "Household Consumption & Expenditure Surveys");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedItem == "Food Balance Sheet data");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 800px;\n}\n\ntd.mat-cell[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n  word-break: break-all;\n}\n\noption[_ngcontent-%COMP%] {\n  width: auto;\n  padding: 15px;\n  margin: 15px;\n  background-color: #f1ecf6;\n}\n\nselect[_ngcontent-%COMP%] {\n  font-family: \"Quicksand\";\n  width: auto;\n  padding: 15px;\n  margin: 15px;\n  background-color: #00BFA5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0YWJsZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzY3NzXFxfY29sb3VyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxZQUFBO0FBRkY7O0FBSUE7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0FBREY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkMwRHNCO0FEMUR4Qjs7QUFFQTtFQUNFLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJDNkNjO0FENUNoQiIsImZpbGUiOiJ0YWJsZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zY3NzL19jb2xvdXJcIjtcclxuXHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6ODAwcHg7XHJcbn1cclxudGQubWF0LWNlbGwge1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB3b3JkLWJyZWFrOmJyZWFrLWFsbDtcclxufVxyXG5vcHRpb257XHJcbiAgd2lkdGg6YXV0bztcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbjogMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfYmFja2dyb3VuZF9mb3JtO1xyXG59XHJcbnNlbGVjdCB7XHJcbiAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnO1xyXG4gIHdpZHRoOmF1dG87XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX3ByaW1hcnk7XHJcbn1cclxuIiwiJF9wcmltYXJ5X3BhbGxldGU6IChcclxuICA1MDogI0UwRjJGMSxcclxuICAxMDA6ICNCMkRGREIsXHJcbiAgMjAwOiAjODBDQkM0LFxyXG4gIDMwMDogIzREQjZBQyxcclxuICA0MDA6ICMyNkE2OUEsXHJcbiAgNTAwOiAjMDA5Njg4LFxyXG4gIDYwMDogIzAwODk3QixcclxuICA3MDA6ICMwMDc5NkIsXHJcbiAgODAwOiAjMDA2OTVDLFxyXG4gIDkwMDogIzAwNEQ0MCxcclxuICBBMTAwOiAjQTdGRkVCLFxyXG4gIEEyMDA6ICM2NEZGREEsXHJcbiAgQTQwMDogIzFERTlCNixcclxuICBBNzAwOiAjMDBCRkE1LFxyXG4gIGNvbnRyYXN0OiAoXHJcbiAgICA1MDogIzAwMDAwMCxcclxuICAgIDEwMDogIzAwMDAwMCxcclxuICAgIDIwMDogIzAwMDAwMCxcclxuICAgIDMwMDogIzAwMDAwMCxcclxuICAgIDQwMDogI2ZmZmZmZixcclxuICAgIDUwMDogI2ZmZmZmZixcclxuICAgIDYwMDogI2ZmZmZmZixcclxuICAgIDcwMDogI2ZmZmZmZixcclxuICAgIDgwMDogI2ZmZmZmZixcclxuICAgIDkwMDogI2ZmZmZmZixcclxuICAgIEExMDA6ICMwMDAwMDAsXHJcbiAgICBBMjAwOiAjMDAwMDAwLFxyXG4gICAgQTQwMDogI2ZmZmZmZixcclxuICAgIEE3MDA6ICNmZmZmZmYsXHJcbiAgKSxcclxuKTtcclxuXHJcbiRfYWNjZW50X3BhbGxldGU6IChcclxuICA1MDogI2UwZmJmYixcclxuICAxMDA6ICNiM2Y0ZjUsXHJcbiAgMjAwOiAjODBlZGVmLFxyXG4gIDMwMDogIzRkZTZlOCxcclxuICA0MDA6ICMyNmUwZTMsXHJcbiAgNTAwOiAjMDBkYmRlLFxyXG4gIDYwMDogIzAwZDdkYSxcclxuICA3MDA6ICMwMGQyZDUsXHJcbiAgODAwOiAjMDBjZGQxLFxyXG4gIDkwMDogIzAwYzRjOCxcclxuICBBMTAwOiAjZjFmZmZmLFxyXG4gIEEyMDA6ICNiZWZkZmYsXHJcbiAgQTQwMDogIzhiZmNmZixcclxuICBBNzAwOiAjNzFmYmZmLFxyXG4gIGNvbnRyYXN0OiAoXHJcbiAgICA1MDogIzAwMDAwMCxcclxuICAgIDEwMDogIzAwMDAwMCxcclxuICAgIDIwMDogIzAwMDAwMCxcclxuICAgIDMwMDogIzAwMDAwMCxcclxuICAgIDQwMDogIzAwMDAwMCxcclxuICAgIDUwMDogIzAwMDAwMCxcclxuICAgIDYwMDogIzAwMDAwMCxcclxuICAgIDcwMDogIzAwMDAwMCxcclxuICAgIDgwMDogIzAwMDAwMCxcclxuICAgIDkwMDogIzAwMDAwMCxcclxuICAgIEExMDA6ICMwMDAwMDAsXHJcbiAgICBBMjAwOiAjMDAwMDAwLFxyXG4gICAgQTQwMDogIzAwMDAwMCxcclxuICAgIEE3MDA6ICMwMDAwMDAsXHJcbiAgKSxcclxuKTtcclxuXHJcbiRjb2xvcl9wcmltYXJ5OiBtYXBfZ2V0KCRfcHJpbWFyeV9wYWxsZXRlLCBBNzAwKTtcclxuJGNvbG9yX3ByaW1hcnlfZGFyazogbWFwX2dldCgkX3ByaW1hcnlfcGFsbGV0ZSwgQTUwMCk7XHJcbiRjb2xvcl9hY2NlbnQ6ICNiZjFmMzQ7XHJcbiRjb2xvcl9ncmV5OiAjNGY0ZjRmO1xyXG4kY29sb3JfYmx1ZTogIzFkMzU1NztcclxuJGNvbG9yX2JsdWVfZm9ybTogIzAxMzE3MTtcclxuJGNvbG9yX2JhY2tncm91bmRfZm9ybTogI2YxZWNmNjtcclxuIl19 */"] });


/***/ }),

/***/ "JhD/":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");




class LandingComponent {
    constructor() { }
    ngOnInit() {
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 123, vars: 0, consts: [["role", "main"], [1, "wave-header"], ["src", "../../assets/images/purple-opacity-wave.svg", "alt", ""], [1, "mdc-layout-grid", "header"], [1, "mdc-layout-grid__inner"], [1, "mdc-layout-grid__cell--span-6", "mdc-layout-grid__cell--align-middle"], [1, "button-container"], ["mat-flat-button", "", "color", "primary", "routerLink", "/story-one"], ["mat-flat-button", "", "color", "primary"], [1, "mdc-layout-grid__cell--span-6"], ["src", "../../assets/images/help-illustration.svg", "alt", "", 1, "header-image"], [1, "expansion-wrapper"], [1, "expansion-border"], ["hideToggle", ""], ["mat-raised-button", "", "color", "primary", "routerLink", "/story-two", "routerLinkActive", "active"], ["mat-raised-button", "", "color", "primary", "routerLink", "/story-three", "routerLinkActive", "active"], ["mat-raised-button", "", "color", "primary", "routerLink", "/story-four", "routerLinkActive", "active"], ["mat-raised-button", "", "color", "primary", "routerLink", "/story-five", "routerLinkActive", "active"], ["mat-raised-button", "", "color", "primary", "routerLink", "/story-six", "routerLinkActive", "active"], ["mat-raised-button", "", "color", "primary", "routerLink", "/story-seven", "routerLinkActive", "active"], ["mat-raised-button", "", "color", "primary", "routerLink", "/story-eight", "routerLinkActive", "active"], ["mat-raised-button", "", "color", "primary", "routerLink", "/story-nine", "routerLinkActive", "active"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Learn how to use MAPS tool and explore case studies.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Learn about maps tool");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Explore use cases");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Use cases");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Explore how the Maps tool can be used to answer various questions related to nutrition.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-expansion-panel", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Using household dietary recall data in MAPS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Description of what this user story is...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-expansion-panel", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Why spatially resolved food composition data matters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Description of what this user story is...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-expansion-panel", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "What do we think the future micronutrient supply will be?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Description of what this user story is...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-expansion-panel", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Why do different datasets give different estimates of micronutrient deficiencies?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Description of what this user story is...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-expansion-panel", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "How can I explore introducing changes into the food system?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Description of what this user story is...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-expansion-panel", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "How can I use MAPS to the effectiveness of possible if food system changes?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Description of what this user story is...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-expansion-panel", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "How to compare different fortification options using your own input costs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Description of what this user story is...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-expansion-panel", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "How can I use MAPS Tool outputs in my presentations and reports?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Description of what this user story is...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "mat-expansion-panel", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " How can I explore my own data in MAPS? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Description of what this user story is...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "router-outlet");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelDescription"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".button-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 1em;\n}\n.expansion-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.expansion-wrapper[_ngcontent-%COMP%]   .expansion-border[_ngcontent-%COMP%] {\n  width: 80%;\n  padding: 1em 1em 0em 1em;\n  border-radius: 5px;\n}\n.expansion-wrapper[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\n.expansion-wrapper[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\nh2[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxhbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0FBREY7QUFFRTtFQUNFLGFBQUE7QUFBSjtBQUlBO0VBa0JFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQWxCRjtBQUZFO0VBQ0UsVUFBQTtFQUVBLHdCQUFBO0VBQ0Esa0JBQUE7QUFHSjtBQUNJO0VBQ0Usa0JBQUE7QUFDTjtBQUNJO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFDTjtBQVFBO0VBQ0UsZ0JBQUE7QUFMRiIsImZpbGUiOiJsYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9hc3NldHMvc2Nzcy9fY29sb3VyXCI7XHJcblxyXG4uYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBidXR0b24ge1xyXG4gICAgbWFyZ2luOiAwIDFlbTtcclxuICB9XHJcbn1cclxuXHJcbi5leHBhbnNpb24td3JhcHBlciB7XHJcbiAgLmV4cGFuc2lvbi1ib3JkZXIge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIC8vIGJvcmRlcjogMnB4IHNvbGlkICRjb2xvcl9wcmltYXJ5O1xyXG4gICAgcGFkZGluZzogMWVtIDFlbSAwZW0gMWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuICBtYXQtYWNjb3JkaW9uIHtcclxuICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF0LWV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICAgIH1cclxuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "Kv0e":
/*!**************************************************************!*\
  !*** ./src/app/pages/story-two/modal/story2_modal.module.ts ***!
  \**************************************************************/
/*! exports provided: Story2ModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Story2ModalModule", function() { return Story2ModalModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _story2_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./story2_modal.component */ "94UP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class Story2ModalModule {
}
Story2ModalModule.ɵfac = function Story2ModalModule_Factory(t) { return new (t || Story2ModalModule)(); };
Story2ModalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: Story2ModalModule });
Story2ModalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](Story2ModalModule, { declarations: [_story2_modal_component__WEBPACK_IMPORTED_MODULE_1__["Story2ModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_story2_modal_component__WEBPACK_IMPORTED_MODULE_1__["Story2ModalComponent"]] }); })();


/***/ }),

/***/ "MzVA":
/*!**********************************************************!*\
  !*** ./src/app/pages/story-three/modal/modal.service.ts ***!
  \**********************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ModalService {
    constructor() {
        this.modals = [];
    }
    add(modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    }
    remove(id) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(x => x.id !== id);
    }
    open(id) {
        // open modal specified by id
        const modal = this.modals.find(x => x.id === id);
        modal.open();
    }
    close(id) {
        // close modal specified by id
        const modal = this.modals.find(x => x.id === id);
        modal.close();
    }
}
ModalService.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(); };
ModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ModalService, factory: ModalService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "PVfv":
/*!***********************************************!*\
  !*** ./src/assets/scss/colourPalette.enum.ts ***!
  \***********************************************/
/*! exports provided: ColourPalette */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColourPalette", function() { return ColourPalette; });
var ColourPalette;
(function (ColourPalette) {
    ColourPalette["PRIMARY"] = "#009688";
    ColourPalette["BLUE"] = "#7F7FFF";
    ColourPalette["CALM"] = "#C4C4B0";
    ColourPalette["WARNING"] = "#FF0000";
})(ColourPalette || (ColourPalette = {}));


/***/ }),

/***/ "SSBc":
/*!********************************************************!*\
  !*** ./src/app/pages/story-six/story-six.component.ts ***!
  \********************************************************/
/*! exports provided: StorySixComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorySixComponent", function() { return StorySixComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class StorySixComponent {
    constructor() { }
    ngOnInit() {
    }
}
StorySixComponent.ɵfac = function StorySixComponent_Factory(t) { return new (t || StorySixComponent)(); };
StorySixComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StorySixComponent, selectors: [["app-story-six"]], decls: 2, vars: 0, template: function StorySixComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "story-six works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9yeS1zaXguY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");


class AppComponent {
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"]], styles: ["#test-button[_ngcontent-%COMP%] {\n  background-color: #00BFA5;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #00BFA5;\n  border: 1px solid #00BFA5;\n}\n\n#test-button[_ngcontent-%COMP%] {\n  background-color: #00BFA5;\n  border: 1px solid #00BFA5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcYXNzZXRzXFxzY3NzXFxfY29sb3VyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx5QkMrRGM7QURoRWhCOztBQUlBO0VBQ0UseUJDMkRjO0VEMURkLHlCQUFBO0FBREY7O0FBR0M7RUFDQyx5QkN1RGM7RUR0RGQseUJBQUE7QUFBRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvYXNzZXRzL3Njc3MvX2NvbG91cic7XHJcblxyXG4jdGVzdC1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl9wcmltYXJ5O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl9wcmltYXJ5O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvcl9wcmltYXJ5O1xyXG4gfVxyXG4gI3Rlc3QtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfcHJpbWFyeTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3JfcHJpbWFyeTtcclxuIH1cclxuIiwiJF9wcmltYXJ5X3BhbGxldGU6IChcclxuICA1MDogI0UwRjJGMSxcclxuICAxMDA6ICNCMkRGREIsXHJcbiAgMjAwOiAjODBDQkM0LFxyXG4gIDMwMDogIzREQjZBQyxcclxuICA0MDA6ICMyNkE2OUEsXHJcbiAgNTAwOiAjMDA5Njg4LFxyXG4gIDYwMDogIzAwODk3QixcclxuICA3MDA6ICMwMDc5NkIsXHJcbiAgODAwOiAjMDA2OTVDLFxyXG4gIDkwMDogIzAwNEQ0MCxcclxuICBBMTAwOiAjQTdGRkVCLFxyXG4gIEEyMDA6ICM2NEZGREEsXHJcbiAgQTQwMDogIzFERTlCNixcclxuICBBNzAwOiAjMDBCRkE1LFxyXG4gIGNvbnRyYXN0OiAoXHJcbiAgICA1MDogIzAwMDAwMCxcclxuICAgIDEwMDogIzAwMDAwMCxcclxuICAgIDIwMDogIzAwMDAwMCxcclxuICAgIDMwMDogIzAwMDAwMCxcclxuICAgIDQwMDogI2ZmZmZmZixcclxuICAgIDUwMDogI2ZmZmZmZixcclxuICAgIDYwMDogI2ZmZmZmZixcclxuICAgIDcwMDogI2ZmZmZmZixcclxuICAgIDgwMDogI2ZmZmZmZixcclxuICAgIDkwMDogI2ZmZmZmZixcclxuICAgIEExMDA6ICMwMDAwMDAsXHJcbiAgICBBMjAwOiAjMDAwMDAwLFxyXG4gICAgQTQwMDogI2ZmZmZmZixcclxuICAgIEE3MDA6ICNmZmZmZmYsXHJcbiAgKSxcclxuKTtcclxuXHJcbiRfYWNjZW50X3BhbGxldGU6IChcclxuICA1MDogI2UwZmJmYixcclxuICAxMDA6ICNiM2Y0ZjUsXHJcbiAgMjAwOiAjODBlZGVmLFxyXG4gIDMwMDogIzRkZTZlOCxcclxuICA0MDA6ICMyNmUwZTMsXHJcbiAgNTAwOiAjMDBkYmRlLFxyXG4gIDYwMDogIzAwZDdkYSxcclxuICA3MDA6ICMwMGQyZDUsXHJcbiAgODAwOiAjMDBjZGQxLFxyXG4gIDkwMDogIzAwYzRjOCxcclxuICBBMTAwOiAjZjFmZmZmLFxyXG4gIEEyMDA6ICNiZWZkZmYsXHJcbiAgQTQwMDogIzhiZmNmZixcclxuICBBNzAwOiAjNzFmYmZmLFxyXG4gIGNvbnRyYXN0OiAoXHJcbiAgICA1MDogIzAwMDAwMCxcclxuICAgIDEwMDogIzAwMDAwMCxcclxuICAgIDIwMDogIzAwMDAwMCxcclxuICAgIDMwMDogIzAwMDAwMCxcclxuICAgIDQwMDogIzAwMDAwMCxcclxuICAgIDUwMDogIzAwMDAwMCxcclxuICAgIDYwMDogIzAwMDAwMCxcclxuICAgIDcwMDogIzAwMDAwMCxcclxuICAgIDgwMDogIzAwMDAwMCxcclxuICAgIDkwMDogIzAwMDAwMCxcclxuICAgIEExMDA6ICMwMDAwMDAsXHJcbiAgICBBMjAwOiAjMDAwMDAwLFxyXG4gICAgQTQwMDogIzAwMDAwMCxcclxuICAgIEE3MDA6ICMwMDAwMDAsXHJcbiAgKSxcclxuKTtcclxuXHJcbiRjb2xvcl9wcmltYXJ5OiBtYXBfZ2V0KCRfcHJpbWFyeV9wYWxsZXRlLCBBNzAwKTtcclxuJGNvbG9yX3ByaW1hcnlfZGFyazogbWFwX2dldCgkX3ByaW1hcnlfcGFsbGV0ZSwgQTUwMCk7XHJcbiRjb2xvcl9hY2NlbnQ6ICNiZjFmMzQ7XHJcbiRjb2xvcl9ncmV5OiAjNGY0ZjRmO1xyXG4kY29sb3JfYmx1ZTogIzFkMzU1NztcclxuJGNvbG9yX2JsdWVfZm9ybTogIzAxMzE3MTtcclxuJGNvbG9yX2JhY2tncm91bmRfZm9ybTogI2YxZWNmNjtcclxuIl19 */"] });


/***/ }),

/***/ "UDBt":
/*!************************************************************!*\
  !*** ./src/app/pages/story-three/story-three.component.ts ***!
  \************************************************************/
/*! exports provided: StoryThreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryThreeComponent", function() { return StoryThreeComponent; });
/* harmony import */ var src_assets_scss_colourPalette_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/assets/scss/colourPalette.enum */ "PVfv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _story_three_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../story-three/modal/modal.service */ "MzVA");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal/modal.component */ "vHYS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function StoryThreeComponent_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3);
} }
function StoryThreeComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Benefits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Limitations ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " \u2713 High frequency (3-5 yr) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " \u2713 Nationally representative ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " \u2713 Often cover the whole year ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " ! Not specifically a nutrition survey ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " ! People forget things ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " ! People forget more things ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StoryThreeComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Benefits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Limitations ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " \u2713 Cover most nations globally ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " \u2713 Consistent food names and reporting format ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " ! Does not represent consumption ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " ! No spatial resolution ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " ! No seasonal variation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function triggerStory() {
    var storymap_options = {
        width: 7100,
        height: 2500,
        font_css: 'Calibri',
        calculate_zoom: false,
        zoomControl: true,
        storymap: {
            language: 'en',
            map_type: 'zoomify',
            map_as_image: true,
            map_background_color: 'white',
            zoomify: {
                path: 'https://micronutrientsupport.github.io/MAPS_story2/',
                //    path: './assets/images/',
                width: 3500,
                height: 1250,
                tolerance: 0.9 // required; display tolerance
            },
            slides: [{
                    type: "overview",
                    location: {
                        //   lat: decimal,      // latitude of point on map
                        //   lon: decimal       // longitude of point on map
                        zoom: 10
                    },
                    text: {
                        headline: 'How does the MAPS tool make subnational estimates of dietary supply of micronutrients?',
                        text: '          <img height="20px"; width="20px"; class="open" src="./assets/images/launch.png">       <div style="display: none;" class="modal-outer">            <div class="modal-inner">              <button class="close">X</button>              <h1>custom MODAL</h1>              <p>SOME text</p>            </div>          </div> '
                        // may contain HTML markup
                    },
                    media: {
                        url: '',
                    }
                },
                {
                    location: {
                        lat: 78.9486,
                        lon: -115,
                        zoom: 3
                    },
                    text: {
                        headline: 'Survey nutrition recall data',
                        text: '<p class="Story1_italic">The MAPS Tool combines data where participants recall the food they have consumed, with information on the nutrient composition of the food item. </p>' + '<br>' + 'The MAPS Tool makes particular use of information from Living Standards Measurement Surveys – these surveys are undertaken relatively frequently, at a density that allows data to be presented broken down into categories such as the geographic region participants are from, what their relative wealth is or what time of year they took part in the survey.  This makes for a potential rich data source to inform our understanding of diet at the household level. However, there are assumptions which must be made using these data (as they are collected primarily to understand economic conditions) and limits to the extent to which we can use them. '
                            + '<br>'
                            + '<button id="procon-button" > <a href="https://www.google.com/">Pros & Cons of LSMS Data DIALOG</a></button>'
                            + '<br>'
                            + '<button id="test-button">Test Alert </button>'
                            + '<p>&nbsp;</p>'
                            + '<a href="https://www.google.com/"><img src="./assets/images/video_walkthrough_play.png"><p>&nbsp;</p> video walk through </a>',
                    },
                    media: {
                        url: 'https://www.mydiasporakitchen.com/wp-content/uploads/2017/08/img_8989.jpg',
                        // caption: string,   // optional; brief explanation of media content
                        // credit: string     // optional; creator of media content
                        size: { height: "160", width: "160" }
                    }
                }
            ] // required; array of slide objects (see below)
        }
    };
    const storymap = new KLStoryMap.StoryMap('mapdiv', storymap_options);
    window.onresize = function () {
        storymap.updateDisplay(); // this isn't automatic
    };
}
class StoryThreeComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.dataSourceArray = [
            'Household Consumption & Expenditure Surveys',
            'Food Balance Sheet data',
        ];
    }
    ngOnInit() {
        this.bodyText = 'This text can be updated in modal 1';
        triggerStory();
    }
    ngAfterViewInit() {
        var _a;
        (_a = document.getElementById("test-button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => { this.testClick(); });
        $(".Story1_italic").css({ fontStyle: 'italic', fontSize: "15px" });
        $(".Story1_paragraph").css({ fontStyle: 'normal', fontSize: "15px" });
        $("#procon-button").css({ backgroundColor: src_assets_scss_colourPalette_enum__WEBPACK_IMPORTED_MODULE_0__["ColourPalette"].PRIMARY, fontSize: "15px", color: "white", padding: "10px", margin: "15px" });
        $("#viewData").css({
            background: "linear-gradient(-120deg, transparent 1em, #0099C3 1.05em , #0099C3 1.5em, transparent 1.45em, transparent 2em, #0099C3 2.05em) top no-repeat",
            backgroundColor: src_assets_scss_colourPalette_enum__WEBPACK_IMPORTED_MODULE_0__["ColourPalette"].PRIMARY, color: "white", fontSize: "15px", padding: "10px", margin: "15px"
        });
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
    testClick() {
        // alert('click');
        this.openModal('custom-modal-2');
    }
    openModal(id) {
        this.modalService.open(id);
    }
    closeModal(id) {
        this.modalService.close(id);
    }
}
StoryThreeComponent.ɵfac = function StoryThreeComponent_Factory(t) { return new (t || StoryThreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_story_three_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"])); };
StoryThreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StoryThreeComponent, selectors: [["app-story-three"]], decls: 20, vars: 5, consts: [["id", "mapdiv", 2, "width", "100%", "height", "90%"], ["id", "custom-modal-1"], ["type", "text", 3, "ngModel", "ngModelChange"], [3, "click"], ["id", "custom-modal-2"], [3, "ngModel", "ngModelChange"], ["value", "undefined", "selected", "", 2, "color", "grey"], [4, "ngFor", "ngForOf"], [4, "ngIf"]], template: function StoryThreeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "story-three works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "story3-modal", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "A Custom Modal Window!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Home page text: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function StoryThreeComponent_Template_input_ngModelChange_8_listener($event) { return ctx.bodyText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StoryThreeComponent_Template_button_click_9_listener() { return ctx.closeModal("custom-modal-1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "story3-modal", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Select a Data Source");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function StoryThreeComponent_Template_select_ngModelChange_14_listener($event) { return ctx.selectedItem = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Select the Survey Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, StoryThreeComponent_option_17_Template, 2, 1, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, StoryThreeComponent_span_18_Template, 20, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, StoryThreeComponent_span_19_Template, 18, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.bodyText);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.dataSourceArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedItem == "Household Consumption & Expenditure Surveys");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedItem == "Food Balance Sheet data");
    } }, directives: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 800px;\n}\n\ntd.mat-cell[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n  word-break: break-all;\n}\n\noption[_ngcontent-%COMP%] {\n  width: auto;\n  padding: 15px;\n  margin: 15px;\n  background-color: #f1ecf6;\n}\n\nselect[_ngcontent-%COMP%] {\n  font-family: \"Quicksand\";\n  width: auto;\n  padding: 15px;\n  margin: 15px;\n  background-color: #00BFA5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzdG9yeS10aHJlZS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXF9jb2xvdXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLFlBQUE7QUFGRjs7QUFJQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7QUFERjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQzBEc0I7QUQxRHhCOztBQUVBO0VBQ0Usd0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkM2Q2M7QUQ1Q2hCIiwiZmlsZSI6InN0b3J5LXRocmVlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9hc3NldHMvc2Nzcy9fY29sb3VyXCI7XHJcblxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOjgwMHB4O1xyXG59XHJcbnRkLm1hdC1jZWxsIHtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgd29yZC1icmVhazpicmVhay1hbGw7XHJcbn1cclxub3B0aW9ue1xyXG4gIHdpZHRoOmF1dG87XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX2JhY2tncm91bmRfZm9ybTtcclxufVxyXG5zZWxlY3Qge1xyXG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJztcclxuICB3aWR0aDphdXRvO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl9wcmltYXJ5O1xyXG59XHJcbiIsIiRfcHJpbWFyeV9wYWxsZXRlOiAoXHJcbiAgNTA6ICNFMEYyRjEsXHJcbiAgMTAwOiAjQjJERkRCLFxyXG4gIDIwMDogIzgwQ0JDNCxcclxuICAzMDA6ICM0REI2QUMsXHJcbiAgNDAwOiAjMjZBNjlBLFxyXG4gIDUwMDogIzAwOTY4OCxcclxuICA2MDA6ICMwMDg5N0IsXHJcbiAgNzAwOiAjMDA3OTZCLFxyXG4gIDgwMDogIzAwNjk1QyxcclxuICA5MDA6ICMwMDRENDAsXHJcbiAgQTEwMDogI0E3RkZFQixcclxuICBBMjAwOiAjNjRGRkRBLFxyXG4gIEE0MDA6ICMxREU5QjYsXHJcbiAgQTcwMDogIzAwQkZBNSxcclxuICBjb250cmFzdDogKFxyXG4gICAgNTA6ICMwMDAwMDAsXHJcbiAgICAxMDA6ICMwMDAwMDAsXHJcbiAgICAyMDA6ICMwMDAwMDAsXHJcbiAgICAzMDA6ICMwMDAwMDAsXHJcbiAgICA0MDA6ICNmZmZmZmYsXHJcbiAgICA1MDA6ICNmZmZmZmYsXHJcbiAgICA2MDA6ICNmZmZmZmYsXHJcbiAgICA3MDA6ICNmZmZmZmYsXHJcbiAgICA4MDA6ICNmZmZmZmYsXHJcbiAgICA5MDA6ICNmZmZmZmYsXHJcbiAgICBBMTAwOiAjMDAwMDAwLFxyXG4gICAgQTIwMDogIzAwMDAwMCxcclxuICAgIEE0MDA6ICNmZmZmZmYsXHJcbiAgICBBNzAwOiAjZmZmZmZmLFxyXG4gICksXHJcbik7XHJcblxyXG4kX2FjY2VudF9wYWxsZXRlOiAoXHJcbiAgNTA6ICNlMGZiZmIsXHJcbiAgMTAwOiAjYjNmNGY1LFxyXG4gIDIwMDogIzgwZWRlZixcclxuICAzMDA6ICM0ZGU2ZTgsXHJcbiAgNDAwOiAjMjZlMGUzLFxyXG4gIDUwMDogIzAwZGJkZSxcclxuICA2MDA6ICMwMGQ3ZGEsXHJcbiAgNzAwOiAjMDBkMmQ1LFxyXG4gIDgwMDogIzAwY2RkMSxcclxuICA5MDA6ICMwMGM0YzgsXHJcbiAgQTEwMDogI2YxZmZmZixcclxuICBBMjAwOiAjYmVmZGZmLFxyXG4gIEE0MDA6ICM4YmZjZmYsXHJcbiAgQTcwMDogIzcxZmJmZixcclxuICBjb250cmFzdDogKFxyXG4gICAgNTA6ICMwMDAwMDAsXHJcbiAgICAxMDA6ICMwMDAwMDAsXHJcbiAgICAyMDA6ICMwMDAwMDAsXHJcbiAgICAzMDA6ICMwMDAwMDAsXHJcbiAgICA0MDA6ICMwMDAwMDAsXHJcbiAgICA1MDA6ICMwMDAwMDAsXHJcbiAgICA2MDA6ICMwMDAwMDAsXHJcbiAgICA3MDA6ICMwMDAwMDAsXHJcbiAgICA4MDA6ICMwMDAwMDAsXHJcbiAgICA5MDA6ICMwMDAwMDAsXHJcbiAgICBBMTAwOiAjMDAwMDAwLFxyXG4gICAgQTIwMDogIzAwMDAwMCxcclxuICAgIEE0MDA6ICMwMDAwMDAsXHJcbiAgICBBNzAwOiAjMDAwMDAwLFxyXG4gICksXHJcbik7XHJcblxyXG4kY29sb3JfcHJpbWFyeTogbWFwX2dldCgkX3ByaW1hcnlfcGFsbGV0ZSwgQTcwMCk7XHJcbiRjb2xvcl9wcmltYXJ5X2Rhcms6IG1hcF9nZXQoJF9wcmltYXJ5X3BhbGxldGUsIEE1MDApO1xyXG4kY29sb3JfYWNjZW50OiAjYmYxZjM0O1xyXG4kY29sb3JfZ3JleTogIzRmNGY0ZjtcclxuJGNvbG9yX2JsdWU6ICMxZDM1NTc7XHJcbiRjb2xvcl9ibHVlX2Zvcm06ICMwMTMxNzE7XHJcbiRjb2xvcl9iYWNrZ3JvdW5kX2Zvcm06ICNmMWVjZjY7XHJcbiJdfQ== */"] });


/***/ }),

/***/ "WyYs":
/*!******************************************************!*\
  !*** ./src/app/components/dialogs/dialog.service.ts ***!
  \******************************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var src_app_pages_story_two_dialogs_dataAvaliabilityPerCountry_dataAvaliabilityPerCountry_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pages/story-two/dialogs/dataAvaliabilityPerCountry/dataAvaliabilityPerCountry.component */ "Xd95");
/* harmony import */ var _baseDialogService_abstract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseDialogService.abstract */ "frdL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");




// import { BaselineDescriptionDialogComponent } from './baselineDescriptionDialog/baselineDescriptionDialog.component';
// import { InvalidParametersDialogComponent } from './invalidParametersDialog/invalidParametersDialog.component';
// import { MapSettingsDialogComponent } from './mapSettingsDialog/mapSettingsDialog.component';
// import { ScenarioTypeDialogComponent } from './scenarioTypeDialog/scenarioTypeDialog.component';
// import { ShareDialogComponent } from './shareDialog/dialogShare.component';
class DialogService extends _baseDialogService_abstract__WEBPACK_IMPORTED_MODULE_1__["BaseDialogService"] {
    constructor(dialog) {
        super(dialog);
        this.dialog = dialog;
    }
    openDialogForComponent(contentComponent, data, width = '80vw', height = '80vh') {
        return this.openDialog('anyDialog', contentComponent, true, data, {
            width,
            height,
        });
    }
    // public openShareDialog(shareLink: string): Promise<DialogData> {
    //   return this.openDialog('sharingDialog', ShareDialogComponent, true, { shareLink });
    // }
    openStoryTwoDataAvaliabilityPercountryComponent() {
        return this.openDialog('scenarioTypeDialog', src_app_pages_story_two_dialogs_dataAvaliabilityPerCountry_dataAvaliabilityPerCountry_component__WEBPACK_IMPORTED_MODULE_0__["DataAvaliabilityPercountryComponent"]);
    }
}
DialogService.ɵfac = function DialogService_Factory(t) { return new (t || DialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
DialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DialogService, factory: DialogService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Xd95":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/story-two/dialogs/dataAvaliabilityPerCountry/dataAvaliabilityPerCountry.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: DataAvaliabilityPercountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataAvaliabilityPercountryComponent", function() { return DataAvaliabilityPercountryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DataAvaliabilityPercountryComponent {
    constructor() { }
    ngOnInit() {
    }
}
DataAvaliabilityPercountryComponent.ɵfac = function DataAvaliabilityPercountryComponent_Factory(t) { return new (t || DataAvaliabilityPercountryComponent)(); };
DataAvaliabilityPercountryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataAvaliabilityPercountryComponent, selectors: [["app-data-avaliability-percountry"]], decls: 2, vars: 0, template: function DataAvaliabilityPercountryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "data-avaliability-percountry works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRhQXZhbGlhYmlsaXR5UGVyQ291bnRyeS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");
/* harmony import */ var src_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/material.module */ "wLiR");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/pages.module */ "dgmN");
/* harmony import */ var _dialogs_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dialogs/table-dialog/table.module */ "zc9p");
/* harmony import */ var _pages_story_three_modal_modal_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/story-three/modal/modal.module */ "H5P0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");








// import { TableDialogComponent } from './dialogs/table-dialog/table-dialog.component';




class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            src_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _pages_pages_module__WEBPACK_IMPORTED_MODULE_8__["PagesModule"],
            _dialogs_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_9__["TableModule"],
            _pages_story_three_modal_modal_module__WEBPACK_IMPORTED_MODULE_10__["ModalModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        src_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
        _pages_pages_module__WEBPACK_IMPORTED_MODULE_8__["PagesModule"],
        _dialogs_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_9__["TableModule"],
        _pages_story_three_modal_modal_module__WEBPACK_IMPORTED_MODULE_10__["ModalModule"]] }); })();


/***/ }),

/***/ "a1jd":
/*!********************************************************!*\
  !*** ./src/app/pages/story-one/story-one.component.ts ***!
  \********************************************************/
/*! exports provided: StoryOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryOneComponent", function() { return StoryOneComponent; });
/* harmony import */ var src_assets_scss_colourPalette_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/assets/scss/colourPalette.enum */ "PVfv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


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
        width: 10000,
        height: 4532,
        font_css: 'Calibri',
        calculate_zoom: false,
        zoomControl: true,
        storymap: {
            language: 'en',
            map_type: 'zoomify',
            map_as_image: true,
            map_background_color: 'white',
            zoomify: {
                path: 'https://micronutrientsupport.github.io/MAPS_story/',
                //    path: './assets/images/',
                width: 5000,
                height: 2266,
                tolerance: 0.9 // required; display tolerance
            },
            slides: [{
                    type: "overview",
                    location: {
                        //   lat: decimal,      // latitude of point on map
                        //   lon: decimal       // longitude of point on map
                        zoom: 15
                    },
                    text: {
                        headline: 'How the tool works',
                        text: 'TEXT' + '<br>' + '<button id="test-button" >test</button>' // may contain HTML markup
                    },
                    media: {
                        url: '',
                    }
                },
                {
                    location: {
                        lat: 83.9486,
                        lon: -158,
                        zoom: 8
                    },
                    text: {
                        headline: 'Country selection',
                        text: 'Country selection'
                            + '<br>' + '<button id="test-button" >Data Availability per country</button>' // may contain HTML markup
                    },
                    media: {
                        url: './assets/images/africa_map_selection.PNG',
                    }
                },
                {
                    location: {
                        lat: 81,
                        lon: -160,
                        zoom: 8
                    },
                    text: {
                        headline: 'Micronutrient selection',
                        text: 'The current estimate of the micronutrient situation in the population can be explored through: proxies for dietary composition [->], or through direct measures using biomarkers [->] pre-loaded in the tool, or provided by users [->]'
                            + '<br>' + '<button id="test-button" >test</button>' // may contain HTML markup
                    },
                    media: {
                        url: '',
                    }
                },
                {
                    location: {
                        lat: 81.5,
                        lon: -50,
                        zoom: 4
                    },
                    text: {
                        headline: 'Baseline Map',
                        text: 'Present day micronutrient information for selection'
                            + '<br>' + '<button class="angular-lookalike" id="test-button" >test</button>' // may contain HTML markup
                    },
                    media: {
                        url: './assets/images/malawi_map.PNG',
                    }
                },
                {
                    location: {
                        lat: 81,
                        lon: -10,
                        zoom: 4
                    },
                    text: {
                        headline: 'Baseline Graphs',
                        text: 'The current estimate of the micronutrient situation in the population can be explored through: proxies for dietary composition [->], or through direct measures using biomarkers [->] pre-loaded in the tool, or provided by users [->]'
                            + '<br>' + '<button id="test-button" >test</button>' // may contain HTML markup
                    },
                    media: {
                        url: './assets/images/MAPS_baseline_Graphs.PNG',
                    }
                },
                {
                    location: {
                        lat: 76.5,
                        lon: -130.1999,
                        zoom: 4
                    },
                    text: {
                        headline: 'Projections',
                        text: '...' // may contain HTML markup
                    },
                    media: {
                        url: './assets/images/MAPS_Malawi%20Projections.PNG',
                    }
                },
                {
                    location: {
                        lat: 72.5,
                        lon: -30.1999,
                        zoom: 4
                    },
                    text: {
                        headline: 'Dietary Change scenarios',
                        text: '...' // may contain HTML markup
                    },
                    media: {
                        url: '',
                    }
                },
                {
                    location: {
                        lat: 76.5,
                        lon: -120.1999,
                    },
                    text: {
                        headline: 'Video Walk through',
                        text: '...' // may contain HTML markup
                    },
                    media: {
                        url: '',
                    }
                }
            ] // required; array of slide objects (see below)
        }
    };
    const storymap = new KLStoryMap.StoryMap('mapdiv', storymap_options);
    window.onresize = function () {
        storymap.updateDisplay(); // this isn't automatic
    };
}
class StoryOneComponent {
    constructor() {
        // storymap_data can be an URL or a Javascript object
        this.title = 'storymap';
    }
    ngOnInit() {
        triggerStory();
    }
    ngAfterViewInit() {
        // $("#test-button").css({ backgroundColor: "blue", borderLeft: "5px solid #ccc" });
        $(".angular-lookalike").css({ backgroundColor: 'blue', fontSize: "15px" });
        $(".angular-lookalike").click(() => {
            $(".angular-lookalike").css({ backgroundColor: src_assets_scss_colourPalette_enum__WEBPACK_IMPORTED_MODULE_0__["ColourPalette"].PRIMARY, borderLeft: "5px solid #ccc" });
        });
    }
    testClick() {
        alert('click');
    }
}
StoryOneComponent.ɵfac = function StoryOneComponent_Factory(t) { return new (t || StoryOneComponent)(); };
StoryOneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StoryOneComponent, selectors: [["app-story-one"]], decls: 2, vars: 0, consts: [["id", "mapdiv", 2, "width", "100%", "height", "600px"], ["id", "test", 2, "width", "100%", "height", "600px", "background-color", "aliceblue"]], template: function StoryOneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
    } }, styles: ["button[_ngcontent-%COMP%] {\n  background-color: #00BFA5;\n  border: 1px solid #00BFA5;\n}\n\n#test-button[_ngcontent-%COMP%] {\n  background-color: #00BFA5;\n  border: 1px solid #00BFA5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzdG9yeS1vbmUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzY3NzXFxfY29sb3VyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSx5QkNnRWM7RUQvRGQseUJBQUE7QUFBRjs7QUFFQztFQUNDLHlCQzREYztFRDNEZCx5QkFBQTtBQUNGIiwiZmlsZSI6InN0b3J5LW9uZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy9hc3NldHMvc2Nzcy9fY29sb3VyJztcclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfcHJpbWFyeTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3JfcHJpbWFyeTtcclxuIH1cclxuICN0ZXN0LWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX3ByaW1hcnk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yX3ByaW1hcnk7XHJcbiB9XHJcbiIsIiRfcHJpbWFyeV9wYWxsZXRlOiAoXHJcbiAgNTA6ICNFMEYyRjEsXHJcbiAgMTAwOiAjQjJERkRCLFxyXG4gIDIwMDogIzgwQ0JDNCxcclxuICAzMDA6ICM0REI2QUMsXHJcbiAgNDAwOiAjMjZBNjlBLFxyXG4gIDUwMDogIzAwOTY4OCxcclxuICA2MDA6ICMwMDg5N0IsXHJcbiAgNzAwOiAjMDA3OTZCLFxyXG4gIDgwMDogIzAwNjk1QyxcclxuICA5MDA6ICMwMDRENDAsXHJcbiAgQTEwMDogI0E3RkZFQixcclxuICBBMjAwOiAjNjRGRkRBLFxyXG4gIEE0MDA6ICMxREU5QjYsXHJcbiAgQTcwMDogIzAwQkZBNSxcclxuICBjb250cmFzdDogKFxyXG4gICAgNTA6ICMwMDAwMDAsXHJcbiAgICAxMDA6ICMwMDAwMDAsXHJcbiAgICAyMDA6ICMwMDAwMDAsXHJcbiAgICAzMDA6ICMwMDAwMDAsXHJcbiAgICA0MDA6ICNmZmZmZmYsXHJcbiAgICA1MDA6ICNmZmZmZmYsXHJcbiAgICA2MDA6ICNmZmZmZmYsXHJcbiAgICA3MDA6ICNmZmZmZmYsXHJcbiAgICA4MDA6ICNmZmZmZmYsXHJcbiAgICA5MDA6ICNmZmZmZmYsXHJcbiAgICBBMTAwOiAjMDAwMDAwLFxyXG4gICAgQTIwMDogIzAwMDAwMCxcclxuICAgIEE0MDA6ICNmZmZmZmYsXHJcbiAgICBBNzAwOiAjZmZmZmZmLFxyXG4gICksXHJcbik7XHJcblxyXG4kX2FjY2VudF9wYWxsZXRlOiAoXHJcbiAgNTA6ICNlMGZiZmIsXHJcbiAgMTAwOiAjYjNmNGY1LFxyXG4gIDIwMDogIzgwZWRlZixcclxuICAzMDA6ICM0ZGU2ZTgsXHJcbiAgNDAwOiAjMjZlMGUzLFxyXG4gIDUwMDogIzAwZGJkZSxcclxuICA2MDA6ICMwMGQ3ZGEsXHJcbiAgNzAwOiAjMDBkMmQ1LFxyXG4gIDgwMDogIzAwY2RkMSxcclxuICA5MDA6ICMwMGM0YzgsXHJcbiAgQTEwMDogI2YxZmZmZixcclxuICBBMjAwOiAjYmVmZGZmLFxyXG4gIEE0MDA6ICM4YmZjZmYsXHJcbiAgQTcwMDogIzcxZmJmZixcclxuICBjb250cmFzdDogKFxyXG4gICAgNTA6ICMwMDAwMDAsXHJcbiAgICAxMDA6ICMwMDAwMDAsXHJcbiAgICAyMDA6ICMwMDAwMDAsXHJcbiAgICAzMDA6ICMwMDAwMDAsXHJcbiAgICA0MDA6ICMwMDAwMDAsXHJcbiAgICA1MDA6ICMwMDAwMDAsXHJcbiAgICA2MDA6ICMwMDAwMDAsXHJcbiAgICA3MDA6ICMwMDAwMDAsXHJcbiAgICA4MDA6ICMwMDAwMDAsXHJcbiAgICA5MDA6ICMwMDAwMDAsXHJcbiAgICBBMTAwOiAjMDAwMDAwLFxyXG4gICAgQTIwMDogIzAwMDAwMCxcclxuICAgIEE0MDA6ICMwMDAwMDAsXHJcbiAgICBBNzAwOiAjMDAwMDAwLFxyXG4gICksXHJcbik7XHJcblxyXG4kY29sb3JfcHJpbWFyeTogbWFwX2dldCgkX3ByaW1hcnlfcGFsbGV0ZSwgQTcwMCk7XHJcbiRjb2xvcl9wcmltYXJ5X2Rhcms6IG1hcF9nZXQoJF9wcmltYXJ5X3BhbGxldGUsIEE1MDApO1xyXG4kY29sb3JfYWNjZW50OiAjYmYxZjM0O1xyXG4kY29sb3JfZ3JleTogIzRmNGY0ZjtcclxuJGNvbG9yX2JsdWU6ICMxZDM1NTc7XHJcbiRjb2xvcl9ibHVlX2Zvcm06ICMwMTMxNzE7XHJcbiRjb2xvcl9iYWNrZ3JvdW5kX2Zvcm06ICNmMWVjZjY7XHJcbiJdfQ== */"] });


/***/ }),

/***/ "dgmN":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _story_one_story_one_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./story-one/story-one.component */ "a1jd");
/* harmony import */ var _story_two_story_two_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./story-two/story-two.component */ "6qrQ");
/* harmony import */ var _story_three_story_three_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./story-three/story-three.component */ "UDBt");
/* harmony import */ var _story_four_story_four_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./story-four/story-four.component */ "t+lV");
/* harmony import */ var _story_five_story_five_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./story-five/story-five.component */ "3SbQ");
/* harmony import */ var _story_six_story_six_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./story-six/story-six.component */ "SSBc");
/* harmony import */ var _story_eight_story_eight_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./story-eight/story-eight.component */ "El+l");
/* harmony import */ var _story_nine_story_nine_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./story-nine/story-nine.component */ "Ai5k");
/* harmony import */ var _story_seven_story_seven_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./story-seven/story-seven.component */ "8YQv");
/* harmony import */ var _dialogs_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../dialogs/table-dialog/table.module */ "zc9p");
/* harmony import */ var _story_three_modal_modal_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./story-three/modal/modal.module */ "H5P0");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _story_two_modal_story2_modal_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./story-two/modal/story2_modal.module */ "Kv0e");
/* harmony import */ var _story_two_dialogs_dataAvaliabilityPerCountry_dataAvaliabilityPerCountry_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./story-two/dialogs/dataAvaliabilityPerCountry/dataAvaliabilityPerCountry.component */ "Xd95");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");
















class PagesModule {
}
PagesModule.ɵfac = function PagesModule_Factory(t) { return new (t || PagesModule)(); };
PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _dialogs_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_10__["TableModule"],
            _story_three_modal_modal_module__WEBPACK_IMPORTED_MODULE_11__["ModalModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _story_two_modal_story2_modal_module__WEBPACK_IMPORTED_MODULE_13__["Story2ModalModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_story_one_story_one_component__WEBPACK_IMPORTED_MODULE_1__["StoryOneComponent"],
        _story_two_story_two_component__WEBPACK_IMPORTED_MODULE_2__["StoryTwoComponent"],
        _story_three_story_three_component__WEBPACK_IMPORTED_MODULE_3__["StoryThreeComponent"],
        _story_four_story_four_component__WEBPACK_IMPORTED_MODULE_4__["StoryFourComponent"],
        _story_five_story_five_component__WEBPACK_IMPORTED_MODULE_5__["StoryFiveComponent"],
        _story_six_story_six_component__WEBPACK_IMPORTED_MODULE_6__["StorySixComponent"],
        _story_seven_story_seven_component__WEBPACK_IMPORTED_MODULE_9__["StorySevenComponent"],
        _story_eight_story_eight_component__WEBPACK_IMPORTED_MODULE_7__["StoryEightComponent"],
        _story_nine_story_nine_component__WEBPACK_IMPORTED_MODULE_8__["StoryNineComponent"],
        _story_two_dialogs_dataAvaliabilityPerCountry_dataAvaliabilityPerCountry_component__WEBPACK_IMPORTED_MODULE_14__["DataAvaliabilityPercountryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _dialogs_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_10__["TableModule"],
        _story_three_modal_modal_module__WEBPACK_IMPORTED_MODULE_11__["ModalModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _story_two_modal_story2_modal_module__WEBPACK_IMPORTED_MODULE_13__["Story2ModalModule"]] }); })();


/***/ }),

/***/ "frdL":
/*!******************************************************************!*\
  !*** ./src/app/components/dialogs/baseDialogService.abstract.ts ***!
  \******************************************************************/
/*! exports provided: BaseDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseDialogService", function() { return BaseDialogService; });
class BaseDialogService {
    constructor(dialog) {
        this.dialog = dialog;
        this.customBackdropCounts = new Map();
        this.customBackdrop = document.createElement('div');
        this.customBackdrop.classList.add('dialog-custom-backdrop');
    }
    makeDialogData(id, closable = true, dataIn) {
        const data = {
            closable,
            requiresRefreshOnClose: false,
            close: () => {
                const dialogRef = this.dialog.getDialogById(id);
                if (null == dialogRef) {
                    console.log(`Attempt to close non-existent dialog with id "${id}."`);
                }
                else {
                    dialogRef.close(data);
                }
            },
            dataIn,
            dataOut: {},
        };
        return data;
    }
    openDialog(dialogId, contentComponent, closable = true, customData, configIn = {}, parentElement) {
        // don't open if already open
        let dialogRef = this.dialog.getDialogById(dialogId);
        if (null != dialogRef) {
            console.warn('Dialog already open');
            return Promise.reject(new Error('Dialog already open'));
        }
        else {
            const dialogData = this.makeDialogData(dialogId, closable, customData);
            const config = Object.assign({ maxHeight: '95vh', maxWidth: '90vw', panelClass: 'base-dialog', data: dialogData, id: dialogId, hasBackdrop: (null == parentElement), disableClose: !closable }, configIn);
            this.addCustomBackdrop(parentElement);
            dialogRef = this.dialog.open(contentComponent, config);
            void dialogRef.afterClosed().toPromise().then(() => {
                if (null != parentElement) {
                    this.tryRemoveCustomBackdrop(parentElement);
                }
            });
            return dialogRef.afterClosed().toPromise().then(() => dialogData);
        }
    }
    addCustomBackdrop(parentElement) {
        if (null != parentElement) {
            if (this.customBackdropCounts.has(parentElement)) {
                this.customBackdropCounts.set(parentElement, this.customBackdropCounts.get(parentElement) + 1);
            }
            else {
                this.customBackdropCounts.set(parentElement, 1);
                parentElement.classList.add('dialog-custom-backdrop-wrapper');
                parentElement.appendChild(this.customBackdrop);
            }
        }
    }
    tryRemoveCustomBackdrop(parentElement) {
        if ((null != parentElement) && (this.customBackdropCounts.has(parentElement))) {
            this.customBackdropCounts.set(parentElement, this.customBackdropCounts.get(parentElement) - 1);
            if (0 === this.customBackdropCounts.get(parentElement)) {
                this.customBackdropCounts.delete(parentElement);
                parentElement.classList.remove('dialog-custom-backdrop-wrapper');
                parentElement.removeChild(this.customBackdrop);
            }
        }
    }
}


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "STbY");





class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 16, vars: 1, consts: [["color", "primary"], ["mat-raised-button", "", "color", "secondary", "routerLink", "", "routerLinkActive", "active"], [1, "title"], ["src", "../../assets/images/logos/maps-logo-full-white.svg", "alt", "MAPS-logo"], ["mat-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-menu", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Item 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Item 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "router-outlet");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\nmat-toolbar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\nmat-toolbar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 2em;\n  margin-right: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUNBO0FBQUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFFSjtBQURJO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FBR04iLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRvb2xiYXIge1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgLnRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaW1nIHtcclxuICAgICAgaGVpZ2h0OiAyZW07XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "t+lV":
/*!**********************************************************!*\
  !*** ./src/app/pages/story-four/story-four.component.ts ***!
  \**********************************************************/
/*! exports provided: StoryFourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryFourComponent", function() { return StoryFourComponent; });
/* harmony import */ var src_assets_scss_colourPalette_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/assets/scss/colourPalette.enum */ "PVfv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _story_two_modal_story2_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../story-two/modal/story2_modal.service */ "v+Uo");



function triggerStory() {
    var storymap_options = {
        width: 7100,
        height: 2500,
        font_css: 'Calibri',
        calculate_zoom: false,
        zoomControl: true,
        storymap: {
            language: 'en',
            map_type: 'zoomify',
            map_as_image: true,
            map_background_color: 'white',
            zoomify: {
                path: 'https://micronutrientsupport.github.io/MAPS_story_vitA/',
                //    path: './assets/images/',
                width: 3500,
                height: 1250,
                tolerance: 0.9 // required; display tolerance
            },
            slides: [{
                    type: "overview",
                    location: {
                        //   lat: decimal,      // latitude of point on map
                        //   lon: decimal       // longitude of point on map
                        zoom: 10
                    },
                    text: {
                        headline: 'How does the MAPS tool make subnational estimates of dietary supply of micronutrients?',
                        text: ' ',
                    },
                    media: {
                        url: '',
                    }
                },
                //slide1
                {
                    location: {
                        lat: 82.5,
                        lon: -120,
                        zoom: 8
                    },
                    text: {
                        headline: 'MAPS Tool Landing Page',
                        text: 'MAPS is a web-hosted tool, communicating estimates of dietary micronutrient (MN) supplies and deficiency risks at national and sub-national scales in Africa.'
                            + '<br>'
                            + '   <p> ➤ Navigate to the MAPS Tool Portal from the landing page. </p>   '
                            + '<br>'
                            + '<button  class="mat-focus-indicator mat-flat-button mat-button-base mat-primary md-ripples ripples-light"> <a href="https://develop--micronutrientsupport-tool.netlify.app/"> MAPS Tool </a> </button>'
                    },
                    media: {
                        url: '',
                    }
                },
                {
                    location: {
                        lat: 82.5,
                        lon: -60,
                        zoom: 8
                    },
                    text: {
                        headline: 'The Quick MAPS tool',
                        text: 'Launch the MAPS Tool using default mode settings to explore micronutrient deficiencies in your geography of interest and possible interventions to mitigate the Micronutrient deficiencies'
                            + '<br>'
                            + '<p>Users can generate estimates of dietary micronutrient supply and inadequacy using the map feature and drop down selections for various micronutrients available on Quick MAPS.</p> '
                    },
                    media: {
                        url: '',
                    }
                },
                {
                    location: {
                        lat: 83,
                        lon: 35,
                        zoom: 8
                    },
                    text: {
                        headline: 'Vitamin A supply/inadequacy',
                        text: '   <p>In this example, we will demonstrate the functionality of the quickMAPS tool by estimating dietary vitamin A supply </p>  '
                            + '➤ Country selection'
                            + '<br>'
                            + '➤  Micronutrient selection'
                            + '<br>'
                            + '➤  Measure of nutrient deficiency'
                            + '<br>'
                            + '➤  Data source selection'
                    },
                    media: {
                        url: './assets/images/selection.PNG',
                    }
                },
                {
                    location: {
                        lat: 75,
                        lon: -140,
                        zoom: 8
                    },
                    text: {
                        headline: 'Household Consumption & Expenditure Surveys',
                        text: '➤ For the first example, under “dietary data source”, we will select “<strong>Fourth integrated household survey (IHS4)</strong>” to estimate dietary vitamin A supply, using HCES data from Malawi.'
                            + '<br>'
                            + '➤ The MAPS Tool is supported by data from Household Consumption & Expenditure Surveys, a rich source of data that can be used to inform our understanding of diets across populations. '
                            + '<br>'
                            + 'Samples of this size presents the opportunity to separate results by various sub-population characteristics such as the geographic region participants are from, their relative wealth, or the time of year they took part in the survey.'
                    },
                    media: {
                        url: '',
                    }
                },
                {
                    location: {
                        lat: 75,
                        lon: -92,
                        zoom: 8
                    },
                    text: {
                        headline: 'Household Consumption & Expenditure Surveys',
                        text: '➤ A family of large sub-nationally-representative household surveys, which are primarily designed to provide data to characterise an array of socioeconomic conditions. '
                            + '<br>'
                            + '➤ Food supply modules of these surveys collect data on household food consumption using a predefined list of commonly consumed food items.'
                            + '<br>'
                            + '➤ Operated by the Food and Agriculture Organization (FAO).'
                            + '<br>'
                            + '<a class="textlink" href="https://www.lshtm.ac.uk/aboutus/people/tang.kevin" target="_blank">Tang et al 20XX <img class="tooltip" src="../../assets/images/textlink_icon.png"></a>'
                            + '<a class="weblink" href="https://journals.sagepub.com/doi/abs/10.1177/15648265120333S203" target="_blank">Weisell & Dop 2012<img class="tooltip" src="../../assets/images/weblink_icon.png"></a>'
                    },
                    media: {
                        url: 'https://selfhelpafrica.org/ie/wp-content/uploads/sites/4/2020/11/reports.jpg',
                        // caption: string,   // optional; brief explanation of media content
                        credit: 'selfhelpafrica.org' // optional; creator of media content
                    }
                },
                {
                    location: {
                        lat: 75,
                        lon: -45,
                        zoom: 8
                    },
                    text: {
                        headline: 'HCES: How to interpret results (district level maps)',
                        text: '➤ Since HCES methods collect dietary data, users will be able to explore how micronutrient supply, apparent intake, and inadequacy vary at sub-national scales within countries.   '
                            + '<br>'
                            + '➤ For example, using HCES data, '
                            + 'users can use the quickMAPS tool to estimate the prevalence of inadequate apparent vitamin A supply by administrative district in Malawi.'
                    },
                    media: {
                        url: './assets/images/districtlevelMalawi.png',
                        // caption: string,   // optional; brief explanation of media content
                        credit: '' // optional; creator of media content
                    }
                },
                {
                    location: {
                        lat: 76,
                        lon: 45,
                        zoom: 8
                    },
                    text: {
                        headline: 'HCES: How to interpret results (food groups)',
                        text: '➤ Similar to the food balance sheet data, we can identify the food groups supplying the most to the vitamin A to the diet.'
                            + '<br>'
                            + '➤ Here we see that in Malawi, the largest contributions to vitamin A supply from the diet is from green leafy vegetable, orange fleshed fruits and orange-fleshed sweet potatoes.'
                            + '<br>'
                            + ' ➤ With HCES data, users will be able to view how contributions from different food groups vary across seasons and across subnational geographies. '
                    },
                    media: {
                        url: '',
                        // caption: string,   // optional; brief explanation of media content
                        credit: '' // optional; creator of media content
                    }
                },
                {
                    location: {
                        lat: 75,
                        lon: -35,
                        zoom: 8
                    },
                    text: {
                        headline: 'HCES: How to interpret results (district level maps)',
                        text: '➤ Additionally, HCES data can be used to explore other sub-populations of interest and model scenarios relevant to micronutrient policies within a country.'
                            + '<br>'
                            + '➤ In this example, vitamin A apparent intake and contributions from large-scale food fortification is lowest in the poorest, most rural populations in Malawi.'
                            + '<br>'
                            + '<a class="textlink" href="https://nyaspubs.onlinelibrary.wiley.com/doi/full/10.1111/nyas.14697" target="_blank">Tang et al 2021 <img class="tooltip" src="../../assets/images/textlink_icon.png"></a>'
                    },
                    media: {
                        url: './assets/images/Malawi_AdultFemaleEquivalent.PNG',
                        caption: 'Graph displaying AdultFemaleEquivalent data for Malawi',
                    }
                },
                //HCES: Strengths & weaknesses
                {
                    location: {
                        lat: 75,
                        lon: -35,
                        zoom: 8
                    },
                    text: {
                        headline: 'HCES: '
                            + '<br>'
                            + 'Strengths & weaknesses',
                        text: '<h4>Strenghts </h4>'
                            + '<li><strong>Available</strong> for many LMICs</li>'
                            + '<li>Nationally and sub-nationally <strong>representative</strong>     </li>'
                            + '<li> Includes detailed data on household food consumption quantity, source of food acquisition (e.g., own production, market purchased), and money spent if purchased </li>'
                            + '<li>Includes data on household characteristics (poverty, geography, living conditions, socioeconomic status), enabling subnational modeling and equity considerations </li>'
                            + '<h4>Weaknesses </h4>'
                            + '<li>Optimistically collected every <strong>5 years</strong>    </li>'
                            + '<li> Food consumption data is subject to <strong>recall error</strong>   </li>'
                            + '<li> <strong>Foods consumed away from home</strong> often inadequately captured or not captured at all    </li>'
                            + '<li>Intrahousehold food distribution unknown…no insights into <strong>populations of policy priority</strong> (e.g., infants, children, women, girls)    </li>'
                            + '<br>'
                            + '<a class="textlink" href="https://www.lshtm.ac.uk/aboutus/people/tang.kevin" target="_blank">Tang et al 20XX <img class="tooltip" src="../../assets/images/textlink_icon.png"></a>'
                    },
                    media: {
                        url: '',
                        caption: '',
                    }
                },
                {
                    location: {
                        lat: 60,
                        lon: -145,
                        zoom: 8
                    },
                    text: {
                        headline: 'Food Balance Sheets',
                        text: ' ➤ For the second example, under “dietary data source”, we will select ”food balance sheets” to estimate dietary vitamin A supply at national levels.'
                            + '<br>'
                            + '➤ Food balance sheet data is available for all countries in the MAPS tool '
                    },
                    media: {
                        url: '',
                    }
                },
                {
                    location: {
                        lat: 60,
                        lon: -90,
                        zoom: 8
                    },
                    text: {
                        headline: 'Food Balance Sheets',
                        text: '➤ A national-level accounting framework collecting annual data on production, imports and and exports of agricultural products.'
                            + '<br>'
                            + '➤ Reports the national ‘availability’ of 94 different food items, where estimates of national supply adjusts for food refuse and retention to develop a proxy for food available for consumption.'
                            + '<br>'
                            + '➤ Operated by the Food and Agriculture Organization (FAO).'
                            + '<br>'
                            + '<a class="textlink" href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0175554" target="_blank">Beal et al 2017<img class="tooltip" src="../../assets/images/textlink_icon.png"></a>'
                            + '<a class="weblink" href="https://www.fao.org/faostat/en/#data/FBS" target="_blank">FAOSTAT<img class="tooltip" src="../../assets/images/weblink_icon.png"></a>'
                            + '<a class="weblink" href="https://journals.sagepub.com/doi/abs/10.1177/15648265120333S203" target="_blank">Weisell& Dop 2012<img class="tooltip" src="../../assets/images/weblink_icon.png"></a>'
                    },
                    media: {
                        url: '',
                    }
                },
                {
                    location: {
                        lat: 60,
                        lon: -45,
                        zoom: 8
                    },
                    text: {
                        headline: 'Food Balance Sheets: How to interpret results',
                        text: '➤ The results using the food balance sheet data show that at the national level in Malawi, the food groups that contribute the most to the total dietary vitamin A supply are vegetables, sweet potatoes, and fruits'
                    },
                    media: {
                        url: './assets/images/Malawi_VitA_monthlyFoodItemCard.PNG',
                        // caption: string,   // optional; brief explanation of media content
                        credit: '' // optional; creator of media content
                    }
                },
                {
                    location: {
                        lat: 60,
                        lon: -45,
                        zoom: 8
                    },
                    text: {
                        headline: 'Food Balance Sheets: '
                            + '<br>'
                            + 'Strengths & weaknesses',
                        text: '<h4>Strenghts </h4>'
                            + '<li><strong>Available</strong>for almost all countries using <strong>consistent</strong> methodology          </li>'
                            + '<li><strong>Annual</strong> estimates over a long time period         </li>'
                            + '<li> Good for: <strong>between country</strong> comparison, <strong>trends</strong> over time, ‘<strong>food system</strong>’ applications          </li>'
                            + '<h4>Weaknesses </h4>'
                            + '<li> ‘Food available for consumption’ <strong>≠ consumption</strong>          </li>'
                            + '<li> National average might mask <strong>sub-national heterogeneity</strong>          </li>'
                            + '<li> Likely to have uncertainty regarding <strong>food waste, food acquired from informal cross-border trade, and homegrown foods </strong>  </li>'
                            + '<br>'
                            + '<a class="weblink" href="https://pubmed.ncbi.nlm.nih.gov/32556245/" target="_blank">Thar et al 2020<img class="tooltip" src="../../assets/images/weblink_icon.png"></a>'
                    },
                    media: {
                        url: '',
                        caption: '',
                    }
                },
            ] // required; array of slide objects (see below)
        }
    };
    const storymap = new KLStoryMap.StoryMap('mapdiv', storymap_options);
    window.onresize = function () {
        storymap.updateDisplay(); // this isn't automatic
    };
}
class StoryFourComponent {
    constructor(Story2ModalService) {
        this.Story2ModalService = Story2ModalService;
        this.title = 'storymap';
        this.dataSourceArray = [
            'Household Consumption & Expenditure Surveys',
            'Food Balance Sheet data',
        ];
    }
    ngOnInit() {
        triggerStory();
    }
    ngAfterViewInit() {
        var _a;
        (_a = document.getElementById("test-button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => { this.testClick(); });
        $(".Story1_italic").css({ fontStyle: 'italic', fontSize: "15px" });
        $(".Story1_paragraph").css({ fontStyle: 'normal', fontSize: "15px" });
        $(".test-button").css({ backgroundColor: src_assets_scss_colourPalette_enum__WEBPACK_IMPORTED_MODULE_0__["ColourPalette"].PRIMARY, fontSize: "15px", color: "white", padding: "10px", margin: "15px" });
        $("#procon-button").css({ backgroundColor: src_assets_scss_colourPalette_enum__WEBPACK_IMPORTED_MODULE_0__["ColourPalette"].PRIMARY, fontSize: "15px", color: "white", padding: "10px", margin: "15px" });
        $("#viewData").css({
            background: "linear-gradient(-120deg, transparent 1em, #0099C3 1.05em , #0099C3 1.5em, transparent 1.45em, transparent 2em, #0099C3 2.05em) top no-repeat",
            backgroundColor: src_assets_scss_colourPalette_enum__WEBPACK_IMPORTED_MODULE_0__["ColourPalette"].PRIMARY, color: "white", fontSize: "15px", padding: "10px", margin: "15px"
        });
        $('.open').click(function () {
            $('.modal-outer').fadeIn('slow');
            $('.open').css({ display: 'none' });
        });
        $('.close').click(function () {
            $('.modal-outer').fadeOut('fast');
            $('.open').css({ display: 'block' });
        });
        $(".textlink").attr('title', 'Link to article');
        $(".weblink").attr('title', 'Link to web resource');
        // $(".Story1_italic").click(() => {
        //   $(".Story1_italic").css({ backgroundColor: ColourPalette.PRIMARY, borderLeft: "5px solid #ccc" });
        // });
    }
    testClick() {
        // alert('click');
        this.openModal('custom-modal-2');
    }
    openModal(id) {
        this.Story2ModalService.open(id);
    }
    closeModal(id) {
        this.Story2ModalService.close(id);
    }
}
StoryFourComponent.ɵfac = function StoryFourComponent_Factory(t) { return new (t || StoryFourComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_story_two_modal_story2_modal_service__WEBPACK_IMPORTED_MODULE_2__["Story2ModalService"])); };
StoryFourComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StoryFourComponent, selectors: [["app-story-four"]], decls: 2, vars: 0, consts: [["id", "mapdiv", 2, "width", "100%", "height", "100%"], ["id", "test", 2, "width", "100%", "height", "600px", "background-color", "aliceblue"]], template: function StoryFourComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
    } }, styles: ["#test-button[_ngcontent-%COMP%] {\n  background-color: #00BFA5;\n  border: 1px solid #00BFA5;\n}\n\n.modal-outer[_ngcontent-%COMP%] {\n  background-color: greenyellow;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100;\n  height: 100;\n}\n\n.modal-inner[_ngcontent-%COMP%] {\n  background-color: lightblue;\n  width: 500px;\n  height: 300px;\n  padding: 25px;\n  margin: 15%;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 800px;\n}\n\ntd.mat-cell[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n  word-break: break-all;\n}\n\noption[_ngcontent-%COMP%] {\n  width: auto;\n  padding: 15px;\n  margin: 15px;\n  background-color: #f1ecf6;\n}\n\nselect[_ngcontent-%COMP%] {\n  font-family: \"Quicksand\";\n  width: auto;\n  padding: 15px;\n  margin: 15px;\n  background-color: #00BFA5;\n}\n\n.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: hidden;\n  width: 120px;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px 0;\n  \n  position: absolute;\n  z-index: 1;\n}\n\n.tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzdG9yeS1mb3VyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xcX2NvbG91ci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVDO0VBQ0MseUJDK0RjO0VEOURkLHlCQUFBO0FBREY7O0FBR0E7RUFDRSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQUY7O0FBRUE7RUFDRSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFDQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7QUFFRjs7QUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQ3VDc0I7QURwQ3hCOztBQURBO0VBQ0Usd0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkMwQmM7QUR0QmhCOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFFQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRiIsImZpbGUiOiJzdG9yeS1mb3VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL2Fzc2V0cy9zY3NzL19jb2xvdXInO1xyXG5cclxuICN0ZXN0LWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX3ByaW1hcnk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yX3ByaW1hcnk7XHJcbiB9XHJcbi5tb2RhbC1vdXRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDA7XHJcbiAgaGVpZ2h0OjEwMDtcclxufVxyXG4ubW9kYWwtaW5uZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgaGVpZ2h0OjMwMHB4O1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgbWFyZ2luOiAxNSU7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDo4MDBweDtcclxufVxyXG50ZC5tYXQtY2VsbCB7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIHdvcmQtYnJlYWs6YnJlYWstYWxsO1xyXG59XHJcbm9wdGlvbntcclxuICB3aWR0aDphdXRvO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl9iYWNrZ3JvdW5kX2Zvcm07XHJcbn1cclxuc2VsZWN0IHtcclxuICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCc7XHJcbiAgd2lkdGg6YXV0bztcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbjogMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfcHJpbWFyeTtcclxufVxyXG5cclxuXHJcblxyXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBwYWRkaW5nOiA1cHggMDtcclxuXHJcbiAgLyogUG9zaXRpb24gdGhlIHRvb2x0aXAgKi9cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcbiIsIiRfcHJpbWFyeV9wYWxsZXRlOiAoXHJcbiAgNTA6ICNFMEYyRjEsXHJcbiAgMTAwOiAjQjJERkRCLFxyXG4gIDIwMDogIzgwQ0JDNCxcclxuICAzMDA6ICM0REI2QUMsXHJcbiAgNDAwOiAjMjZBNjlBLFxyXG4gIDUwMDogIzAwOTY4OCxcclxuICA2MDA6ICMwMDg5N0IsXHJcbiAgNzAwOiAjMDA3OTZCLFxyXG4gIDgwMDogIzAwNjk1QyxcclxuICA5MDA6ICMwMDRENDAsXHJcbiAgQTEwMDogI0E3RkZFQixcclxuICBBMjAwOiAjNjRGRkRBLFxyXG4gIEE0MDA6ICMxREU5QjYsXHJcbiAgQTcwMDogIzAwQkZBNSxcclxuICBjb250cmFzdDogKFxyXG4gICAgNTA6ICMwMDAwMDAsXHJcbiAgICAxMDA6ICMwMDAwMDAsXHJcbiAgICAyMDA6ICMwMDAwMDAsXHJcbiAgICAzMDA6ICMwMDAwMDAsXHJcbiAgICA0MDA6ICNmZmZmZmYsXHJcbiAgICA1MDA6ICNmZmZmZmYsXHJcbiAgICA2MDA6ICNmZmZmZmYsXHJcbiAgICA3MDA6ICNmZmZmZmYsXHJcbiAgICA4MDA6ICNmZmZmZmYsXHJcbiAgICA5MDA6ICNmZmZmZmYsXHJcbiAgICBBMTAwOiAjMDAwMDAwLFxyXG4gICAgQTIwMDogIzAwMDAwMCxcclxuICAgIEE0MDA6ICNmZmZmZmYsXHJcbiAgICBBNzAwOiAjZmZmZmZmLFxyXG4gICksXHJcbik7XHJcblxyXG4kX2FjY2VudF9wYWxsZXRlOiAoXHJcbiAgNTA6ICNlMGZiZmIsXHJcbiAgMTAwOiAjYjNmNGY1LFxyXG4gIDIwMDogIzgwZWRlZixcclxuICAzMDA6ICM0ZGU2ZTgsXHJcbiAgNDAwOiAjMjZlMGUzLFxyXG4gIDUwMDogIzAwZGJkZSxcclxuICA2MDA6ICMwMGQ3ZGEsXHJcbiAgNzAwOiAjMDBkMmQ1LFxyXG4gIDgwMDogIzAwY2RkMSxcclxuICA5MDA6ICMwMGM0YzgsXHJcbiAgQTEwMDogI2YxZmZmZixcclxuICBBMjAwOiAjYmVmZGZmLFxyXG4gIEE0MDA6ICM4YmZjZmYsXHJcbiAgQTcwMDogIzcxZmJmZixcclxuICBjb250cmFzdDogKFxyXG4gICAgNTA6ICMwMDAwMDAsXHJcbiAgICAxMDA6ICMwMDAwMDAsXHJcbiAgICAyMDA6ICMwMDAwMDAsXHJcbiAgICAzMDA6ICMwMDAwMDAsXHJcbiAgICA0MDA6ICMwMDAwMDAsXHJcbiAgICA1MDA6ICMwMDAwMDAsXHJcbiAgICA2MDA6ICMwMDAwMDAsXHJcbiAgICA3MDA6ICMwMDAwMDAsXHJcbiAgICA4MDA6ICMwMDAwMDAsXHJcbiAgICA5MDA6ICMwMDAwMDAsXHJcbiAgICBBMTAwOiAjMDAwMDAwLFxyXG4gICAgQTIwMDogIzAwMDAwMCxcclxuICAgIEE0MDA6ICMwMDAwMDAsXHJcbiAgICBBNzAwOiAjMDAwMDAwLFxyXG4gICksXHJcbik7XHJcblxyXG4kY29sb3JfcHJpbWFyeTogbWFwX2dldCgkX3ByaW1hcnlfcGFsbGV0ZSwgQTcwMCk7XHJcbiRjb2xvcl9wcmltYXJ5X2Rhcms6IG1hcF9nZXQoJF9wcmltYXJ5X3BhbGxldGUsIEE1MDApO1xyXG4kY29sb3JfYWNjZW50OiAjYmYxZjM0O1xyXG4kY29sb3JfZ3JleTogIzRmNGY0ZjtcclxuJGNvbG9yX2JsdWU6ICMxZDM1NTc7XHJcbiRjb2xvcl9ibHVlX2Zvcm06ICMwMTMxNzE7XHJcbiRjb2xvcl9iYWNrZ3JvdW5kX2Zvcm06ICNmMWVjZjY7XHJcbiJdfQ== */"] });


/***/ }),

/***/ "v+Uo":
/*!***************************************************************!*\
  !*** ./src/app/pages/story-two/modal/story2_modal.service.ts ***!
  \***************************************************************/
/*! exports provided: Story2ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Story2ModalService", function() { return Story2ModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class Story2ModalService {
    constructor() {
        this.modals = [];
    }
    add(modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    }
    remove(id) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(x => x.id !== id);
    }
    open(id) {
        // open modal specified by id
        const modal = this.modals.find(x => x.id === id);
        modal.open();
    }
    close(id) {
        // close modal specified by id
        const modal = this.modals.find(x => x.id === id);
        modal.close();
    }
}
Story2ModalService.ɵfac = function Story2ModalService_Factory(t) { return new (t || Story2ModalService)(); };
Story2ModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Story2ModalService, factory: Story2ModalService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vHYS":
/*!************************************************************!*\
  !*** ./src/app/pages/story-three/modal/modal.component.ts ***!
  \************************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.service */ "MzVA");


const _c0 = ["*"];
class ModalComponent {
    constructor(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.element = el.nativeElement;
    }
    ngOnInit() {
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);
        // close modal on background click
        this.element.addEventListener('click', (el) => {
            if (el.target.className === 'story3-modal') {
                this.close();
            }
        });
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    }
    // remove self from modal service when component is destroyed
    ngOnDestroy() {
        this.modalService.remove(this.id);
        this.element.remove();
    }
    // open modal
    open() {
        this.element.style.display = 'block';
        document.body.classList.add('story3-modal-open');
    }
    // close modal
    close() {
        this.element.style.display = 'none';
        document.body.classList.remove('story3-modal-open');
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["story3-modal"]], inputs: { id: "id" }, ngContentSelectors: _c0, decls: 6, vars: 0, consts: [[1, "story3-modal"], [1, "story3-modal-body"], [1, "story3-modal-background"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "modal works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 2);
    } }, styles: ["/* MODAL STYLES\n-------------------------------*/\nstory3-modal {\n  /* modals are hidden by default */\n  display: none;\n}\nstory3-modal .story3-modal {\n  /* modal container fixed across whole screen */\n  position: fixed;\n  width: 70%;\n  height: 75%;\n  top: 25%;\n  right: 20%;\n  bottom: 0;\n  left: 20%;\n  /* z-index must be higher than .story3-modal-background */\n  z-index: 1000;\n  /* enables scrolling for tall modals */\n  overflow: auto;\n}\nstory3-modal .story3-modal .story3-modal-body {\n  padding: 20px;\n  background: #fff;\n  /* margin exposes part of the modal background */\n  margin: 40px;\n}\nstory3-modal .story3-modal-background {\n  /* modal background fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* semi-transparent black  */\n  background-color: #000;\n  opacity: 0.75;\n  /* z-index must be below .story3-modal and above everything else  */\n  z-index: 900;\n}\nbody.story3-modal-open {\n  /* body overflow is hidden to hide main scrollbar when modal window is open */\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Z0NBQUE7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsYUFBQTtBQUNGO0FBQ0U7RUFDSSw4Q0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFFQSx5REFBQTtFQUNBLGFBQUE7RUFFQSxzQ0FBQTtFQUNBLGNBQUE7QUFETjtBQUdNO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0RBQUE7RUFDQSxZQUFBO0FBRlY7QUFNRTtFQUNJLCtDQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFFQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUVBLG1FQUFBO0VBQ0EsWUFBQTtBQU5OO0FBVUE7RUFDRSw2RUFBQTtFQUNBLGdCQUFBO0FBUEYiLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNT0RBTCBTVFlMRVNcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbnN0b3J5My1tb2RhbCB7XHJcbiAgLyogbW9kYWxzIGFyZSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gIC5zdG9yeTMtbW9kYWwge1xyXG4gICAgICAvKiBtb2RhbCBjb250YWluZXIgZml4ZWQgYWNyb3NzIHdob2xlIHNjcmVlbiAqL1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgIGhlaWdodDo3NSU7XHJcbiAgICAgIHRvcDogMjUlO1xyXG4gICAgICByaWdodDogMjAlO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGxlZnQ6IDIwJTtcclxuXHJcbiAgICAgIC8qIHotaW5kZXggbXVzdCBiZSBoaWdoZXIgdGhhbiAuc3RvcnkzLW1vZGFsLWJhY2tncm91bmQgKi9cclxuICAgICAgei1pbmRleDogMTAwMDtcclxuXHJcbiAgICAgIC8qIGVuYWJsZXMgc2Nyb2xsaW5nIGZvciB0YWxsIG1vZGFscyAqL1xyXG4gICAgICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgICAgIC5zdG9yeTMtbW9kYWwtYm9keSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuXHJcbiAgICAgICAgICAvKiBtYXJnaW4gZXhwb3NlcyBwYXJ0IG9mIHRoZSBtb2RhbCBiYWNrZ3JvdW5kICovXHJcbiAgICAgICAgICBtYXJnaW46IDQwcHg7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIC5zdG9yeTMtbW9kYWwtYmFja2dyb3VuZCB7XHJcbiAgICAgIC8qIG1vZGFsIGJhY2tncm91bmQgZml4ZWQgYWNyb3NzIHdob2xlIHNjcmVlbiAqL1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgbGVmdDogMDtcclxuXHJcbiAgICAgIC8qIHNlbWktdHJhbnNwYXJlbnQgYmxhY2sgICovXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICAgIG9wYWNpdHk6IDAuNzU7XHJcblxyXG4gICAgICAvKiB6LWluZGV4IG11c3QgYmUgYmVsb3cgLnN0b3J5My1tb2RhbCBhbmQgYWJvdmUgZXZlcnl0aGluZyBlbHNlICAqL1xyXG4gICAgICB6LWluZGV4OiA5MDA7XHJcbiAgfVxyXG59XHJcblxyXG5ib2R5LnN0b3J5My1tb2RhbC1vcGVuIHtcclxuICAvKiBib2R5IG92ZXJmbG93IGlzIGhpZGRlbiB0byBoaWRlIG1haW4gc2Nyb2xsYmFyIHdoZW4gbW9kYWwgd2luZG93IGlzIG9wZW4gKi9cclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbiJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");
/* harmony import */ var _pages_story_eight_story_eight_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/story-eight/story-eight.component */ "El+l");
/* harmony import */ var _pages_story_five_story_five_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/story-five/story-five.component */ "3SbQ");
/* harmony import */ var _pages_story_four_story_four_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/story-four/story-four.component */ "t+lV");
/* harmony import */ var _pages_story_nine_story_nine_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/story-nine/story-nine.component */ "Ai5k");
/* harmony import */ var _pages_story_one_story_one_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/story-one/story-one.component */ "a1jd");
/* harmony import */ var _pages_story_seven_story_seven_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/story-seven/story-seven.component */ "8YQv");
/* harmony import */ var _pages_story_six_story_six_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/story-six/story-six.component */ "SSBc");
/* harmony import */ var _pages_story_three_story_three_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/story-three/story-three.component */ "UDBt");
/* harmony import */ var _pages_story_two_story_two_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/story-two/story-two.component */ "6qrQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");













const routes = [
    { path: '', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_1__["LandingComponent"] },
    { path: 'story-one', component: _pages_story_one_story_one_component__WEBPACK_IMPORTED_MODULE_6__["StoryOneComponent"] },
    { path: 'story-two', component: _pages_story_two_story_two_component__WEBPACK_IMPORTED_MODULE_10__["StoryTwoComponent"] },
    { path: 'story-three', component: _pages_story_three_story_three_component__WEBPACK_IMPORTED_MODULE_9__["StoryThreeComponent"] },
    { path: 'story-four', component: _pages_story_four_story_four_component__WEBPACK_IMPORTED_MODULE_4__["StoryFourComponent"] },
    { path: 'story-five', component: _pages_story_five_story_five_component__WEBPACK_IMPORTED_MODULE_3__["StoryFiveComponent"] },
    { path: 'story-six', component: _pages_story_six_story_six_component__WEBPACK_IMPORTED_MODULE_8__["StorySixComponent"] },
    { path: 'story-seven', component: _pages_story_seven_story_seven_component__WEBPACK_IMPORTED_MODULE_7__["StorySevenComponent"] },
    { path: 'story-eight', component: _pages_story_eight_story_eight_component__WEBPACK_IMPORTED_MODULE_2__["StoryEightComponent"] },
    { path: 'story-nine', component: _pages_story_nine_story_nine_component__WEBPACK_IMPORTED_MODULE_5__["StoryNineComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wLiR":
/*!********************************!*\
  !*** ./src/material.module.ts ***!
  \********************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
        ], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"]], exports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zc9p":
/*!******************************************************!*\
  !*** ./src/app/dialogs/table-dialog/table.module.ts ***!
  \******************************************************/
/*! exports provided: TableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableModule", function() { return TableModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _table_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-dialog.component */ "I07+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class TableModule {
}
TableModule.ɵfac = function TableModule_Factory(t) { return new (t || TableModule)(); };
TableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TableModule });
TableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TableModule, { declarations: [_table_dialog_component__WEBPACK_IMPORTED_MODULE_2__["TableDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]], exports: [_table_dialog_component__WEBPACK_IMPORTED_MODULE_2__["TableDialogComponent"]] }); })();


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map