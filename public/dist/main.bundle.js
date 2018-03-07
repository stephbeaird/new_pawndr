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

module.exports = "<!-- <h1>Pawndr</h1>\n<h4>For every human who needs to pawndr their furever friend.</h4>\n<br> -->\n<body>\n    <!-- Navbar -->\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n      <div class=\"container\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a href=\"#\" title=\"Animal Adoption Bootstrap Theme\">\n            <img class=\"logo\" src=\"/assets/images/logo2.png\" alt=\"Animal Adoption Bootstrap Theme\" style=\"margin-top:5px; margin-bottom: 5px; width: 300px;\" />\n          </a>\n        </div>\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li><a href=\"#home\" class=\"smooth-scroll\">ABOUT</a></li>\n            <li><a [routerLink]=\"['/stories']\" class=\"smooth-scroll\">STORIES</a></li>\n            <li><a [routerLink]=\"['/pets']\" class=\"smooth-scroll\">PAWNDR A PET</a></li>\n            <li><a [routerLink]=\"['/login']\" class=\"smooth-scroll\">REGISTER/LOGIN</a></li>\n          </ul>\n        </div><!-- /.navbar-collapse -->\n      </div><!-- /.container-fluid -->\n    </nav>\n<router-outlet></router-outlet>\n</body>"

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

