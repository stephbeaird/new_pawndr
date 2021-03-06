webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var login_component_1 = __webpack_require__("../../../../../src/app/login/login.component.ts");
var landing_component_1 = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
var pets_component_1 = __webpack_require__("../../../../../src/app/pets/pets.component.ts");
var pet_list_component_1 = __webpack_require__("../../../../../src/app/pets/pet-list/pet-list.component.ts");
var user_pets_component_1 = __webpack_require__("../../../../../src/app/pets/user-pets/user-pets.component.ts");
var stories_component_1 = __webpack_require__("../../../../../src/app/stories/stories.component.ts");
var routes = [
    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    { path: 'landing', component: landing_component_1.LandingComponent },
    { path: 'dashboard', redirectTo: '/pets/list', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'stories', component: stories_component_1.StoriesComponent },
    { path: 'pets', component: pets_component_1.PetsComponent,
        children: [
            { path: 'list', component: pet_list_component_1.PetListComponent },
            { path: 'mypet', component: user_pets_component_1.UserPetsComponent }
        ] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <h1>Pawndr</h1>\r\n<h4>For every human who needs to pawndr their furever friend.</h4>\r\n<br> -->\r\n<body>\r\n    <!-- Navbar -->\r\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n      <div class=\"container\">\r\n        <!-- Brand and toggle get grouped for better mobile display -->\r\n        <div class=\"navbar-header\">\r\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n          </button>\r\n          <a href=\"#\" title=\"Animal Adoption Bootstrap Theme\">\r\n            <img class=\"logo\" src=\"/assets/images/logo2.png\" alt=\"Animal Adoption Bootstrap Theme\" style=\"margin-top:5px; margin-bottom: 5px; width: 300px;\" />\r\n          </a>\r\n        </div>\r\n        <!-- Collect the nav links, forms, and other content for toggling -->\r\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n          <ul class=\"nav navbar-nav navbar-right\">\r\n            <li><a href=\"#home\" class=\"smooth-scroll\">ABOUT</a></li>\r\n            <li><a [routerLink]=\"['/stories']\" class=\"smooth-scroll\">STORIES</a></li>\r\n            <li><a [routerLink]=\"['/pets']\" class=\"smooth-scroll\">PAWNDR A PET</a></li>\r\n            <li><a [routerLink]=\"['/login']\" class=\"smooth-scroll\">REGISTER/LOGIN</a></li>\r\n          </ul>\r\n        </div><!-- /.navbar-collapse -->\r\n      </div><!-- /.container-fluid -->\r\n    </nav>\r\n<router-outlet></router-outlet>\r\n</body>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this._route.params.subscribe(function (params) { return console.log(params['id']); });
    };
    AppComponent.prototype.goHome = function () {
        this._router.navigate(['/home']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/login/login.component.ts");
var pets_component_1 = __webpack_require__("../../../../../src/app/pets/pets.component.ts");
var pet_list_component_1 = __webpack_require__("../../../../../src/app/pets/pet-list/pet-list.component.ts");
var user_pets_component_1 = __webpack_require__("../../../../../src/app/pets/user-pets/user-pets.component.ts");
var landing_component_1 = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
var stories_component_1 = __webpack_require__("../../../../../src/app/stories/stories.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                pets_component_1.PetsComponent,
                pet_list_component_1.PetListComponent,
                user_pets_component_1.UserPetsComponent,
                landing_component_1.LandingComponent,
                stories_component_1.StoriesComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpClientModule
            ],
            providers: [data_service_1.DataService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var rxjs_1 = __webpack_require__("../../../../rxjs/Rx.js");
var DataService = /** @class */ (function () {
    function DataService(_http) {
        this._http = _http;
        this.userData = new rxjs_1.BehaviorSubject({});
        this.petsData = new rxjs_1.BehaviorSubject([]);
        this.singlePetData = new rxjs_1.BehaviorSubject([]);
        this.randomPetData = new rxjs_1.BehaviorSubject([]);
        this.allUsersData = new rxjs_1.BehaviorSubject([]);
        this.getAllPets();
    }
    DataService.prototype.getCurrentUser = function () {
        var _this = this;
        console.log('getCurrentUser');
        this._http.get('/data/current_user')
            .subscribe(function (responseData) {
            console.log('responseData', responseData);
            console.log(responseData);
            _this.userData.next(responseData);
        });
    };
    DataService.prototype.loginUser = function (userObj) {
        var _this = this;
        console.log('loginUser');
        this._http.post('/data/login', userObj)
            .subscribe(function (responseData) {
            console.log('responseData', responseData);
            _this.userData.next(responseData);
        });
    };
    DataService.prototype.getAllPets = function () {
        var _this = this;
        console.log('getAllPets');
        this._http.get('/data/pets')
            .subscribe(function (responseData) {
            console.log("responseData", responseData);
            _this.petsData.next(responseData);
        });
    };
    DataService.prototype.postPet = function (userId, newPet, callback) {
        var _this = this;
        var myPet = {
            _user: userId,
            name: newPet.name,
            description: newPet.description,
            image: newPet.image,
            location: newPet.location,
        };
        console.log(myPet);
        this._http.post('/data/pet', myPet)
            .subscribe(function (responseData) {
            console.log('responseData', responseData);
            _this.petsData.next(responseData);
            callback();
        });
    };
    DataService.prototype.showPet = function (petId) {
        var _this = this;
        console.log('showPet');
        this._http.get('/data/pet/' + petId)
            .subscribe(function (responseData) {
            _this.singlePetData.next(responseData);
            console.log(responseData);
        });
    };
    DataService.prototype.getRandomPet = function () {
        var _this = this;
        console.log('randomPet');
        this._http.get('/petOfTheDay')
            .subscribe(function (responseData) {
            _this.singlePetData.next(responseData);
            console.log(responseData);
        });
    };
    DataService.prototype.deletePet = function (pet) {
        var _this = this;
        this._http.post('/pet/delete', { _id: pet })
            .subscribe(function (data) {
            _this.getAllPets();
        });
    };
    DataService.prototype.update = function (pet) {
        console.log('service.update', pet);
        this._http.post('/pet/edit', pet)
            .subscribe(function (data) {
        });
    };
    DataService.prototype.getAllUsersPets = function () {
        var _this = this;
        console.log('getAllPets');
        this._http.get('/data/mypets')
            .subscribe(function (responseData) {
            console.log("responseData", responseData);
            _this.petsData.next(responseData);
        });
    };
    DataService.prototype.logout = function () {
        this._http.get('/data/logout')
            .subscribe(function (responseData) {
            return console.log(responseData);
        });
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;


/***/ }),

/***/ "../../../../../src/app/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\r\n\t<!-- Carousel -->\r\n\t<div id=\"theme-carousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n\t\t<!-- Wrapper for slides -->\r\n\t\t<div class=\"carousel-inner\" role=\"listbox\">\r\n\t\t\t<div class=\"item active\">\r\n\t\t\t\t<img src=\"/assets/images/carousel1.jpg\" alt=\"carousel1\" style=\"width: 100%\" />\r\n\t\t\t\t<div class=\"carousel-caption\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-7\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-5\">\r\n\t\t\t\t\t\t\t<h2>SAVE LIFE ADOPT A PET</h2>\r\n\t\t\t\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>\r\n\t\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\t\t<button class=\"button-more-primary btn btn-lg\" type=\"button\" style=\"margin:10px;\">READ MORE</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"item\">\r\n\t\t\t\t<img src=\"/assets/images/carousel2.jpg\" alt=\"carousel2\" style=\"width: 100%\" />\r\n\t\t\t\t<div class=\"carousel-caption\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-5\">\r\n\t\t\t\t\t\t\t<h2>HELP WITH CARE AND LOVE</h2>\r\n\t\t\t\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>\r\n\t\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\t\t<button class=\"button-more-primary btn btn-lg\" type=\"button\" style=\"margin:10px;\">READ MORE</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"item\">\r\n\t\t\t\t<img src=\"/assets/images/carousel3.jpg\" alt=\"carousel3\" style=\"width: 100%\">\r\n\t\t\t\t<div class=\"carousel-caption\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-7\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-5\">\r\n\t\t\t\t\t\t\t<h2>ANIMALS NEED THE SUPPORT</h2>\r\n\t\t\t\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>\r\n\t\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\t\t<button class=\"button-more-primary btn btn-lg\" type=\"button\" style=\"margin:10px;\">READ MORE</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- Controls -->\r\n\t\t<a class=\"left carousel-control\" href=\"#theme-carousel\" role=\"button\" data-slide=\"prev\">\r\n\t\t\t<div class=\"carousel-control-arrow\">&#8249;</div>\r\n\t\t</a>\r\n\t\t<a class=\"right carousel-control\" href=\"#theme-carousel\" role=\"button\" data-slide=\"next\">\r\n\t\t\t<div class=\"carousel-control-arrow\">&#8250;</div>\r\n\t\t</a>\r\n\t</div>\r\n\r\n\t<!-- <div class=\"container-about\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"page-header\" id=\"home\">\r\n\t\t\t\t<h1 class=\"text-primary  text-center\">ABOUT US</h1>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t<img class=\"img-responsive\" src=\"/assets/images/image1.jpg\"/>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t<div>\r\n\t\t\t\t<!-- Nav tabs -->\r\n\t\t\t\t<!-- <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n\t\t\t\t\t<li role=\"presentation\" class=\"active\"><a href=\"#mission\" aria-controls=\"mission\" role=\"tab\" data-toggle=\"tab\" style=\"font-size:20px;\">Mission</a></li>\r\n\t\t\t\t\t<li role=\"presentation\"><a href=\"#goal\" aria-controls=\"goal\" role=\"tab\" data-toggle=\"tab\" style=\"font-size:20px;\">Goal</a></li>\r\n\t\t\t\t\t<li role=\"presentation\"><a href=\"#vision\" aria-controls=\"vision\" role=\"tab\" data-toggle=\"tab\" style=\"font-size:20px;\">Vision</a></li>\r\n\t\t\t\t</ul> -->\r\n\r\n\t\t\t\t<!-- Tab panes -->\r\n\t\t\t\t<!-- <div class=\"tab-content\">\r\n\t\t\t\t\t<br />\r\n\t\t\t\t\t<div role=\"tabpanel\" class=\"tab-pane active text-justify\" id=\"mission\">To give every shelter animal a furever home and give the ultimate gift of love.\r\n\t\t\t\t\t<br />\r\n\t\t\t\t\t<button class=\"button-more-success btn\" type=\"button\" style=\"margin:10px;\">READ MORE</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div role=\"tabpanel\" class=\"tab-pane text-justify\" id=\"goal\">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.\r\n\t\t\t\t\t<br />\r\n\t\t\t\t\t<button class=\"button-more-success btn\" type=\"button\" style=\"margin:10px;\">READ MORE</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div role=\"tabpanel\" class=\"tab-pane text-justify\" id=\"vision\">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.\r\n\t\t\t\t\t<br />\r\n\t\t\t\t\t<button class=\"button-more-success btn\" type=\"button\" style=\"margin:10px;\">READ MORE</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div> -->\r\n\t\t\t<!-- </div>\r\n\t\t</div>\r\n\t\t</div>\r\n\t</div> -->\r\n\t<div class=\"bg-container\">\r\n\t\t<div class=\"container-pets mx-auto\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"page-header\" id=\"pets\">\r\n\t\t\t\t\t<h1 class=\"text-primary text-center\">OUR PETS</h1>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t<img class=\"img-responsive\" src=\"/assets/images/pets1.jpg\" />\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"background-color: #D4EDF7;; color:#000;\">\r\n\t\t\t\t\t\t\t\t<h3>REX</h3>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-3 text-center\">\r\n\t\t\t\t\t\t\t\t<button class=\"button-more-success btn\" type=\"button\" style=\"margin:10px;\">READ MORE</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t<img class=\"img-responsive\" src=\"/assets/images/pets2.jpg\" />\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"background-color: #D4EDF7; color:#000;\">\r\n\t\t\t\t\t\t\t\t<h3>LUCKY</h3>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-3 text-center\">\r\n\t\t\t\t\t\t\t\t<button class=\"button-more-success btn\" type=\"button\" style=\"margin:10px;\">READ MORE</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\t<br />\r\n\t\t\t\t\t<br />\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t<img class=\"img-responsive\" src=\"./../../../assets/images/pets4.jpg\" />\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"background-color: #D4EDF7; color:#000;\">\r\n\t\t\t\t\t\t\t\t<h3>TIGER</h3>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-3 text-center\">\r\n\t\t\t\t\t\t\t\t<button class=\"button-more-success btn\" type=\"button\" style=\"margin:10px;\">READ MORE</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t<img class=\"img-responsive\" src=\"/assets/images/pets3.jpg\" />\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"background-color: #D4EDF7; color:#000;\">\r\n\t\t\t\t\t\t\t\t<h3>BENJY</h3>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-3 text-center\">\r\n\t\t\t\t\t\t\t\t<button class=\"button-more-success btn\" type=\"button\" style=\"margin:10px;\">READ MORE</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"container-contact\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"page-header\" id=\"contact\">\r\n\t\t\t\t\t<h2 class=\"text-center text-primary\">Contact us using the form below</h2>\r\n\t\t\t\t\t<br />\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-12\">\r\n\t\t\t\t\t\t\t<form>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"form-name\">Name</label>\r\n\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"form-name\" placeholder=\"Name\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"form-email\">Email Address</label>\r\n\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"form-email\" placeholder=\"Email Address\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"form-subject\">Telephone</label>\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"form-subject\" placeholder=\"Subject\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"form-message\">Email your Message</label>\r\n\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" id=\"form-message\" placeholder=\"Message\"></textarea>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<button class=\"button-more-primary btn btn-lg\" type=\"submit\" style=\"margin:10px;\">Register Now</button>\r\n\t\t\t\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<footer id=\"subfooter\" class=\"clearfix\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row text-justify\">\r\n\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t<h3>About Us</h3>\r\n\t\t\t\t\t<br />\r\n\t\t\t\t\t<p>Our mission is to find the homeless animals around the country and give them a better life.</p>\r\n\t\t\t\t\t<hr style=\"border-color:#bbb;\">\r\n\t\t\t\t\t<p>54, North Road, PA 45086, USA</p>\r\n\t\t\t\t\t<p>+1 888 455 6677</p>\r\n\t\t\t\t\t<p><a href=\"mailto:mail@example.com\" style=\"color:#4BAFD3;\">mail@example.com</a></p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t<h3>Animals For Adoption</h3>\r\n\t\t\t\t\t<br />\r\n\t\t\t\t\t<div class=\"row text-justify\">\r\n\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t<img class=\"img-responsive\" src=\"/assets/images/gallery/gallery1.jpg\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<p>What is Lorem Ipsum?</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<br />\r\n\t\t\t\t\t<div class=\"row text-justify\">\r\n\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t<img class=\"img-responsive\" src=\"/assets/images/gallery/gallery2.jpg\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<p>Where does it come from?</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<br />\r\n\t\t\t\t\t<div class=\"row text-justify\">\r\n\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t<img class=\"img-responsive\" src=\"/assets/images/gallery/gallery3.jpg\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<p>Why do we use it?</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t<h3>Last Adopted</h3>\r\n\t\t\t\t\t<br />\r\n\t\t\t\t\t<div class=\"row text-justify\">\r\n\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t<img class=\"img-responsive\" src=\"/assets/images/image4.jpg\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<br />\r\n\t\t\t\t\t<div class=\"row text-justify\">\r\n\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t<img class=\"img-responsive\" src=\"/assets/images/image2.jpg\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</footer>\r\n\r\n\t<footer id=\"footer\" class=\"clearfix\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<a class=\"fa fa-twitter footer-socialicon\" target=\"_blank\" href=\"https://twitter.com/\"></a>\r\n\t\t\t\t\t\t<a class=\"fa fa-facebook footer-socialicon\" target=\"_blank\" href=\"https://www.facebook.com/\"></a>\r\n\t\t\t\t\t\t<a class=\"fa fa-google-plus footer-socialicon\" target=\"_blank\" href=\"https://plus.google.com/\"></a>\r\n\t\t\t\t\t\t<a class=\"fa fa-linkedin footer-socialicon\" target=\"_blank\" href=\"https://plus.google.com/\"></a>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</footer>\r\n\r\n\r\n</body>\r\n"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = __decorate([
        core_1.Component({
            selector: 'app-landing',
            template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());
exports.LandingComponent = LandingComponent;


/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#container{\r\n    font-family: oswald;\r\n    font-size: 30px;\r\n    margin-left: 20px;\r\n}\r\nimg{\r\n    width: 500px;\r\n}\r\n#info{\r\n    font-family: oswald;\r\n}\r\nh3{\r\n    text-align: left;\r\n}\r\n.login{\r\n    font-size: 22px;\r\n    width: 500px;\r\n    font-family: oswald;\r\n    display: inline;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\r\n   <!-- Carousel -->\r\n  <div id=\"theme-carousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n    <!-- Wrapper for slides -->\r\n    <div class=\"carousel-inner\" role=\"listbox\">\r\n      <div class=\"item active\">\r\n        <img src=\"/assets/images/carousel1.jpg\" alt=\"carousel1\" style=\"width: 100%\" />\r\n        <div class=\"carousel-caption\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-7\">\r\n            </div>\r\n            <div class=\"col-md-5\">\r\n              <h2>SAVE LIFE ADOPT A PET</h2>\r\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>\r\n              <br />\r\n              <button class=\"button-more-primary btn btn-lg\" type=\"button\" style=\"margin:10px;\">READ MORE</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"item\">\r\n        <img src=\"/assets/images/carousel2.jpg\" alt=\"carousel2\" style=\"width: 100%\" />\r\n        <div class=\"carousel-caption\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <h2>HELP WITH CARE AND LOVE</h2>\r\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>\r\n              <br />\r\n              <button class=\"button-more-primary btn btn-lg\" type=\"button\" style=\"margin:10px;\">READ MORE</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"item\">\r\n        <img src=\"/assets/images/carousel3.jpg\" alt=\"carousel3\" style=\"width: 100%\">\r\n        <div class=\"carousel-caption\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-7\">\r\n            </div>\r\n            <div class=\"col-md-5\">\r\n              <h2>ANIMALS NEED THE SUPPORT</h2>\r\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>\r\n              <br />\r\n              <button class=\"button-more-primary btn btn-lg\" type=\"button\" style=\"margin:10px;\">READ MORE</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Controls -->\r\n    <a class=\"left carousel-control\" href=\"#theme-carousel\" role=\"button\" data-slide=\"prev\">\r\n      <div class=\"carousel-control-arrow\">&#8249;</div>\r\n    </a>\r\n    <a class=\"right carousel-control\" href=\"#theme-carousel\" role=\"button\" data-slide=\"next\">\r\n      <div class=\"carousel-control-arrow\">&#8250;</div>\r\n    </a>\r\n  </div>\r\n\r\n  <!-- <div class=\"container-about\">\r\n    <div class=\"container\">\r\n      <div class=\"page-header\" id=\"home\">\r\n        <h1 class=\"text-primary  text-center\">ABOUT US</h1>\r\n      </div>\r\n      <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <img class=\"img-responsive\" src=\"/assets/images/image1.jpg\"/>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div>\r\n        <!-- Nav tabs -->\r\n        <!-- <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n          <li role=\"presentation\" class=\"active\"><a href=\"#mission\" aria-controls=\"mission\" role=\"tab\" data-toggle=\"tab\" style=\"font-size:20px;\">Mission</a></li>\r\n          <li role=\"presentation\"><a href=\"#goal\" aria-controls=\"goal\" role=\"tab\" data-toggle=\"tab\" style=\"font-size:20px;\">Goal</a></li>\r\n          <li role=\"presentation\"><a href=\"#vision\" aria-controls=\"vision\" role=\"tab\" data-toggle=\"tab\" style=\"font-size:20px;\">Vision</a></li>\r\n        </ul> -->\r\n\r\n        <!-- Tab panes -->\r\n        <!-- <div class=\"tab-content\">\r\n          <br />\r\n          <div role=\"tabpanel\" class=\"tab-pane active text-justify\" id=\"mission\">To give every shelter animal a furever home and give the ultimate gift of love.\r\n          <br />\r\n          <button class=\"button-more-success btn\" type=\"button\" style=\"margin:10px;\">READ MORE</button>\r\n          </div>\r\n          <div role=\"tabpanel\" class=\"tab-pane text-justify\" id=\"goal\">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.\r\n          <br />\r\n          <button class=\"button-more-success btn\" type=\"button\" style=\"margin:10px;\">READ MORE</button>\r\n          </div>\r\n          <div role=\"tabpanel\" class=\"tab-pane text-justify\" id=\"vision\">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.\r\n          <br />\r\n          <button class=\"button-more-success btn\" type=\"button\" style=\"margin:10px;\">READ MORE</button>\r\n          </div>\r\n          </div>\r\n        </div> -->\r\n      <!-- </div>\r\n    </div>\r\n    </div>\r\n  </div> -->\r\n  <div class=\"bg-container\">\r\n    <div class=\"container-pets mx-auto\">\r\n      <div class=\"container\">\r\n          <div class=\"page-header\" id=\"pets\">\r\n              <h1 class=\"text-primary text-center\">For every human who needs to pawndr their furever friend</h1>\r\n            </div>\r\n        <fieldset>\r\n          <form (submit)=\"login()\"  #newUserForm=\"ngForm\">\r\n            <p>Fist Name: <input type=\"text\" name=\"firstName\" [(ngModel)]=\"user.firstName\"></p>\r\n            <p>Last Name: <input type=\"text\" name=\"lastName\" [(ngModel)]=\"user.lastName\"></p>\r\n            <p>Email: <input type=\"email\" name=\"email\" [(ngModel)]=\"user.email\"></p>\r\n            <input type=\"submit\" value=\"login\">\r\n          </form>\r\n        </fieldset>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <footer id=\"subfooter\" class=\"clearfix\">\r\n    <div class=\"container\">\r\n      <div class=\"row text-justify\">\r\n        <div class=\"col-md-4\">\r\n          <h3>About Us</h3>\r\n          <br />\r\n          <p>Our mission is to find the homeless animals around the country and give them a better life.</p>\r\n          <hr style=\"border-color:#bbb;\">\r\n          <p>54, North Road, PA 45086, USA</p>\r\n          <p>+1 888 455 6677</p>\r\n          <p><a href=\"mailto:mail@example.com\" style=\"color:#4BAFD3;\">mail@example.com</a></p>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <h3>Animals For Adoption</h3>\r\n          <br />\r\n          <div class=\"row text-justify\">\r\n            <div class=\"col-md-4\">\r\n              <img class=\"img-responsive\" src=\"/assets/images/gallery/gallery1.jpg\" />\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n              <p>What is Lorem Ipsum?</p>\r\n            </div>\r\n          </div>\r\n          <br />\r\n          <div class=\"row text-justify\">\r\n            <div class=\"col-md-4\">\r\n              <img class=\"img-responsive\" src=\"/assets/images/gallery/gallery2.jpg\" />\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n              <p>Where does it come from?</p>\r\n            </div>\r\n          </div>\r\n          <br />\r\n          <div class=\"row text-justify\">\r\n            <div class=\"col-md-4\">\r\n              <img class=\"img-responsive\" src=\"/assets/images/gallery/gallery3.jpg\" />\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n              <p>Why do we use it?</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <h3>Last Adopted</h3>\r\n          <br />\r\n          <div class=\"row text-justify\">\r\n            <div class=\"col-md-4\">\r\n              <img class=\"img-responsive\" src=\"/assets/images/image4.jpg\" />\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>\r\n            </div>\r\n          </div>\r\n          <br />\r\n          <div class=\"row text-justify\">\r\n            <div class=\"col-md-4\">\r\n              <img class=\"img-responsive\" src=\"/assets/images/image2.jpg\" />\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n\r\n  <footer id=\"footer\" class=\"clearfix\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-8\">\r\n          <p>Created by <a href=\"https://www.shieldui.com\" title=\"Shield UI\" style=\"color: #4BAFD3;\">Shield UI</a> and hosted by <a href=\"https://www.prepbootstrap.com\" title=\"PrepBootstrap\" style=\"color: #4BAFD3;\">PrepBootstrap</a></p>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <p>\r\n            <a class=\"fa fa-twitter footer-socialicon\" target=\"_blank\" href=\"https://twitter.com/\"></a>\r\n            <a class=\"fa fa-facebook footer-socialicon\" target=\"_blank\" href=\"https://www.facebook.com/\"></a>\r\n            <a class=\"fa fa-google-plus footer-socialicon\" target=\"_blank\" href=\"https://plus.google.com/\"></a>\r\n            <a class=\"fa fa-linkedin footer-socialicon\" target=\"_blank\" href=\"https://plus.google.com/\"></a>\r\n          </p>\r\n        </div>\r\n        \r\n      </div>\r\n    </div>\r\n  </footer>\r\n</body>\r\n  \r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_router, _dataService) {
        this._router = _router;
        this._dataService = _dataService;
        this.user = { firstName: '', lastName: '', email: '' };
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this._dataService.loginUser(this.user);
        this._dataService.userData.subscribe(function (dataFromService) {
            console.log(dataFromService);
            if (dataFromService != null) {
                _this._router.navigate(['/dashboard']);
            }
            else {
                console.log('idk what went wrong');
                console.log(dataFromService);
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router, data_service_1.DataService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "../../../../../src/app/pets.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Pet = /** @class */ (function () {
    function Pet() {
        this.name = '';
        this.description = '';
        this.image = null;
        this.location = '';
        this.user_id = '';
    }
    return Pet;
}());
exports.Pet = Pet;


/***/ }),

/***/ "../../../../../src/app/pets/pet-list/pet-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pets/pet-list/pet-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"create\">\r\n        <h3>Create Listing</h3>\r\n          <div class=\"pet\">\r\n            <form (submit)=\"addPet(); petForm.reset()\" #petForm=\"ngForm\">\r\n              <div class=\"col-sm-7\">\r\n                <div class=\"form-group\">\r\n                  <label>Name: </label> <span class=\"error\" *ngIf=\"name.errors && (name.dirty || name.touched)\"> *required</span>\r\n                  <input type=\"text\" name=\"name\" class=\"form-control\" [(ngModel)]=\"newPet.name\" #title=\"ngModel\" required>\r\n                  <label>Image URL: </label> <span class=\"error\" *ngIf=\"image.errors && (image.dirty || image.touched)\"> *required</span>\r\n                  <input type=\"text\" name=\"name\" class=\"form-control\" [(ngModel)]=\"newPet.image\" #title=\"ngModel\" required>\r\n                  <label>Description: </label> <span class=\"error\" *ngIf=\"description.errors && (description.dirty || description.touched)\">\r\n                    <span *ngIf=\"description.errors.required\"> *required</span><span *ngIf=\"description.errors.maxlength\"> *cannot exceed 500 characters</span></span>\r\n                  <textarea class=\"form-control\" rows=\"3\" name=\"desc\" [(ngModel)]=\"newPet.description\" #description=\"ngModel\" required maxlength=\"500\"></textarea>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-2\">\r\n                <div class=\"form-group\">\r\n                  <label>Adoption Fee: </label> <span class=\"error\" *ngIf=\"fee.errors && (fee.dirty || fee.touched)\">\r\n                    <span *ngIf=\"fee.errors.required\"> *required</span><span *ngIf=\"!fee.errors.required && fee.errors.minValue\">*at least $1</span></span>\r\n                  <input type=\"number\" class=\"form-control\" name=\"fee\" [(ngModel)]=\"newPet.fee\" #fee=\"ngModel\" required minValue=\"1\">\r\n                  <label>Location</label> <span class=\"error\" *ngIf=\"location.errors && (location.dirty || location.touched)\"> *required</span>\r\n                  <input type=\"text\" class=\"form-control\" name=\"location\" [(ngModel)]=\"newPet.location\" #location=\"ngModel\" required>\r\n                  <input type=\"submit\" value=\"Create\" class=\"btn btn-success\" [disabled]=\"!petForm.form.valid || !hasImage\">\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n        <hr>\r\n        <div class=\"edits\">\r\n        <h3>Edit/Delete Listings</h3>\r\n          <div class=\"pets\" *ngFor=\"let p of myPets; let idx = index\">\r\n            <form (submit)=\"updatePet(idx)\" #petForm=\"ngForm\">\r\n              <div class=\"col-sm-7\">\r\n                <div class=\"form-group\">\r\n                  <label>Title</label> \r\n                   <span class=\"error\" *ngIf=\"title.errors && (title.dirty || title.touched)\"> *required</span> \r\n                  <input type=\"text\" name=\"title\" class=\"form-control\" [(ngModel)]=\"p.title\" #title=\"ngModel\" required>\r\n                  <label>Description</label> \r\n                   <span class=\"error\" *ngIf=\"description.errors && (description.dirty || description.touched)\"> \r\n                   <span *ngIf=\"description.errors.required\"> *required</span><span *ngIf=\"description.errors.maxlength\"> *cannot exceed 500 characters</span></span> \r\n                  <textarea class=\"form-control\" rows=\"3\" name=\"desc\" [(ngModel)]=\"p.description\" #description=\"ngModel\" required maxlength=\"500\"></textarea>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-2\">\r\n                <div class=\"form-group\">\r\n                  <label>Fee</label>\r\n                    <span class=\"error\" *ngIf=\"fee.errors && (fee.dirty || fee.touched)\"> \r\n                    <span *ngIf=\"fee.errors.required\"> *required</span><span *ngIf=\"feeTooLow\">*at least $1</span></span> \r\n                  <input type=\"number\" class=\"form-control\" name=\"fee\" [(ngModel)]=\"p.fee\" #fee=\"ngModel\" required minValue=\"1\">\r\n                  <label>Location</label> \r\n                    <span class=\"error\" *ngIf=\"location.errors && (location.dirty || location.touched)\"> *required</span> \r\n                  <input type=\"text\" class=\"form-control\" name=\"location\" [(ngModel)]=\"b.location\" #location=\"ngModel\" required>\r\n                  <input type=\"submit\" value=\"Update\" class=\"btn btn-primary btn-half\" [disabled]=\"!petForm.form.valid || p.image == '' || p.image == null\"> \r\n                  <button class=\"btn btn-danger btn-half\" (click)=\"deletePet(idx)\">Delete</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>"

/***/ }),

/***/ "../../../../../src/app/pets/pet-list/pet-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var pets_1 = __webpack_require__("../../../../../src/app/pets.ts");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var PetListComponent = /** @class */ (function () {
    function PetListComponent(_dataService, _router) {
        this._dataService = _dataService;
        this._router = _router;
        this.newPet = new pets_1.Pet();
        this.currentUser = { firstName: 'req.params.firstName', lastName: 'req.params.lastName', id: 'req.params._id' };
        this.searchStr = '';
    }
    PetListComponent.prototype.ngOnInit = function () {
        this.getAllPets();
        this._dataService.getCurrentUser();
    };
    PetListComponent.prototype.getAllPets = function () {
        var _this = this;
        this._dataService.petsData.subscribe(function (dataFromService) {
            _this.allPets = dataFromService;
            console.log(_this.allPets);
        });
    };
    PetListComponent.prototype.getPets = function () {
        this._dataService.getAllUsersPets();
    };
    PetListComponent.prototype.addPet = function () {
        var _this = this;
        this._dataService.postPet(this.currentUser._id, this.newPet, function () {
            console.log(_this);
            _this._router.navigate(['/']);
        });
        this.newPet = new pets_1.Pet();
        console.log('pet added');
    };
    PetListComponent.prototype.updatePet = function (pet) {
        this._dataService.update(pet);
    };
    PetListComponent.prototype.deletePet = function (pet) {
        this._dataService.deletePet(pet);
        this._dataService.getAllPets();
    };
    PetListComponent = __decorate([
        core_1.Component({
            selector: 'app-pet-list',
            template: __webpack_require__("../../../../../src/app/pets/pet-list/pet-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pets/pet-list/pet-list.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService, router_1.Router])
    ], PetListComponent);
    return PetListComponent;
}());
exports.PetListComponent = PetListComponent;


/***/ }),

/***/ "../../../../../src/app/pets/pets.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pets/pets.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/pets/pets.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var PetsComponent = /** @class */ (function () {
    function PetsComponent(_dataService, _router) {
        this._dataService = _dataService;
        this._router = _router;
    }
    PetsComponent.prototype.ngOnInit = function () {
        this._dataService.getCurrentUser();
    };
    PetsComponent.prototype.logout = function () {
        this._dataService.logout();
        this._router.navigate(['/login']);
    };
    PetsComponent = __decorate([
        core_1.Component({
            selector: 'app-pets',
            template: __webpack_require__("../../../../../src/app/pets/pets.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pets/pets.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService, router_1.Router])
    ], PetsComponent);
    return PetsComponent;
}());
exports.PetsComponent = PetsComponent;


/***/ }),

/***/ "../../../../../src/app/pets/user-pets/user-pets.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pets/user-pets/user-pets.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  user-pets works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/pets/user-pets/user-pets.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var pets_1 = __webpack_require__("../../../../../src/app/pets.ts");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var UserPetsComponent = /** @class */ (function () {
    function UserPetsComponent(_dataService, _router) {
        this._dataService = _dataService;
        this._router = _router;
        this.newPet = new pets_1.Pet();
        this.hasImage = false;
        this.user = { id: 'req.params._id' };
    }
    UserPetsComponent.prototype.ngOnInit = function () {
        this.getPets();
    };
    UserPetsComponent.prototype.getPets = function () {
        this._dataService.getAllUsersPets();
    };
    UserPetsComponent.prototype.linkPhoto = function () {
        this.newPet.image = prompt("Please enter the url for your photo:");
        if (this.newPet.image != "") {
            this.hasImage = true;
        }
    };
    UserPetsComponent.prototype.addPet = function () {
        var _this = this;
        this._dataService.postPet(this.user._id, this.newPet, function () {
            console.log(_this);
            _this._router.navigate(['/']);
        });
        this.newPet = new pets_1.Pet();
        console.log('pet added');
    };
    UserPetsComponent.prototype.updatePet = function (pet) {
        this._dataService.update(pet);
    };
    UserPetsComponent.prototype.deletePet = function (pet) {
        this._dataService.deletePet(pet);
        this._dataService.getAllPets();
    };
    UserPetsComponent = __decorate([
        core_1.Component({
            selector: 'app-user-pets',
            template: __webpack_require__("../../../../../src/app/pets/user-pets/user-pets.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pets/user-pets/user-pets.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService, router_1.Router])
    ], UserPetsComponent);
    return UserPetsComponent;
}());
exports.UserPetsComponent = UserPetsComponent;


/***/ }),

/***/ "../../../../../src/app/stories/stories.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/stories/stories.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"container-stories\">\r\n    <div class=\"container\">\r\n        <div class=\"page-header\" id=\"stories\">\r\n          <h1 class=\"text-primary text-center\">PETS STORIES</h1>\r\n        </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <img class=\"img-responsive\" src=\"assets/images/image2.jpg\" />\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <h3>Isabella</h3>\r\n              <p>and Rex</p>\r\n              <br />\r\n              <p class=\"text-justify\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>\r\n              <br />\r\n              <button class=\"button-more-success btn\" type=\"button\" style=\"margin:10px;\">READ MORE</button>\r\n              <br />\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <img class=\"img-responsive\" src=\"assets/images/image3.jpg\" />\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <h3>Zoe, Oliver</h3>\r\n              <p>Molly and Max</p>\r\n              <br />\r\n              <p class=\"text-justify\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>\r\n              <br />\r\n              <button class=\"button-more-success btn\" type=\"button\" style=\"margin:10px;\">READ MORE</button>\r\n              <br />\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br />\r\n      <br />\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <img class=\"img-responsive\" src=\"assets/images/image4.jpg\" />\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <h3>Mia</h3>\r\n              <p>and Charlie</p>\r\n              <br />\r\n              <p class=\"text-justify\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>\r\n              <br />\r\n              <button class=\"button-more-success btn\" type=\"button\" style=\"margin:10px;\">READ MORE</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <img class=\"img-responsive\" src=\"assets/images/image5.jpg\" />\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <h3>James</h3>\r\n              <p>and Toby</p>\r\n              <br />\r\n              <p class=\"text-justify\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>\r\n              <br />\r\n              <button class=\"button-more-success btn\" type=\"button\" style=\"margin:10px;\">READ MORE</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/stories/stories.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var StoriesComponent = /** @class */ (function () {
    function StoriesComponent() {
    }
    StoriesComponent.prototype.ngOnInit = function () {
    };
    StoriesComponent = __decorate([
        core_1.Component({
            selector: 'app-stories',
            template: __webpack_require__("../../../../../src/app/stories/stories.component.html"),
            styles: [__webpack_require__("../../../../../src/app/stories/stories.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StoriesComponent);
    return StoriesComponent;
}());
exports.StoriesComponent = StoriesComponent;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map