module.exports = "<body>\n\t<!-- Carousel -->\n\t<div id=\"theme-carousel\" class=\"carousel slide\" data-ride=\"carousel\">\n\t\t<!-- Wrapper for slides -->\n\t\t<div class=\"carousel-inner\" role=\"listbox\">\n\t\t\t<div class=\"item active\">\n\t\t\t\t<img src=\"/assets/images/carousel1.jpg\" alt=\"carousel1\" style=\"width: 100%\" />\n\t\t\t\t<div class=\"carousel-caption\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-5\">\n\t\t\t\t\t\t\t<h2>SAVE LIFE ADOPT A PET</h2>\n\t\t\t\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>\n\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t<button class=\"button-more-primary btn btn-lg\" type=\"button\" style=\"margin:10px;\">READ MORE</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\">\n\t\t\t\t<img src=\"/assets/images/carousel2.jpg\" alt=\"carousel2\" style=\"width: 100%\" />\n\t\t\t\t<div class=\"carousel-caption\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-5\">\n\t\t\t\t\t\t\t<h2>HELP WITH CARE AND LOVE</h2>\n\t\t\t\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>\n\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t<button class=\"button-more-primary btn btn-lg\" type=\"button\" style=\"margin:10px;\">READ MORE</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\">\n\t\t\t\t<img src=\"/assets/images/carousel3.jpg\" alt=\"carousel3\" style=\"width: 100%\">\n\t\t\t\t<div class=\"carousel-caption\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-5\">\n\t\t\t\t\t\t\t<h2>ANIMALS NEED THE SUPPORT</h2>\n\t\t\t\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>\n\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t<button class=\"button-more-primary btn btn-lg\" type=\"button\" style=\"margin:10px;\">READ MORE</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- Controls -->\n\t\t<a class=\"left carousel-control\" href=\"#theme-carousel\" role=\"button\" data-slide=\"prev\">\n\t\t\t<div class=\"carousel-control-arrow\">&#8249;</div>\n\t\t</a>\n\t\t<a class=\"right carousel-control\" href=\"#theme-carousel\" role=\"button\" data-slide=\"next\">\n\t\t\t<div class=\"carousel-control-arrow\">&#8250;</div>\n\t\t</a>\n\t</div>\n\n\t<!-- <div class=\"container-about\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"page-header\" id=\"home\">\n\t\t\t\t<h1 class=\"text-primary  text-center\">ABOUT US</h1>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<img class=\"img-responsive\" src=\"/assets/images/image1.jpg\"/>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div>\n\t\t\t\t<!-- Nav tabs -->\n\t\t\t\t<!-- <ul class=\"nav nav-tabs\" role=\"tablist\">\n\t\t\t\t\t<li role=\"presentation\" class=\"active\"><a href=\"#mission\" aria-controls=\"mission\" role=\"tab\" data-toggle=\"tab\" style=\"font-size:20px;\">Mission</a></li>\n\t\t\t\t\t<li role=\"presentation\"><a href=\"#goal\" aria-controls=\"goal\" role=\"tab\" data-toggle=\"tab\" style=\"font-size:20px;\">Goal</a></li>\n\t\t\t\t\t<li role=\"presentation\"><a href=\"#vision\" aria-controls=\"vision\" role=\"tab\" data-toggle=\"tab\" style=\"font-size:20px;\">Vision</a></li>\n\t\t\t\t</ul> -->\n\n\t\t\t\t<!-- Tab panes -->\n\t\t\t\t<!-- <div class=\"tab-content\">\n\t\t\t\t\t<br />\n\t\t\t\t\t<div role=\"tabpanel\" class=\"tab-pane active text-justify\" id=\"mission\">To give every shelter animal a furever home and give the ultimate gift of love.\n\t\t\t\t\t<br />\n\t\t\t\t\t<button class=\"button-more-success btn\" type=\"button\" style=\"margin:10px;\">READ MORE</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div role=\"tabpanel\" class=\"tab-pane text-justify\" id=\"goal\">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.\n\t\t\t\t\t<br />\n\t\t\t\t\t<button class=\"button-more-success btn\" type=\"button\" style=\"margin:10px;\">READ MORE</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div role=\"tabpanel\" class=\"tab-pane text-justify\" id=\"vision\">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.\n\t\t\t\t\t<br />\n\t\t\t\t\t<button class=\"button-more-success btn\" type=\"button\" style=\"margin:10px;\">READ MORE</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div> -->\n\t\t\t<!-- </div>\n\t\t</div>\n\t\t</div>\n\t</div> -->\n\t<div class=\"bg-container\">\n\t\t<div class=\"container-pets mx-auto\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"page-header\" id=\"pets\">\n\t\t\t\t\t<h1 class=\"text-primary text-center\">OUR PETS</h1>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<img class=\"img-responsive\" src=\"/assets/images/pets1.jpg\" />\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"background-color: #D4EDF7;; color:#000;\">\n\t\t\t\t\t\t\t\t<h3>REX</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 text-center\">\n\t\t\t\t\t\t\t\t<button class=\"button-more-success btn\" type=\"button\" style=\"margin:10px;\">READ MORE</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<img class=\"img-responsive\" src=\"/assets/images/pets2.jpg\" />\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"background-color: #D4EDF7; color:#000;\">\n\t\t\t\t\t\t\t\t<h3>LUCKY</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 text-center\">\n\t\t\t\t\t\t\t\t<button class=\"button-more-success btn\" type=\"button\" style=\"margin:10px;\">READ MORE</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t<br />\n\t\t\t\t\t<br />\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<img class=\"img-responsive\" src=\"./../../../assets/images/pets4.jpg\" />\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"background-color: #D4EDF7; color:#000;\">\n\t\t\t\t\t\t\t\t<h3>TIGER</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 text-center\">\n\t\t\t\t\t\t\t\t<button class=\"button-more-success btn\" type=\"button\" style=\"margin:10px;\">READ MORE</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<img class=\"img-responsive\" src=\"/assets/images/pets3.jpg\" />\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"background-color: #D4EDF7; color:#000;\">\n\t\t\t\t\t\t\t\t<h3>BENJY</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 text-center\">\n\t\t\t\t\t\t\t\t<button class=\"button-more-success btn\" type=\"button\" style=\"margin:10px;\">READ MORE</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"container-contact\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"page-header\" id=\"contact\">\n\t\t\t\t\t<h2 class=\"text-center text-primary\">Contact us using the form below</h2>\n\t\t\t\t\t<br />\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t\t<form>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"form-name\">Name</label>\n\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"form-name\" placeholder=\"Name\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"form-email\">Email Address</label>\n\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"form-email\" placeholder=\"Email Address\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"form-subject\">Telephone</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"form-subject\" placeholder=\"Subject\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"form-message\">Email your Message</label>\n\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" id=\"form-message\" placeholder=\"Message\"></textarea>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<button class=\"button-more-primary btn btn-lg\" type=\"submit\" style=\"margin:10px;\">Register Now</button>\n\t\t\t\t\t\t\t\t<br /><br />\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<footer id=\"subfooter\" class=\"clearfix\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row text-justify\">\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<h3>About Us</h3>\n\t\t\t\t\t<br />\n\t\t\t\t\t<p>Our mission is to find the homeless animals around the country and give them a better life.</p>\n\t\t\t\t\t<hr style=\"border-color:#bbb;\">\n\t\t\t\t\t<p>54, North Road, PA 45086, USA</p>\n\t\t\t\t\t<p>+1 888 455 6677</p>\n\t\t\t\t\t<p><a href=\"mailto:mail@example.com\" style=\"color:#4BAFD3;\">mail@example.com</a></p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<h3>Animals For Adoption</h3>\n\t\t\t\t\t<br />\n\t\t\t\t\t<div class=\"row text-justify\">\n\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t<img class=\"img-responsive\" src=\"/assets/images/gallery/gallery1.jpg\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t<p>What is Lorem Ipsum?</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<br />\n\t\t\t\t\t<div class=\"row text-justify\">\n\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t<img class=\"img-responsive\" src=\"/assets/images/gallery/gallery2.jpg\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t<p>Where does it come from?</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<br />\n\t\t\t\t\t<div class=\"row text-justify\">\n\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t<img class=\"img-responsive\" src=\"/assets/images/gallery/gallery3.jpg\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t<p>Why do we use it?</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<h3>Last Adopted</h3>\n\t\t\t\t\t<br />\n\t\t\t\t\t<div class=\"row text-justify\">\n\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t<img class=\"img-responsive\" src=\"/assets/images/image4.jpg\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<br />\n\t\t\t\t\t<div class=\"row text-justify\">\n\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t<img class=\"img-responsive\" src=\"/assets/images/image2.jpg\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</footer>\n\n\t<footer id=\"footer\" class=\"clearfix\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<a class=\"fa fa-twitter footer-socialicon\" target=\"_blank\" href=\"https://twitter.com/\"></a>\n\t\t\t\t\t\t<a class=\"fa fa-facebook footer-socialicon\" target=\"_blank\" href=\"https://www.facebook.com/\"></a>\n\t\t\t\t\t\t<a class=\"fa fa-google-plus footer-socialicon\" target=\"_blank\" href=\"https://plus.google.com/\"></a>\n\t\t\t\t\t\t<a class=\"fa fa-linkedin footer-socialicon\" target=\"_blank\" href=\"https://plus.google.com/\"></a>\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</footer>\n\n\n</body>\n"

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
exports.push([module.i, "#container{\n    font-family: oswald;\n    font-size: 30px;\n    margin-left: 20px;\n}\nimg{\n    width: 500px;\n}\n#info{\n    font-family: oswald;\n}\nh3{\n    text-align: left;\n}\n.login{\n    font-size: 22px;\n    width: 500px;\n    font-family: oswald;\n    display: inline;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n   <!-- Carousel -->\n  <div id=\"theme-carousel\" class=\"carousel slide\" data-ride=\"carousel\">\n    <!-- Wrapper for slides -->\n    <div class=\"carousel-inner\" role=\"listbox\">\n      <div class=\"item active\">\n        <img src=\"/assets/images/carousel1.jpg\" alt=\"carousel1\" style=\"width: 100%\" />\n        <div class=\"carousel-caption\">\n          <div class=\"row\">\n            <div class=\"col-md-7\">\n            </div>\n            <div class=\"col-md-5\">\n              <h2>SAVE LIFE ADOPT A PET</h2>\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>\n              <br />\n              <button class=\"button-more-primary btn btn-lg\" type=\"button\" style=\"margin:10px;\">READ MORE</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"item\">\n        <img src=\"/assets/images/carousel2.jpg\" alt=\"carousel2\" style=\"width: 100%\" />\n        <div class=\"carousel-caption\">\n          <div class=\"row\">\n            <div class=\"col-md-5\">\n              <h2>HELP WITH CARE AND LOVE</h2>\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>\n              <br />\n              <button class=\"button-more-primary btn btn-lg\" type=\"button\" style=\"margin:10px;\">READ MORE</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"item\">\n        <img src=\"/assets/images/carousel3.jpg\" alt=\"carousel3\" style=\"width: 100%\">\n        <div class=\"carousel-caption\">\n          <div class=\"row\">\n            <div class=\"col-md-7\">\n            </div>\n            <div class=\"col-md-5\">\n              <h2>ANIMALS NEED THE SUPPORT</h2>\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>\n              <br />\n              <button class=\"button-more-primary btn btn-lg\" type=\"button\" style=\"margin:10px;\">READ MORE</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- Controls -->\n    <a class=\"left carousel-control\" href=\"#theme-carousel\" role=\"button\" data-slide=\"prev\">\n      <div class=\"carousel-control-arrow\">&#8249;</div>\n    </a>\n    <a class=\"right carousel-control\" href=\"#theme-carousel\" role=\"button\" data-slide=\"next\">\n      <div class=\"carousel-control-arrow\">&#8250;</div>\n    </a>\n  </div>\n\n  <!-- <div class=\"container-about\">\n    <div class=\"container\">\n      <div class=\"page-header\" id=\"home\">\n        <h1 class=\"text-primary  text-center\">ABOUT US</h1>\n      </div>\n      <div class=\"row\">\n      <div class=\"col-md-6\">\n        <img class=\"img-responsive\" src=\"/assets/images/image1.jpg\"/>\n      </div>\n      <div class=\"col-md-6\">\n        <div>\n        <!-- Nav tabs -->\n        <!-- <ul class=\"nav nav-tabs\" role=\"tablist\">\n          <li role=\"presentation\" class=\"active\"><a href=\"#mission\" aria-controls=\"mission\" role=\"tab\" data-toggle=\"tab\" style=\"font-size:20px;\">Mission</a></li>\n          <li role=\"presentation\"><a href=\"#goal\" aria-controls=\"goal\" role=\"tab\" data-toggle=\"tab\" style=\"font-size:20px;\">Goal</a></li>\n          <li role=\"presentation\"><a href=\"#vision\" aria-controls=\"vision\" role=\"tab\" data-toggle=\"tab\" style=\"font-size:20px;\">Vision</a></li>\n        </ul> -->\n\n        <!-- Tab panes -->\n        <!-- <div class=\"tab-content\">\n          <br />\n          <div role=\"tabpanel\" class=\"tab-pane active text-justify\" id=\"mission\">To give every shelter animal a furever home and give the ultimate gift of love.\n          <br />\n          <button class=\"button-more-success btn\" type=\"button\" style=\"margin:10px;\">READ MORE</button>\n          </div>\n          <div role=\"tabpanel\" class=\"tab-pane text-justify\" id=\"goal\">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.\n          <br />\n          <button class=\"button-more-success btn\" type=\"button\" style=\"margin:10px;\">READ MORE</button>\n          </div>\n          <div role=\"tabpanel\" class=\"tab-pane text-justify\" id=\"vision\">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.\n          <br />\n          <button class=\"button-more-success btn\" type=\"button\" style=\"margin:10px;\">READ MORE</button>\n          </div>\n          </div>\n        </div> -->\n      <!-- </div>\n    </div>\n    </div>\n  </div> -->\n  <div class=\"bg-container\">\n    <div class=\"container-pets mx-auto\">\n      <div class=\"container\">\n          <div class=\"page-header\" id=\"pets\">\n              <h1 class=\"text-primary text-center\">For every human who needs to pawndr their furever friend</h1>\n            </div>\n        <fieldset>\n          <form (submit)=\"login()\"  #newUserForm=\"ngForm\">\n            <p>Fist Name: <input type=\"text\" name=\"firstName\" [(ngModel)]=\"user.firstName\"></p>\n            <p>Last Name: <input type=\"text\" name=\"lastName\" [(ngModel)]=\"user.lastName\"></p>\n            <p>Email: <input type=\"email\" name=\"email\" [(ngModel)]=\"user.email\"></p>\n            <input type=\"submit\" value=\"login\">\n          </form>\n        </fieldset>\n\n      </div>\n    </div>\n  </div>\n\n  <footer id=\"subfooter\" class=\"clearfix\">\n    <div class=\"container\">\n      <div class=\"row text-justify\">\n        <div class=\"col-md-4\">\n          <h3>About Us</h3>\n          <br />\n          <p>Our mission is to find the homeless animals around the country and give them a better life.</p>\n          <hr style=\"border-color:#bbb;\">\n          <p>54, North Road, PA 45086, USA</p>\n          <p>+1 888 455 6677</p>\n          <p><a href=\"mailto:mail@example.com\" style=\"color:#4BAFD3;\">mail@example.com</a></p>\n        </div>\n        <div class=\"col-md-4\">\n          <h3>Animals For Adoption</h3>\n          <br />\n          <div class=\"row text-justify\">\n            <div class=\"col-md-4\">\n              <img class=\"img-responsive\" src=\"/assets/images/gallery/gallery1.jpg\" />\n            </div>\n            <div class=\"col-md-8\">\n              <p>What is Lorem Ipsum?</p>\n            </div>\n          </div>\n          <br />\n          <div class=\"row text-justify\">\n            <div class=\"col-md-4\">\n              <img class=\"img-responsive\" src=\"/assets/images/gallery/gallery2.jpg\" />\n            </div>\n            <div class=\"col-md-8\">\n              <p>Where does it come from?</p>\n            </div>\n          </div>\n          <br />\n          <div class=\"row text-justify\">\n            <div class=\"col-md-4\">\n              <img class=\"img-responsive\" src=\"/assets/images/gallery/gallery3.jpg\" />\n            </div>\n            <div class=\"col-md-8\">\n              <p>Why do we use it?</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <h3>Last Adopted</h3>\n          <br />\n          <div class=\"row text-justify\">\n            <div class=\"col-md-4\">\n              <img class=\"img-responsive\" src=\"/assets/images/image4.jpg\" />\n            </div>\n            <div class=\"col-md-8\">\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>\n            </div>\n          </div>\n          <br />\n          <div class=\"row text-justify\">\n            <div class=\"col-md-4\">\n              <img class=\"img-responsive\" src=\"/assets/images/image2.jpg\" />\n            </div>\n            <div class=\"col-md-8\">\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n\n  <footer id=\"footer\" class=\"clearfix\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-8\">\n          <p>Created by <a href=\"https://www.shieldui.com\" title=\"Shield UI\" style=\"color: #4BAFD3;\">Shield UI</a> and hosted by <a href=\"https://www.prepbootstrap.com\" title=\"PrepBootstrap\" style=\"color: #4BAFD3;\">PrepBootstrap</a></p>\n        </div>\n        <div class=\"col-md-4\">\n          <p>\n            <a class=\"fa fa-twitter footer-socialicon\" target=\"_blank\" href=\"https://twitter.com/\"></a>\n            <a class=\"fa fa-facebook footer-socialicon\" target=\"_blank\" href=\"https://www.facebook.com/\"></a>\n            <a class=\"fa fa-google-plus footer-socialicon\" target=\"_blank\" href=\"https://plus.google.com/\"></a>\n            <a class=\"fa fa-linkedin footer-socialicon\" target=\"_blank\" href=\"https://plus.google.com/\"></a>\n          </p>\n        </div>\n        \n      </div>\n    </div>\n  </footer>\n</body>\n  \n\n\n"

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

module.exports = "<div class=\"create\">\n        <h3>Create Listing</h3>\n          <div class=\"pet\">\n            <form (submit)=\"addPet(); petForm.reset()\" #petForm=\"ngForm\">\n              <div class=\"col-sm-7\">\n                <div class=\"form-group\">\n                  <label>Name: </label> <span class=\"error\" *ngIf=\"name.errors && (name.dirty || name.touched)\"> *required</span>\n                  <input type=\"text\" name=\"name\" class=\"form-control\" [(ngModel)]=\"newPet.name\" #title=\"ngModel\" required>\n                  <label>Image URL: </label> <span class=\"error\" *ngIf=\"image.errors && (image.dirty || image.touched)\"> *required</span>\n                  <input type=\"text\" name=\"name\" class=\"form-control\" [(ngModel)]=\"newPet.image\" #title=\"ngModel\" required>\n                  <label>Description: </label> <span class=\"error\" *ngIf=\"description.errors && (description.dirty || description.touched)\">\n                    <span *ngIf=\"description.errors.required\"> *required</span><span *ngIf=\"description.errors.maxlength\"> *cannot exceed 500 characters</span></span>\n                  <textarea class=\"form-control\" rows=\"3\" name=\"desc\" [(ngModel)]=\"newPet.description\" #description=\"ngModel\" required maxlength=\"500\"></textarea>\n                </div>\n              </div>\n              <div class=\"col-sm-2\">\n                <div class=\"form-group\">\n                  <label>Adoption Fee: </label> <span class=\"error\" *ngIf=\"fee.errors && (fee.dirty || fee.touched)\">\n                    <span *ngIf=\"fee.errors.required\"> *required</span><span *ngIf=\"!fee.errors.required && fee.errors.minValue\">*at least $1</span></span>\n                  <input type=\"number\" class=\"form-control\" name=\"fee\" [(ngModel)]=\"newPet.fee\" #fee=\"ngModel\" required minValue=\"1\">\n                  <label>Location</label> <span class=\"error\" *ngIf=\"location.errors && (location.dirty || location.touched)\"> *required</span>\n                  <input type=\"text\" class=\"form-control\" name=\"location\" [(ngModel)]=\"newPet.location\" #location=\"ngModel\" required>\n                  <input type=\"submit\" value=\"Create\" class=\"btn btn-success\" [disabled]=\"!petForm.form.valid || !hasImage\">\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n        <hr>\n        <div class=\"edits\">\n        <h3>Edit/Delete Listings</h3>\n          <div class=\"pets\" *ngFor=\"let p of myPets; let idx = index\">\n            <form (submit)=\"updatePet(idx)\" #petForm=\"ngForm\">\n              <div class=\"col-sm-7\">\n                <div class=\"form-group\">\n                  <label>Title</label> \n                   <span class=\"error\" *ngIf=\"title.errors && (title.dirty || title.touched)\"> *required</span> \n                  <input type=\"text\" name=\"title\" class=\"form-control\" [(ngModel)]=\"p.title\" #title=\"ngModel\" required>\n                  <label>Description</label> \n                   <span class=\"error\" *ngIf=\"description.errors && (description.dirty || description.touched)\"> \n                   <span *ngIf=\"description.errors.required\"> *required</span><span *ngIf=\"description.errors.maxlength\"> *cannot exceed 500 characters</span></span> \n                  <textarea class=\"form-control\" rows=\"3\" name=\"desc\" [(ngModel)]=\"p.description\" #description=\"ngModel\" required maxlength=\"500\"></textarea>\n                </div>\n              </div>\n              <div class=\"col-sm-2\">\n                <div class=\"form-group\">\n                  <label>Fee</label>\n                    <span class=\"error\" *ngIf=\"fee.errors && (fee.dirty || fee.touched)\"> \n                    <span *ngIf=\"fee.errors.required\"> *required</span><span *ngIf=\"feeTooLow\">*at least $1</span></span> \n                  <input type=\"number\" class=\"form-control\" name=\"fee\" [(ngModel)]=\"p.fee\" #fee=\"ngModel\" required minValue=\"1\">\n                  <label>Location</label> \n                    <span class=\"error\" *ngIf=\"location.errors && (location.dirty || location.touched)\"> *required</span> \n                  <input type=\"text\" class=\"form-control\" name=\"location\" [(ngModel)]=\"b.location\" #location=\"ngModel\" required>\n                  <input type=\"submit\" value=\"Update\" class=\"btn btn-primary btn-half\" [disabled]=\"!petForm.form.valid || p.image == '' || p.image == null\"> \n                  <button class=\"btn btn-danger btn-half\" (click)=\"deletePet(idx)\">Delete</button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>"

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

module.exports = "<p>\n  user-pets works!\n</p>\n"

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

module.exports = "\n  <div class=\"container-stories\">\n    <div class=\"container\">\n        <div class=\"page-header\" id=\"stories\">\n          <h1 class=\"text-primary text-center\">PETS STORIES</h1>\n        </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <img class=\"img-responsive\" src=\"assets/images/image2.jpg\" />\n            </div>\n            <div class=\"col-md-6\">\n              <h3>Isabella</h3>\n              <p>and Rex</p>\n              <br />\n              <p class=\"text-justify\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>\n              <br />\n              <button class=\"button-more-success btn\" type=\"button\" style=\"margin:10px;\">READ MORE</button>\n              <br />\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <img class=\"img-responsive\" src=\"assets/images/image3.jpg\" />\n            </div>\n            <div class=\"col-md-6\">\n              <h3>Zoe, Oliver</h3>\n              <p>Molly and Max</p>\n              <br />\n              <p class=\"text-justify\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>\n              <br />\n              <button class=\"button-more-success btn\" type=\"button\" style=\"margin:10px;\">READ MORE</button>\n              <br />\n            </div>\n          </div>\n        </div>\n      </div>\n      <br />\n      <br />\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <img class=\"img-responsive\" src=\"assets/images/image4.jpg\" />\n            </div>\n            <div class=\"col-md-6\">\n              <h3>Mia</h3>\n              <p>and Charlie</p>\n              <br />\n              <p class=\"text-justify\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>\n              <br />\n              <button class=\"button-more-success btn\" type=\"button\" style=\"margin:10px;\">READ MORE</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <img class=\"img-responsive\" src=\"assets/images/image5.jpg\" />\n            </div>\n            <div class=\"col-md-6\">\n              <h3>James</h3>\n              <p>and Toby</p>\n              <br />\n              <p class=\"text-justify\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>\n              <br />\n              <button class=\"button-more-success btn\" type=\"button\" style=\"margin:10px;\">READ MORE</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n"

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