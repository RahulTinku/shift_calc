webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-login-users/add-login-users.component.css":
/***/ (function(module, exports) {

module.exports = ".userInfo {\n\tmargin-left: 4%;\n\tmargin-top: 2%;\n\tpadding: 10px;\n\twidth: 90%;\n\tborder : 1px solid black;\n\tborder-radius: 15px;\n}"

/***/ }),

/***/ "./src/app/add-login-users/add-login-users.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"contanier-fluid userInfo shadow p-3 mb-5 bg-white rounded\">\n  <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\" role=\"form\">\n  \t<div class=\"form-group\">\n      <label for=\"username\" class=\"control-label required\">Username</label>\n      <input type=\"text\" class=\"form-control\" [ngClass]=\"{'is-invalid' : userForm.get('username').errors && \n    (userForm.get('username').touched || userForm.get('username').dirty)}\" id=\"username\" placeholder=\"Username\" formControlName=\"username\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\" class=\"control-label required\">Password</label>\n      <input type=\"password\" class=\"form-control\" [ngClass]=\"{'is-invalid' : userForm.get('password').errors && \n    (userForm.get('password').touched || userForm.get('password').dirty)}\" id=\"password\" placeholder=\"Password\" formControlName=\"password\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"name\" class=\"control-label required\">Name</label>\n      <input type=\"text\" class=\"form-control\" [ngClass]=\"{'is-invalid' : userForm.get('name').errors && \n    (userForm.get('name').touched || userForm.get('name').dirty)}\" id=\"name\" placeholder=\"Name\" formControlName=\"name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleFormControlInput2\">Email address</label>\n      <input type=\"email\" class=\"form-control\" formControlName=\"email\" [ngClass]=\"{'is-invalid' : userForm.get('email').errors && \n    (userForm.get('email').touched || userForm.get('email').dirty)}\"  placeholder=\"name@example.com\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"phone\">Phone</label>\n      <input type=\"tel\" class=\"form-control\" formControlName=\"phone\" [ngClass]=\"{'is-invalid' : userForm.get('phone').errors && \n    (userForm.get('phone').touched || userForm.get('phone').dirty)}\" placeholder=\"9191919191\" pattern=\"[0-9]{10}\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"phone\">Joining Date</label>\n      <input type=\"text\"\n                class=\"form-control\"\n                formControlName=\"join_date\"\n                [ngClass]=\"{'is-invalid' : userForm.get('join_date').errors && \n    (userForm.get('join_date').touched || userForm.get('join_date').dirty)}\"\n                [minDate]=\"minDate\"\n                [maxDate]=\"maxDate\"\n                [bsConfig]=\"bsConfig\"\n                bsDatepicker [(bsValue)]=\"joinDate\">\n    </div>\n<!--     <div class=\"form-group\">\n      <label for=\"manager\">Manager</label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"manager\" placeholder=\"Manager Name\">\n    </div>\n -->\n    <div class=\"form-group\">\n      <label for=\"manager\">Manager</label>\n      <select class=\"form-control\" formControlName=\"manager\">\n        <option *ngFor=\"let m of managers\" [value]=\"m.name\" >{{m.name}}</option>\n      </select>\n    </div>\n\n    <fieldset class=\"form-group\">\n    <div class=\"row\" >\n      <legend class=\"col-form-label col-sm-2 pt-0\">Gender</legend>\n      <div class=\"col-sm-10\">\n        <div class=\"form-check\">\n          <input class=\"form-check-input\" type=\"radio\" formControlName=\"gender\" id=\"male\" value=\"male\" checked>\n          <label class=\"form-check-label\" for=\"male\">\n            Male\n          </label>\n        </div>\n        <div class=\"form-check\">\n          <input class=\"form-check-input\" type=\"radio\" formControlName=\"gender\"  id=\"female\" value=\"female\">\n          <label class=\"form-check-label\" for=\"female\">\n            Female\n          </label>\n        </div>\n      </div>\n    </div>\n  </fieldset>\n\n  <div class=\"form-group\">\n    <label for=\"shifts\">Shifts</label>\n    <select class=\"form-control\" [ngClass]=\"{'is-invalid' : userForm.get('shift').errors && \n    (userForm.get('shift').touched || userForm.get('shift').dirty)}\" formControlName=\"shift\" >\n      <option>Normal</option>\n      <option>Afternoon</option>\n      <option>Evening</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"team\">Team</label>\n    <select class=\"form-control\" [ngClass]=\"{'is-invalid' : userForm.get('team').errors && \n    (userForm.get('team').touched || userForm.get('team').dirty)}\" formControlName=\"team\" >\n      <option>A</option>\n      <option>B</option>\n      <option>C</option>\n      <option>D</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"type\">Type</label>\n    <select class=\"form-control\" [ngClass]=\"{'is-invalid' : userForm.get('phone').errors && \n    (userForm.get('phone').touched || userForm.get('phone').dirty)}\" formControlName=\"emp_type\" >\n      <option>Manager</option>\n      <option>Supervisor</option>\n    </select>\n  </div>\n<!--     <div class=\"form-group\">\n      <label for=\"exampleFormControlSelect2\">Example multiple select</label>\n      <select multiple class=\"form-control\" id=\"exampleFormControlSelect2\">\n        <option>1</option>\n        <option>2</option>\n        <option>3</option>\n        <option>4</option>\n        <option>5</option>\n      </select>\n    </div> -->\n    <div class=\"form-group\">\n      <label for=\"address\">Complete Address</label>\n      <textarea class=\"form-control\" formControlName=\"address\" [ngClass]=\"{'is-invalid' : userForm.get('address').errors && \n    (userForm.get('address').touched || userForm.get('address').dirty)}\" rows=\"3\"></textarea>\n    </div>\n    <div class=\"form-group row\">\n      <div class=\"col-sm-10\">\n        <button type=\"submit\" class=\"btn btn-primary\">Add New Manager</button>\n      </div>\n    </div>\n<!--     <div class=\"form-group row\" *ngIf=\"addeduser\">\n      <div class=\"col-sm-10\">\n        <button type=\"button\" (click)=\"goBack()\" class=\"btn btn-light\">Go Back To Login</button>\n      </div>\n    </div> -->\n    <div>\n      <div *ngIf=\"errorMessage\" class=\"alert alert-danger\">\n        <strong>Please fill all the fields correctly</strong>\n      </div>\n      <div *ngIf=\"duplicate\" class=\"alert alert-danger\">\n        <strong>Duplicate User</strong>\n      </div>\n      <div *ngIf=\"addeduser\" class=\"alert alert-success\">\n        <strong>Success!</strong>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/add-login-users/add-login-users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddLoginUsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_commonService__ = __webpack_require__("./src/app/common/commonService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__adduser_adduser_service__ = __webpack_require__("./src/app/adduser/adduser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__employee_employee_service__ = __webpack_require__("./src/app/employee/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddLoginUsersComponent = /** @class */ (function () {
    function AddLoginUsersComponent(fb, router, route, commonService, adduserService, empService) {
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.commonService = commonService;
        this.adduserService = adduserService;
        this.empService = empService;
        this.shifts = [];
        this.managers = [];
        this.errorMessage = false;
        this.addeduser = false;
        this.duplicate = false;
        this.joinDate = new Date();
        this.colorTheme = 'theme-blue';
        this.bsConfig = Object.assign({}, { containerClass: this.colorTheme, showWeekNumbers: false });
    }
    AddLoginUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.emp_id = this.route.snapshot.paramMap.get('id');
        this.clearForm();
        this.commonService.getShifts()
            .subscribe(function (res) {
            _this.shifts = res;
        }, function (error) {
            if (error === 'Unauthorized' || error === 'Forbidden') {
                _this.router.navigate(['/']);
            }
        });
        this.commonService.getManagers()
            .subscribe(function (res) {
            _this.managers = res;
        }, function (error) {
            if (error === 'Unauthorized' || error === 'Forbidden') {
                _this.router.navigate(['/']);
            }
        });
    };
    AddLoginUsersComponent.prototype.clearForm = function () {
        this.userForm = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            name: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            email: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]],
            phone: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern]],
            join_date: [new Date(), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            manager: [''],
            gender: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            shift: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            team: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            emp_type: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            address: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]
        });
    };
    AddLoginUsersComponent.prototype.goBack = function () {
        this.router.navigate(['/login']);
    };
    AddLoginUsersComponent.prototype.onSubmit = function () {
        var _this = this;
        this.errorMessage = false;
        this.addeduser = false;
        this.duplicate = false;
        if (this.userForm.valid) {
            var user_1 = Object.assign({}, this.userForm.value);
            var shiftId = this.shifts.filter(function (item) {
                if (user_1.shift === item.name) {
                    return item._id;
                }
            });
            user_1.shift_id = shiftId[0]._id;
            if (user_1.manager !== '') {
                var manager_id = this.managers.filter(function (item) {
                    if (user_1.manager === item.name) {
                        return item;
                    }
                });
                user_1.manager_id = manager_id[0].emp_id;
            }
            this.adduserService.addLogin(user_1)
                .subscribe(function (res) {
                _this.addeduser = true;
                _this.clearForm();
                setTimeout(function () {
                    _this.router.navigate(['/list', _this.emp_id]);
                }, 2000);
            }, function (error) {
                if (error === 'Unauthorized' || error === 'Forbidden') {
                    _this.router.navigate(['/',]);
                }
                _this.duplicate = true;
            });
        }
        else {
            this.errorMessage = true;
        }
    };
    AddLoginUsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-login-users',
            template: __webpack_require__("./src/app/add-login-users/add-login-users.component.html"),
            styles: [__webpack_require__("./src/app/add-login-users/add-login-users.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__common_commonService__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_3__adduser_adduser_service__["a" /* AdduserService */],
            __WEBPACK_IMPORTED_MODULE_4__employee_employee_service__["a" /* EmployeeService */]])
    ], AddLoginUsersComponent);
    return AddLoginUsersComponent;
}());



/***/ }),

/***/ "./src/app/adduser/adduser.component.css":
/***/ (function(module, exports) {

module.exports = ".userInfo {\n\tmargin-left: 4%;\n\tmargin-top: 2%;\n\tpadding: 10px;\n\twidth: 90%;\n\tborder : 1px solid black;\n\tborder-radius: 15px;\n}"

/***/ }),

/***/ "./src/app/adduser/adduser.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"contanier-fluid userInfo shadow p-3 mb-5 bg-white rounded\">\n  <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\" role=\"form\">\n    <div class=\"form-group\">\n      <label for=\"name\" class=\"control-label required\">Name</label>\n      <input type=\"text\" class=\"form-control\" [ngClass]=\"{'is-invalid' : userForm.get('name').errors && \n    (userForm.get('name').touched || userForm.get('name').dirty)}\" id=\"name\" placeholder=\"Name\" formControlName=\"name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleFormControlInput2\">Email address</label>\n      <input type=\"email\" class=\"form-control\" formControlName=\"email\" [ngClass]=\"{'is-invalid' : userForm.get('email').errors && \n    (userForm.get('email').touched || userForm.get('email').dirty)}\"  placeholder=\"name@example.com\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"phone\">Phone</label>\n      <input type=\"tel\" class=\"form-control\" formControlName=\"phone\" [ngClass]=\"{'is-invalid' : userForm.get('phone').errors && \n    (userForm.get('phone').touched || userForm.get('phone').dirty)}\" placeholder=\"9191919191\" pattern=\"[0-9]{10}\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"phone\">Joining Date</label>\n      <input type=\"text\"\n                class=\"form-control\"\n                formControlName=\"join_date\"\n                [ngClass]=\"{'is-invalid' : userForm.get('join_date').errors && \n    (userForm.get('join_date').touched || userForm.get('join_date').dirty)}\"\n                [minDate]=\"minDate\"\n                [maxDate]=\"maxDate\"\n                [bsConfig]=\"bsConfig\"\n                bsDatepicker [(bsValue)]=\"joinDate\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"manager\">Manager</label>\n      <select class=\"form-control\" formControlName=\"manager\" [ngClass]=\"{'is-invalid' : userForm.get('manager').errors && \n        (userForm.get('manager').touched || userForm.get('manager').dirty)}\" >\n        <option *ngFor=\"let m of managers\" [value]=\"m.name\" >{{m.name}}</option>\n      </select>\n    </div>\n<!--     <div class=\"form-group\">\n      <label for=\"manager\">Manager</label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"manager\" [ngClass]=\"{'is-invalid' : userForm.get('manager').errors && \n    (userForm.get('manager').touched || userForm.get('manager').dirty)}\"  placeholder=\"Manager Name\">\n    </div> -->\n\n    <fieldset class=\"form-group\">\n    <div class=\"row\" >\n      <legend class=\"col-form-label col-sm-2 pt-0\">Gender</legend>\n      <div class=\"col-sm-10\">\n        <div class=\"form-check\">\n          <input class=\"form-check-input\" type=\"radio\" formControlName=\"gender\" id=\"male\" value=\"male\" checked>\n          <label class=\"form-check-label\" for=\"male\">\n            Male\n          </label>\n        </div>\n        <div class=\"form-check\">\n          <input class=\"form-check-input\" type=\"radio\" formControlName=\"gender\"  id=\"female\" value=\"female\">\n          <label class=\"form-check-label\" for=\"female\">\n            Female\n          </label>\n        </div>\n      </div>\n    </div>\n  </fieldset>\n\n  <div class=\"form-group\">\n    <label for=\"shifts\">Shifts</label>\n    <select class=\"form-control\" [ngClass]=\"{'is-invalid' : userForm.get('shift').errors && \n    (userForm.get('shift').touched || userForm.get('shift').dirty)}\" formControlName=\"shift\" >\n      <option>Normal</option>\n      <option>Afternoon</option>\n      <option>Evening</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"team\">Team</label>\n    <select class=\"form-control\" [ngClass]=\"{'is-invalid' : userForm.get('team').errors && \n    (userForm.get('team').touched || userForm.get('team').dirty)}\" formControlName=\"team\" >\n      <option>A</option>\n      <option>B</option>\n      <option>C</option>\n      <option>D</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"type\">Type</label>\n    <select class=\"form-control\" [ngClass]=\"{'is-invalid' : userForm.get('phone').errors && \n    (userForm.get('phone').touched || userForm.get('phone').dirty)}\" formControlName=\"emp_type\" >\n<!--       <option>Manager</option>\n      <option>Supervisor</option> -->\n      <option>Individual</option>\n    </select>\n  </div>\n<!--     <div class=\"form-group\">\n      <label for=\"exampleFormControlSelect2\">Example multiple select</label>\n      <select multiple class=\"form-control\" id=\"exampleFormControlSelect2\">\n        <option>1</option>\n        <option>2</option>\n        <option>3</option>\n        <option>4</option>\n        <option>5</option>\n      </select>\n    </div> -->\n    <div class=\"form-group\">\n      <label for=\"address\">Complete Address</label>\n      <textarea class=\"form-control\" formControlName=\"address\" [ngClass]=\"{'is-invalid' : userForm.get('address').errors && \n    (userForm.get('address').touched || userForm.get('address').dirty)}\" rows=\"3\"></textarea>\n    </div>\n    <div class=\"form-group row\">\n      <div class=\"col-sm-10\">\n        <button type=\"submit\" class=\"btn btn-primary\">Add New Employee</button>\n      </div>\n    </div>\n    <div>\n      <div *ngIf=\"errorMessage\" class=\"alert alert-danger\">\n        <strong>Please fill all the fields correctly</strong>\n      </div>\n      <div *ngIf=\"duplicate\" class=\"alert alert-danger\">\n        <strong>Duplicate User</strong>\n      </div>\n      <div *ngIf=\"addeduser\" class=\"alert alert-success\">\n        <strong>Success!</strong>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/adduser/adduser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdduserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_commonService__ = __webpack_require__("./src/app/common/commonService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__adduser_service__ = __webpack_require__("./src/app/adduser/adduser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__employee_employee_service__ = __webpack_require__("./src/app/employee/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdduserComponent = /** @class */ (function () {
    function AdduserComponent(fb, router, route, commonService, adduserService, empService) {
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.commonService = commonService;
        this.adduserService = adduserService;
        this.empService = empService;
        this.shifts = [];
        this.managers = [];
        this.errorMessage = false;
        this.addeduser = false;
        this.duplicate = false;
        this.joinDate = new Date();
        this.colorTheme = 'theme-blue';
        this.bsConfig = Object.assign({}, { containerClass: this.colorTheme, showWeekNumbers: false });
    }
    AdduserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.emp_id = this.route.snapshot.paramMap.get('id');
        this.clearForm();
        this.commonService.getManagers()
            .subscribe(function (res) {
            _this.managers = res;
        }, function (error) {
            if (error === 'Unauthorized' || error === 'Forbidden') {
                _this.router.navigate(['/']);
            }
        });
        this.commonService.getShifts()
            .subscribe(function (res) {
            _this.shifts = res;
        }, function (error) {
            if (error === 'Unauthorized' || error === 'Forbidden') {
                _this.router.navigate(['/']);
            }
        });
    };
    AdduserComponent.prototype.clearForm = function () {
        this.userForm = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            email: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]],
            phone: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern]],
            join_date: [new Date(), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            manager: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            gender: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            shift: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            team: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            emp_type: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            address: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]
        });
    };
    AdduserComponent.prototype.onSubmit = function () {
        var _this = this;
        this.errorMessage = false;
        this.addeduser = false;
        this.duplicate = false;
        var self = this;
        if (this.userForm.valid) {
            var user_1 = Object.assign({}, this.userForm.value);
            var shiftId = this.shifts.filter(function (item) {
                if (user_1.shift === item.name) {
                    return item._id;
                }
            });
            user_1.shift_id = shiftId[0]._id;
            var manager_id = this.managers.filter(function (item) {
                if (user_1.manager === item.name) {
                    return item;
                }
            });
            user_1.manager_id = manager_id[0].emp_id;
            user_1.join_date = this.commonService.convertDate(user_1.join_date);
            if (user_1.emp_type === 'Manager' || user_1.emp_type === 'Supervisor') {
                if (confirm('Please go to login page and add new user for Manager and Supervisor')) {
                    this.clearForm();
                    // this.adduserService.addLogin(user)
                    //   .subscribe((res)=>{
                    //     this.addeduser = true;
                    // }, (error) => {
                    //   this.duplicate = true
                    // })
                }
            }
            else {
                this.adduserService.newUser(user_1)
                    .subscribe(function (response) {
                    _this.addeduser = true;
                    _this.router.navigate(['/list', _this.emp_id]);
                }, function (error) {
                    if (error === 'Unauthorized' || error === 'Forbidden') {
                        _this.router.navigate(['/']);
                    }
                    self.duplicate = true;
                });
            }
        }
        else {
            this.errorMessage = true;
        }
    };
    AdduserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-adduser',
            template: __webpack_require__("./src/app/adduser/adduser.component.html"),
            styles: [__webpack_require__("./src/app/adduser/adduser.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__common_commonService__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_3__adduser_service__["a" /* AdduserService */],
            __WEBPACK_IMPORTED_MODULE_4__employee_employee_service__["a" /* EmployeeService */]])
    ], AdduserComponent);
    return AdduserComponent;
}());



/***/ }),

/***/ "./src/app/adduser/adduser.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdduserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdduserService = /** @class */ (function () {
    function AdduserService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    AdduserService.prototype.newUser = function (data) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        return this._http.post('api/adduser', data, options)
            .map(function (res) { return res.json(); })
            .catch(this.HandleError);
    };
    AdduserService.prototype.addLogin = function (data) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        return this._http.post('api/addloginuser', data, options)
            .map(function (res) { return res.json(); })
            .catch(this.HandleError);
    };
    AdduserService.prototype.HandleError = function (error) {
        if (error.status === 409) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw('Duplicate entry');
        }
        if (error.status === 403) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw('Forbidden');
        }
        if (error.status === 401) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw('Unauthorized');
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error || 'Server error');
        }
    };
    AdduserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AdduserService);
    return AdduserService;
}());



/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_employee_list_employee_component__ = __webpack_require__("./src/app/list-employee/list-employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__employee_employee_component__ = __webpack_require__("./src/app/employee/employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calculate_calculate_component__ = __webpack_require__("./src/app/calculate/calculate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__adduser_adduser_component__ = __webpack_require__("./src/app/adduser/adduser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_login_users_add_login_users_component__ = __webpack_require__("./src/app/add-login-users/add-login-users.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */]
    }, {
        path: 'list/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__list_employee_list_employee_component__["a" /* ListEmployeeComponent */]
    }, {
        path: 'employee/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__employee_employee_component__["a" /* EmployeeComponent */]
    }, {
        path: 'calculate',
        component: __WEBPACK_IMPORTED_MODULE_5__calculate_calculate_component__["a" /* CalculateComponent */]
    }, {
        path: 'adduser/:id',
        component: __WEBPACK_IMPORTED_MODULE_6__adduser_adduser_component__["a" /* AdduserComponent */]
    }, {
        path: 'addloginuser/:id',
        component: __WEBPACK_IMPORTED_MODULE_7__add_login_users_add_login_users_component__["a" /* AddLoginUsersComponent */]
    }, {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */],
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".home{\n\twidth: 100%;\n\toverflow-x: hidden;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"contanier-fluid home\">\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.inLogin = true;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_app_routing_module__ = __webpack_require__("./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__list_employee_list_employee_component__ = __webpack_require__("./src/app/list-employee/list-employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__employee_employee_component__ = __webpack_require__("./src/app/employee/employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__adduser_adduser_component__ = __webpack_require__("./src/app/adduser/adduser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__calculate_calculate_component__ = __webpack_require__("./src/app/calculate/calculate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_commonService__ = __webpack_require__("./src/app/common/commonService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_excel_service__ = __webpack_require__("./src/app/common/excel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__employee_employee_service__ = __webpack_require__("./src/app/employee/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__adduser_adduser_service__ = __webpack_require__("./src/app/adduser/adduser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__list_employee_list_employee_service__ = __webpack_require__("./src/app/list-employee/list-employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_bootstrap_datepicker__ = __webpack_require__("./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ngx_bootstrap_accordion__ = __webpack_require__("./node_modules/ngx-bootstrap/accordion/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_bootstrap_dropdown__ = __webpack_require__("./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_search_filter__ = __webpack_require__("./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_order_pipe__ = __webpack_require__("./node_modules/ng2-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_ng2_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ngx_pagination__ = __webpack_require__("./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__add_login_users_add_login_users_component__ = __webpack_require__("./src/app/add-login-users/add-login-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















 //importing the module




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__list_employee_list_employee_component__["a" /* ListEmployeeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__employee_employee_component__["a" /* EmployeeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__calculate_calculate_component__["a" /* CalculateComponent */],
                __WEBPACK_IMPORTED_MODULE_9__adduser_adduser_component__["a" /* AdduserComponent */],
                __WEBPACK_IMPORTED_MODULE_22__add_login_users_add_login_users_component__["a" /* AddLoginUsersComponent */],
                __WEBPACK_IMPORTED_MODULE_23__header_header_component__["a" /* HeaderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_16_ngx_bootstrap_datepicker__["a" /* BsDatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_17_ngx_bootstrap_accordion__["a" /* AccordionModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_18_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_19_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
                __WEBPACK_IMPORTED_MODULE_20_ng2_order_pipe__["Ng2OrderModule"],
                __WEBPACK_IMPORTED_MODULE_21_ngx_pagination__["a" /* NgxPaginationModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__list_employee_list_employee_service__["a" /* ListEmployeeService */],
                __WEBPACK_IMPORTED_MODULE_11__common_commonService__["a" /* CommonService */],
                __WEBPACK_IMPORTED_MODULE_13__employee_employee_service__["a" /* EmployeeService */],
                __WEBPACK_IMPORTED_MODULE_14__adduser_adduser_service__["a" /* AdduserService */],
                __WEBPACK_IMPORTED_MODULE_12__common_excel_service__["a" /* ExcelService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/calculate/calculate.component.css":
/***/ (function(module, exports) {

module.exports = ".has-search .form-control {\n    padding-left: 2.375rem;\n}\n\n.has-search .form-control-feedback {\n    position: absolute;\n    z-index: 2;\n    display: block;\n    width: 2.375rem;\n    height: 2.375rem;\n    line-height: 2.375rem;\n    text-align: center;\n    pointer-events: none;\n    color: #aaa;\n}\n\n.col-centered{\n    margin-left: 30%;\n}\n\n.remarks {\n    margin: 5px;\n    padding: 5px;\n}\n\n.calc {\n    margin-left: 1%;\n    margin-top: 1%;\n    padding: 5px;\n    width: 98%;\n    border : 1px solid black;\n    border-radius: 15px;\n}"

/***/ }),

/***/ "./src/app/calculate/calculate.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<button class=\"btn btn-primary\" disabled *ngIf=\"loading\">\n\t<span class=\"spinner-border spinner-border-sm\"></span>\n\tLoading..\n</button>\n<div class=\"contanier-fluid calc shadow p-3 mb-5 bg-white rounded\" *ngIf=\"!loading\">\n\t<div class=\"row\">\n\t    <div class=\"col-lg-4 col-lg-offset-4 col-centered\">\n\t    \t<div class=\"input-group\">\n\t    \t<input type=\"text\"\n\t           placeholder=\"Daterangepicker\"\n\t           class=\"form-control\"\n\t           [minDate]=\"minDate\"\n\t           bsDaterangepicker\n\t           [(bsValue)]=\"rangePicker\">\n\t\t    <span class=\"remarks\"></span>\n\t    \t<button type=\"button\" (click)=\"calculate()\" \n\t\t      \t\tclass=\"btn btn-success\">Calculate</button>\n\t\t    </div>\n\t    </div>\n\t</div>\n\t<hr>\n\t<div class=\"table-responsive\">\n\t\t<div *ngIf=\"employeeList.length === 0\" class=\"alert alert-danger\">\n\t        <strong>No Employee listed</strong>\n\t    </div>\n\n\t    <div *ngIf=\"employeeList.length !== 0\">\n\t\t<div class=\"form-group has-search\">\n\t\t    <span class=\"fa fa-search form-control-feedback\"></span>\n\t\t    <input type=\"text\" class=\"form-control\" placeholder=\"Search\" name=\"search\" [(ngModel)]=\"filter\">\n\t\t</div>\n\t    <table class=\"table table-striped\">\n\t\t    <thead>\n\t\t        <tr>\n\t\t        \t<th>#</th>\n\t\t          <th (click)=\"sort('name')\">Name\n\t\t          \t<span *ngIf=\"key =='name'\" [ngClass]=\"[reverse ? 'fas fa-angle-double-down' : 'fas fa-angle-double-up']\"></span>\n\t\t          </th>\n\t\t          <th>No of Absent Days</th>\n\t\t          <th>No of Business Days</th>\n\t\t          <th>Allowance Per Day</th>\n\t\t          <th>Allowances</th>\n\t\t        </tr>\n\t\t    </thead>\n\t\t    <tbody>\n\t\t    \t<tr *ngFor=\"let l of employeeList| orderBy: key : reverse| filter:filter| paginate: { itemsPerPage: 20, currentPage: p }; let i = index\">\n\t\t    \t\t<td>{{i+1}}</td>\n\t\t    \t\t<td>{{l.name}}</td>\n\t\t    \t\t<td>{{l.absentDays}}</td>\n\t\t    \t\t<td>{{l.noOfBusineesDays}}</td>\n\t\t    \t\t<td>{{l.allowancePerDay}}</td>\n\t\t    \t\t<td>{{l.totalAllowance}}</td>\n\t\t    \t</tr>\n\t\t    </tbody>\n\t\t</table>\n\t\t<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n\t\t</div>\n\t</div>\n\t<div *ngIf=\"noCalculate\" class=\"alert alert-danger\">\n       <strong>No data found</strong>\n    </div>\n    <div class=\"row\">\n    \t<div class=\"col-lg-4 col-lg-offset-4\">\n\t\t\t<p>Export as XLSX by clicking the below button</p>\n\t\t\t<button (click)=\"download()\"><i class=\"fas fa-file-export\" style=\"font-size:48px;color:blue\"></i></button>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/calculate/calculate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_commonService__ = __webpack_require__("./src/app/common/commonService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_employee_list_employee_service__ = __webpack_require__("./src/app/list-employee/list-employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__employee_employee_service__ = __webpack_require__("./src/app/employee/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_excel_service__ = __webpack_require__("./src/app/common/excel.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CalculateComponent = /** @class */ (function () {
    function CalculateComponent(_common, _route, _list, _empService, _excel) {
        this._common = _common;
        this._route = _route;
        this._list = _list;
        this._empService = _empService;
        this._excel = _excel;
        this.allowances = [];
        this.noDateSelected = false;
        this.loading = true;
        this.downloadableData = [];
        //sorting
        this.key = 'name'; //set default
        this.reverse = false;
        //initializing p to one
        this.p = 1;
        /** If there is some error return to list page*/
        if (this._common.getData() === undefined) {
            var emp_id = JSON.parse(localStorage.getItem('emp_id'));
            this._route.navigate(['/list', emp_id]);
        }
    }
    /** Init for this page*/
    CalculateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.employeeList = this._common.getData();
        //get all the allowances for calculation purpose
        this._common.getAllAllowance()
            .subscribe(function (res) {
            _this.loading = false;
            _this.allowanceData = res;
        }, function (error) {
            if (error === 'Unauthorized' || error === 'Forbidden') {
                _this._route.navigate(['/']);
            }
        });
    };
    // sort function
    CalculateComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    CalculateComponent.prototype.download = function () {
        var _this = this;
        this.loading = true;
        this.downloadableData.length = 0;
        var today = new Date();
        var date = today.getDay();
        var month = today.getMonth() + 1;
        var year = today.getFullYear();
        var saveDate = '' + date + '/' + month + '/' + year + '';
        var tempData = {
            Emp_Id: '',
            Name: '',
            Joining_Date: '',
            Manager_Name: '',
            Shift: '',
            Team: '',
            Emp_Type: '',
            Absent: '',
            Business_Days: '',
            Allowance: '',
            Total_Allowance: ''
        };
        if (this.employeeList[0].totalAllowance) {
            this.employeeList.map(function (item, index) {
                tempData = {
                    Emp_Id: item._id,
                    Name: item.name,
                    Joining_Date: item.join_date,
                    Manager_Name: item.manager,
                    Shift: item.shift,
                    Team: item.team,
                    Emp_Type: item.emp_type,
                    Absent: item.absentDays,
                    Business_Days: item.noOfBusineesDays,
                    Allowance: item.allowancePerDay,
                    Total_Allowance: item.totalAllowance
                };
                _this.downloadableData.push(tempData);
            });
            var file_name = 'shift_allowance_' + saveDate;
            this.exportAsXLSX(this.downloadableData, file_name);
        }
    };
    //export calculatered data to excel sheet
    CalculateComponent.prototype.exportAsXLSX = function (excelBuffer, filename) {
        this.loading = false;
        this._excel.exportAsExcelFile(excelBuffer, filename);
    };
    /**
    * main calculation of allownaces, calculating no of working days and reduce the absent days in between those days,
    * if shift is changed in between that period then find the no of working days in that period and what was the allowance
    * during that period. According to that calculate the total allowances.
    */
    CalculateComponent.prototype.calculate = function () {
        var _this = this;
        this.loading = true;
        var dateRange = this.rangePicker;
        if (dateRange !== null && dateRange !== undefined) {
            // for each employee calculate individually
            this.employeeList.forEach(function (emp, index) {
                //declare variables
                var shiftToConsider;
                var totalWorkingDays = 0;
                var noOfDays = 0;
                var empData = emp;
                var employeeAbsent;
                var absentDate = '';
                var absentDays;
                var shiftWithAllowance = [];
                var allowanceData = _this.allowanceData;
                var totalAllowance = 0;
                var allowanceAmount = 0;
                var allowancePerShift = '';
                var workingDaysInShift = '';
                var isErrorInCalculation = false;
                noOfDays = _this._common.calcBusinessDays(dateRange[0], dateRange[1]); /** calculate no of days*/
                //get attendance
                _this._empService.getAttendance(empData._id, dateRange)
                    .subscribe(function (res) {
                    employeeAbsent = res;
                    absentDays = employeeAbsent.length;
                    //getting roster for shift change
                    _this._empService.getRoster(empData._id)
                        .subscribe(function (response) {
                        if (response && response.length !== 0) {
                            shiftToConsider = response.filter(function (shift_id, index) {
                                //if effective date is less than or greater than selected date range then ignore
                                if (new Date(dateRange[0]) <= new Date(shift_id.changed_from)
                                    && new Date(dateRange[1]) >= new Date(shift_id.changed_from)) {
                                    return shift_id;
                                }
                            });
                            if (shiftToConsider.length !== 0) {
                                var index_1 = 0;
                                var dayOne_1;
                                var dayTwo_1;
                                var _loop_1 = function () {
                                    //set inital date range for no of working days calculation
                                    if (index_1 === 0) {
                                        dayOne_1 = dateRange[0];
                                        dayTwo_1 = new Date(shiftToConsider[index_1].changed_from);
                                    }
                                    //create a data set to save in array for calculation
                                    var data = {
                                        shift_id: shiftToConsider[index_1] ? shiftToConsider[index_1].old_shift_id : empData.shift_id,
                                        emp_type: shiftToConsider[index_1] ? shiftToConsider[index_1].emp_type : empData.emp_type,
                                        workingDays: (index_1 === shiftToConsider.length) ? _this._common.calcBusinessDays(dayOne_1, dayTwo_1) : _this._common.calcBusinessDays(dayOne_1, dayTwo_1) - 1
                                    };
                                    //if employee is absent on any date then reduce working days
                                    if (employeeAbsent.length !== 0) {
                                        employeeAbsent.forEach(function (abs, index) {
                                            if (new Date(dayOne_1) <= new Date(abs.absent_date)
                                                && new Date(dayTwo_1) > new Date(abs.absent_date)) {
                                                data.workingDays = data.workingDays - 1;
                                                /** If display of absent dates are needed*/
                                                //absentDate = abs.absent_date.split('/')[0] + '/' + abs.absent_date.split('/')[1];
                                            }
                                            //if absent date is the last day of date range
                                            if (new Date(dayTwo_1) === new Date(abs.absent_date)
                                                && index === shiftToConsider.length) {
                                                data.workingDays = data.workingDays - 1;
                                                /** If display of absent dates are needed*/
                                                //absentDate = abs.absent_date.split('/')[0] +'/' + abs.absent_date.split('/')[1];
                                                //data.absentDays++;
                                            }
                                        });
                                    }
                                    //push data in an array for calculation
                                    shiftWithAllowance.push(data);
                                    //change the dates untill last counter
                                    if (index_1 < shiftToConsider.length) {
                                        dayOne_1 = new Date(shiftToConsider[index_1].changed_from);
                                        if (shiftToConsider[index_1 + 1] !== undefined) {
                                            dayTwo_1 = new Date(shiftToConsider[index_1 + 1].changed_from);
                                        }
                                        else {
                                            dayTwo_1 = dateRange[1];
                                        }
                                    }
                                    else { }
                                    //increament counter
                                    index_1++;
                                };
                                do {
                                    _loop_1();
                                } while (index_1 <= shiftToConsider.length); // end of do while loop
                            } // shift to consider length end
                        } // end of get roster response check
                        console.log('shiftToConsider :', shiftToConsider);
                        //if there a shift change in between then calculate the allowance amount
                        if (shiftWithAllowance.length !== 0) {
                            allowanceData.forEach(function (data, index) {
                                shiftWithAllowance.forEach(function (d, index) {
                                    if (d.shift_id === data.shift_id && d.emp_type === data.emp_type) {
                                        shiftWithAllowance[index].amount = data.amount;
                                        allowancePerShift = allowancePerShift === '' ? data.amount : allowancePerShift + ' and ' + data.amount;
                                        workingDaysInShift = workingDaysInShift === '' ? shiftWithAllowance[index].workingDays : workingDaysInShift + ' and ' + shiftWithAllowance[index].workingDays;
                                        totalWorkingDays = totalWorkingDays + shiftWithAllowance[index].workingDays;
                                        totalAllowance = totalAllowance + (shiftWithAllowance[index].workingDays * data.amount);
                                    }
                                });
                            });
                            //store individual working days and allowance for report pourpose
                        }
                        else {
                            //if there is no shift change then calculate the allowance amount
                            allowanceData.forEach(function (al, index) {
                                if (al.shift_id === empData.shift_id
                                    && al.emp_type === empData.emp_type) {
                                    allowanceAmount = al.amount;
                                }
                            });
                            totalAllowance = (noOfDays - absentDays) * allowanceAmount;
                        } //end of shift allowance object length check if and else
                        var emplWithAllowance = {
                            emp_id: emp._id,
                            emp_name: emp.name,
                            noOfDays: noOfDays,
                            absentDays: absentDays,
                            totalAllowance: totalAllowance,
                        };
                        console.log('shiftWithAllowance :', _this.shiftChanges);
                        console.log('employeeAbsent :', employeeAbsent);
                        //push all data in employeelist for display, this need to change once all the coloums in excel are defined
                        _this.shiftChanges = shiftWithAllowance;
                        if (workingDaysInShift !== '') {
                            _this.employeeList[index].daysInSifts = workingDaysInShift;
                        }
                        _this.employeeList[index].absentDays = absentDate === '' ? absentDays : absentDays + '(' + absentDate + ')';
                        _this.employeeList[index].noOfBusineesDays = workingDaysInShift === '' ? noOfDays : noOfDays + '(' + workingDaysInShift + ')';
                        _this.employeeList[index].allowancePerDay = allowanceAmount === 0 ? allowancePerShift : allowanceAmount;
                        _this.employeeList[index].totalAllowance = totalAllowance;
                        _this.loading = false;
                    }); //get roster service end
                }, function (error) {
                    if (error === 'Unauthorized' || error === 'Forbidden') {
                        _this._route.navigate(['/']);
                    }
                }); // get attendance service end
            }); //for Each employee iterator end
        }
        else {
            this.loading = false;
            this.noDateSelected = true;
        } //end of checking date range validation
    }; //end of function calculate
    CalculateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-calculate',
            template: __webpack_require__("./src/app/calculate/calculate.component.html"),
            styles: [__webpack_require__("./src/app/calculate/calculate.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__common_commonService__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__list_employee_list_employee_service__["a" /* ListEmployeeService */],
            __WEBPACK_IMPORTED_MODULE_4__employee_employee_service__["a" /* EmployeeService */],
            __WEBPACK_IMPORTED_MODULE_5__common_excel_service__["a" /* ExcelService */]])
    ], CalculateComponent);
    return CalculateComponent;
}()); //end of component



/***/ }),

/***/ "./src/app/common/commonService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__employee_employee_service__ = __webpack_require__("./src/app/employee/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CommonService = /** @class */ (function () {
    function CommonService(_http, _empService) {
        this._http = _http;
        this._empService = _empService;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl;
    }
    ;
    CommonService.prototype.setData = function (data) {
        this.data = data;
    };
    CommonService.prototype.getData = function () {
        return this.data;
    };
    CommonService.prototype.setToken = function (token) {
        this.token = token;
    };
    CommonService.prototype.getToken = function () {
        return this.token;
    };
    CommonService.prototype.setEmpId = function (id) {
        this.emp_id = id;
    };
    CommonService.prototype.getEmpId = function () {
        return this.emp_id;
    };
    CommonService.prototype.getShifts = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
        });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get('api/shifts', options)
            .map(function (res) { return res.json(); })
            .catch(this.HandleError);
    };
    CommonService.prototype.getManagers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
        });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get('api/getMangers', options)
            .map(function (res) { return res.json(); })
            .catch(this.HandleError);
    };
    CommonService.prototype.getAllAllowance = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
        });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get('api/allowance', options)
            .map(function (res) { return res.json(); })
            .catch(this.HandleError);
    };
    CommonService.prototype.loginCheck = function (loginInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post('api/login', loginInfo, options)
            .map(function (res) { return res.json(); })
            .catch(this.HandleError);
    };
    CommonService.prototype.convertDate = function (dateToConvert) {
        var today = new Date(dateToConvert);
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        // if (dd < 10) {
        //   dd = '0' + dd;
        // } 
        // if (mm < 10) {
        //   mm = '0' + mm;
        // } 
        return mm + '/' + dd + '/' + yyyy;
    };
    CommonService.prototype.calcBusinessDays = function (date1, date2) {
        var endDate = date2;
        var startDate = date1;
        //console.log(date1)
        //console.log(date2)
        if (endDate < startDate)
            return 0;
        // Calculate days between dates
        var millisecondsPerDay = 86400 * 1000; // Day in milliseconds
        startDate.setHours(0, 0, 0, 1); // Start just after midnight
        endDate.setHours(23, 59, 59, 999); // End just before midnight
        var diff = endDate - startDate; // Milliseconds between datetime objects    
        var days = Math.ceil(diff / millisecondsPerDay);
        // Subtract two weekend days for every week in between
        var weeks = Math.floor(days / 7);
        days = days - (weeks * 2);
        // Handle special cases
        var startDay = startDate.getDay();
        var endDay = endDate.getDay();
        // Remove weekend not previously removed.   
        if (startDay - endDay > 1)
            days = days - 2;
        // Remove start day if span starts on Sunday but ends before Saturday
        if (startDay == 0 && endDay != 6)
            days = days - 1;
        // Remove end day if span ends on Saturday but starts after Sunday
        if (endDay == 6 && startDay != 0)
            days = days - 1;
        return days; // add 1 because dates are inclusive
    };
    //calculate allowance
    CommonService.prototype.calculate = function (dateRange, employee, allAllowance) {
        var _this = this;
        var shiftToConsider;
        var totalWorkingDays = 0;
        var noOfDays = 0;
        var empData = employee;
        var employeeAbsent;
        var absentDays;
        var shiftWithAllowance = [];
        var allowanceData = allAllowance;
        var totalAllowance = 0;
        var allowanceAmount = 0;
        var isErrorInCalculation = false;
        console.log('empData : ', empData);
        console.log('allAllowance : ', allAllowance);
        if (dateRange !== undefined && dateRange !== null) {
            noOfDays = this.calcBusinessDays(dateRange[0], dateRange[1]); /** calculate no of days*/
            //get attendance
            this._empService.getAttendance(empData._id, dateRange)
                .subscribe(function (res) {
                employeeAbsent = res;
                absentDays = employeeAbsent.length;
                console.log('employeeAbsent :', employeeAbsent);
                //getting roster for shift change
                _this._empService.getRoster(empData._id)
                    .subscribe(function (response) {
                    console.log('roster shifts : ', response);
                    if (response && response.length !== 0) {
                        shiftToConsider = response.filter(function (shift_id, index) {
                            //if effective date is less than or greater than selected date range then ignore
                            if (new Date(dateRange[0]) <= new Date(shift_id.changed_from)
                                && new Date(dateRange[1]) >= new Date(shift_id.changed_from)) {
                                return shift_id;
                            }
                        });
                        if (shiftToConsider.length !== 0) {
                            var index = 0;
                            var dayOne_1;
                            var dayTwo_1;
                            var _loop_1 = function () {
                                //set inital date range for no of working days calculation
                                if (index === 0) {
                                    dayOne_1 = _this.convertDate(dateRange[0]);
                                    dayTwo_1 = _this.convertDate(shiftToConsider[index].changed_from);
                                }
                                //create a data set to save in array for calculation
                                var data = {
                                    shift_id: shiftToConsider[index - 1] ? shiftToConsider[index - 1].shift_id : empData.shift_id,
                                    emp_type: shiftToConsider[index - 1] ? shiftToConsider[index - 1].emp_type : empData.emp_type,
                                    workingDays: (index === shiftToConsider.length) ? _this.calcBusinessDays(dayOne_1, dayTwo_1) : _this.calcBusinessDays(dayOne_1, dayTwo_1) - 1
                                };
                                //if employee is absent on any date then reduce working days
                                if (employeeAbsent.length !== 0) {
                                    employeeAbsent.forEach(function (abs, index) {
                                        if (new Date(dayOne_1) <= new Date(abs.absent_date)
                                            && new Date(dayTwo_1) >= new Date(abs.absent_date)) {
                                            data.workingDays = data.workingDays - 1;
                                        }
                                    });
                                }
                                //push data in an array for calculation
                                shiftWithAllowance.push(data);
                                //change the dates untill last counter
                                if (index < shiftToConsider.length) {
                                    dayOne_1 = _this.convertDate(shiftToConsider[index].changed_from);
                                    if (shiftToConsider[index + 1] !== undefined) {
                                        dayTwo_1 = _this.convertDate(shiftToConsider[index + 1].changed_from);
                                    }
                                    else {
                                        dayTwo_1 = _this.convertDate(dateRange[1]);
                                    }
                                }
                                else { }
                                //increament counter
                                index++;
                            };
                            do {
                                _loop_1();
                            } while (index <= shiftToConsider.length);
                        }
                    }
                    console.log('shiftWithAllowance : ', shiftWithAllowance);
                    //if there a shift change in between
                    if (shiftWithAllowance.length !== 0) {
                        allowanceData.forEach(function (data, index) {
                            shiftWithAllowance.forEach(function (d, index) {
                                if (d.shift_id === data.shift_id && d.emp_type === data.emp_type) {
                                    shiftWithAllowance[index].amount = data.amount;
                                    totalWorkingDays = totalWorkingDays + shiftWithAllowance[index].workingDays;
                                    totalAllowance = totalAllowance + (shiftWithAllowance[index].workingDays * data.amount);
                                }
                            });
                        });
                    }
                    else {
                        //if there is no shift change
                        allowanceData.forEach(function (al, index) {
                            if (al.shift_id === empData.shift_id
                                && al.emp_type === empData.emp_type) {
                                allowanceAmount = al.amount;
                            }
                        });
                        totalAllowance = (noOfDays - absentDays) * allowanceAmount;
                    }
                    var returnData = {
                        noOfDays: noOfDays,
                        absentDays: absentDays,
                        totalAllowance: totalAllowance,
                    };
                    console.log('creating return data ', returnData);
                    return returnData;
                });
            });
        }
        else {
            return isErrorInCalculation = true;
        }
    };
    CommonService.prototype.HandleError = function (error) {
        if (error.status === 409) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw('Duplicate entry');
        }
        if (error.status === 403) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw('Forbidden');
        }
        if (error.status === 401) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw('Unauthorized');
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error || 'Server error');
        }
    };
    CommonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1__employee_employee_service__["a" /* EmployeeService */]])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/common/excel.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExcelService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_file_saver__ = __webpack_require__("./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_xlsx__ = __webpack_require__("./node_modules/xlsx/xlsx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_xlsx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
var EXCEL_EXTENSION = '.xlsx';
var ExcelService = /** @class */ (function () {
    function ExcelService() {
    }
    ExcelService.prototype.exportAsExcelFile = function (json, excelFileName) {
        var worksheet = __WEBPACK_IMPORTED_MODULE_2_xlsx__["utils"].json_to_sheet(json);
        var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        var excelBuffer = __WEBPACK_IMPORTED_MODULE_2_xlsx__["write"](workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    };
    ExcelService.prototype.saveAsExcelFile = function (buffer, fileName) {
        var data = new Blob([buffer], { type: EXCEL_TYPE });
        __WEBPACK_IMPORTED_MODULE_1_file_saver__["saveAs"](data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    };
    ExcelService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ExcelService);
    return ExcelService;
}());



/***/ }),

/***/ "./src/app/employee/employee.component.css":
/***/ (function(module, exports) {

module.exports = ".showDiv {\n\tborder: 1px solid black;\n}\n\n.remarks {\n\tmargin: 5px;\n\tpadding: 5px;\n}\n\nhr {\n  border: 1px solid green;\n  border-radius: 5px;\n}"

/***/ }),

/***/ "./src/app/employee/employee.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"contanier-fluid shadow p-3 mb-5 bg-white rounded\">\n\t<accordion>\n\t\t<accordion-group heading=\"Employee Information\" [isOpen]=\"true\">\n\t\t    <ul class=\"list-group list-group-horizontal\" *ngIf=\"isEmpDataAvaiable\">\n\t\t  \t\t<li class=\"list-group-item\">{{employee.address}}</li>\n\t\t  \t\t<li class=\"list-group-item\">{{employee.phone}}</li>\n\t\t  \t\t<li class=\"list-group-item\">{{employee.email}}</li>\n\t\t\t</ul>\n\t\t</accordion-group>\n\t\t<accordion-group heading=\"Change Shift\">\n\t\t\t<div class=\"col-xs-12 col-12 col-md-10 form-group form-inline\">\n\t\t\t\t<button type=\"button\" (click)=\"changeShift()\" \n\t\t      \t\tclass=\"btn btn-primary\">Change Shift</button>\n\t\t\t\t<span class=\"remarks\"></span>\n\t\t\t\t<input type=\"text\"\n\t\t\t\t        class=\"form-control\"\n\t\t\t\t        placeholder=\"**/**/****\" \n\t\t\t\t        [minDate]=\"minDate\"\n\t\t\t\t        [maxDate]=\"maxDate\"\n\t\t\t\t        [bsConfig]=\"bsConfig\"\n\t\t\t\t        bsDatepicker [(bsValue)]=\"shift_change_date\">\n\t\t\t\t<span class=\"remarks\"></span>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t    <label for=\"shifts\">Shifts</label>\n\t\t\t\t    <select class=\"form-control\"  [(ngModel)]=\"shiftChanged\" >\n\t\t\t\t      <option>Normal</option>\n\t\t\t\t      <option>Afternoon</option>\n\t\t\t\t      <option>Evening</option>\n\t\t\t\t    </select>\n\t\t\t\t</div>\n\t\t\t\t<span class=\"remarks\"></span>\n\t\t      \t<div>\n\t\t\t      \t<div *ngIf=\"shiftChangeError\" class=\"alert alert-danger\">\n\t\t\t\t       <strong>Already assigned same shift once on same day</strong>\n\t\t\t\t    </div>\n\t\t\t\t    <div *ngIf=\"changeShiftInWeekend\" class=\"alert alert-danger\">\n\t\t\t\t       <strong>Changing shift in weekend is not permitted</strong>\n\t\t\t\t    </div>\n\t\t\t\t    <div *ngIf=\"sameShift\" class=\"alert alert-danger\">\n\t\t\t\t       <strong>Already in same shift</strong>\n\t\t\t\t    </div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</accordion-group>\n\t\t<accordion-group heading=\"Mark Absent\">\n\t\t\t<div class=\"col-xs-12 col-12 col-md-10 form-group form-inline\">\n\t\t\t\t <button type=\"button\" (click)=\"markAbsent()\" \n\t\t      \t\tclass=\"btn btn-primary\">Mark Absent</button>\n\t\t\t\t<span class=\"remarks\"></span>\n\t\t    \t<input type=\"text\"\n\t\t\t        class=\"form-control\"\n\t\t\t        [minDate]=\"minDate\"\n\t\t\t        [maxDate]=\"maxDate\"\n\t\t\t        [bsConfig]=\"bsConfig\"\n\t\t\t        bsDatepicker [(bsValue)]=\"myDateValue\">\n\t\t\t    <span class=\"remarks\"></span>\n\t\t\t    <input type=\"text\" \n\t\t\t    class=\"form-control\" \n\t\t\t    [(ngModel)]=\"remarks\"\n\t\t\t    placeholder=\"Remarks\">\t\t\t   \n\t\t      \t<div *ngIf=\"errorMessage\" class=\"alert alert-danger\">\n\t\t\t       <strong>Already absent on this date</strong>\n\t\t\t    </div>\n\t\t\t    <div *ngIf=\"markAbsentInWeekend\" class=\"alert alert-danger\">\n\t\t\t       <strong>Marking absent in weekend not allowed</strong>\n\t\t\t    </div>\n\t\t    </div>\n\t\t</accordion-group>\n\t\t<accordion-group heading=\"Calculate Allowances\">\n\t\t    <div class=\"row\">\n\t\t    \t<div *ngIf=\"errorCal\" class=\"alert alert-danger\" role=\"alert\">\n\t\t\t\t  Select a date Range\n\t\t\t\t</div>\n\t\t\t    <div class=\"col-md-12 form-group form-inline\">\n\t\t\t    \t<button type=\"button\" (click)=\"calculate()\" \n  \t\t\t\t\t\tclass=\"btn btn-primary\">Calculate</button>\n  \t\t\t\t\t<span class=\"remarks\"></span>\n\t\t\t    \t<input type=\"text\"\n\t\t\t           placeholder=\"Daterangepicker\"\n\t\t\t           class=\"form-control\"\n\t\t\t           [minDate]=\"minDate\"\n\t\t\t           bsDaterangepicker\n\t\t\t           [bsConfig]=\"bsConfig\"\n\t\t\t           placement=\"right\"\n\t\t\t           [(bsValue)]=\"rangePicker\">\n\t\t\t    </div>\n\t\t\t\t<div class=\"col-xs-12 col-12 col-md-12 form-group\" *ngIf=\"noOfDays\">\n\t\t\t\t\t<table class=\"table table-bordered\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>#</th>\n\t\t\t\t\t\t\t\t<th>No Of Days</th>\n\t\t\t\t\t\t\t\t<th>No Of Absent Days</th>\n\t\t\t\t\t\t\t\t<th *ngIf=\"shiftWithAllowance.length == 0\">Allowance per day</th>\n\t\t\t\t\t\t\t\t<th>Allowance</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr *ngFor=\"let d of shiftWithAllowance; let i=index\">\n\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\n\t\t\t\t\t\t\t\t<td>{{d.workingDays}}</td>\n\t\t\t\t\t\t\t\t<td>{{d.absentDays}}</td>\n\t\t\t\t\t\t\t\t<td>{{d.amount}}</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t    <tr>\n\t\t\t\t\t\t      <th>Total</th>\n\t\t\t\t\t\t      <td>{{noOfDays}}</td>\n\t\t\t\t\t\t      <td>{{absentDays}}</td>\n\t\t\t\t\t\t      <td *ngIf=\"shiftWithAllowance.length == 0\">{{allowance_amount}}</td>\n\t\t\t\t\t\t      <td>{{totalAllowance}}</td>\n\t\t\t\t\t\t    </tr>\n\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"noCalculate\" class=\"alert alert-danger\">\n\t\t\t       <strong>No data found</strong>\n\t\t\t    </div>\n\t\t\t</div>\n\t\t</accordion-group>\n\t\t\n\t</accordion>\n</div>"

/***/ }),

/***/ "./src/app/employee/employee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_commonService__ = __webpack_require__("./src/app/common/commonService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__employee_service__ = __webpack_require__("./src/app/employee/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_employee_list_employee_service__ = __webpack_require__("./src/app/list-employee/list-employee.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(_common, _route, route, _list, _empService) {
        this._common = _common;
        this._route = _route;
        this.route = route;
        this._list = _list;
        this._empService = _empService;
        this.isEmpDataAvaiable = false;
        this.employeeAbsent = [];
        this.noOfDays = 0;
        this.totalAllowance = 0;
        this.errorCal = false;
        this.noCalculate = false;
        this.shiftWithAllowance = [];
        this.errorMessage = false;
        this.shiftChangeError = false;
        this.changeShiftInWeekend = false;
        this.markAbsentInWeekend = false;
        this.sameShift = false;
        this.colorTheme = 'theme-blue';
        this.allowance_amount = 0;
        this.bsConfig = Object.assign({}, { containerClass: this.colorTheme, showWeekNumbers: false });
        // if(this._common.getData() === undefined || this._common.getData() === null){
        // 	this._route.navigate(['list']);
        // }
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.emp_id = this.route.snapshot.paramMap.get('id');
        this.myDateValue = new Date();
        //this.employee = this._common.getData();
        //console.log('employee: ', this.employee);
        // this._empService.getShiftDetails(this.employee.shift_id)
        // 	.subscribe(response => {
        // 		this.shift = response[0];
        // });
        this._list.getEmployee(this.emp_id)
            .subscribe(function (response) {
            _this.employee = response;
            _this.minDate = new Date(_this.employee.join_date);
            _this.isEmpDataAvaiable = true;
        }, function (error) {
            if (error === 'Unauthorized' || error === 'Forbidden') {
                _this._route.navigate(['/']);
            }
        });
        this._common.getShifts() /** get all shift details*/
            .subscribe(function (response) {
            _this.shiftsDetails = response;
        }, function (error) {
            if (error === 'Unauthorized' || error === 'Forbidden') {
                _this._route.navigate(['/']);
            }
        });
        this._common.getAllAllowance()
            .subscribe(function (res) {
            _this.allowanceData = res;
        }, function (error) {
            if (error === 'Unauthorized' || error === 'Forbidden') {
                _this._route.navigate(['/']);
            }
        });
    };
    EmployeeComponent.prototype.markAbsent = function () {
        var _this = this;
        this.errorMessage = false;
        this.markAbsentInWeekend = false;
        this.absentOn = this.myDateValue;
        this.employee.absent_date = this._common.convertDate(this.absentOn);
        this.employee.remarks = this.remarks;
        if (this.myDateValue.getDay() !== 0 && this.myDateValue.getDay() !== 6) {
            this._empService.makeAbsent(this.employee)
                .subscribe(function (response) {
                var emp_id = JSON.parse(localStorage.getItem('emp_id'));
                _this._route.navigate(['/list', emp_id]);
            }, function (error) {
                _this.errorMessage = true;
            });
        }
        else {
            this.markAbsentInWeekend = true;
        }
    };
    EmployeeComponent.prototype.changeShift = function () {
        var _this = this;
        /** If no date is seleted or no shift selected then don't do anything*/
        if (this.shift_change_date !== undefined && this.shiftChanged !== undefined) {
            this.shiftChangeError = false;
            this.changeShiftInWeekend = false;
            this.sameShift = false;
            var user = this.employee;
            var shift = void 0;
            if (this.shift_change_date.getDay() > 0 && this.shift_change_date.getDay() < 6) {
                shift = this.shiftsDetails.filter(function (s, index) {
                    if (s.name === _this.shiftChanged) {
                        return s._id;
                    }
                });
                if (this.employee.shift_id === shift[0]._id) {
                    this.sameShift = true;
                }
                else {
                    this.sameShift = false;
                    var rosterShift = {
                        emp_id: user._id,
                        emp_type: user.emp_type,
                        old_shift_id: user.shift_id,
                        shift_name: user.shift,
                        changed_from: this._common.convertDate(this.shift_change_date)
                    };
                    this.employee.shift_id = shift[0]._id;
                    this.employee.shift = shift[0].name;
                    this._empService.putRosterShifts(rosterShift) /** add new entry in rosterShift collection*/
                        .subscribe(function (response) {
                        _this._empService.changeEmployeeDetails(_this.employee) /** Change shift id of employee with new shift id*/
                            .subscribe(function (res) {
                            var emp_id = JSON.parse(localStorage.getItem('emp_id'));
                            _this._route.navigate(['/list', emp_id]);
                        });
                    }, function (error) {
                        _this.shiftChangeError = true;
                    });
                }
            }
            else {
                this.changeShiftInWeekend = true;
            }
        }
    };
    EmployeeComponent.prototype.calculate = function () {
        var _this = this;
        //console.log('employee current shift: ', this.employee);
        this.noCalculate = false;
        this.totalAllowance = 0;
        this.shiftWithAllowance.length = 0;
        var shiftToConsider;
        var totalWorkingDays = 0;
        var dateRange = this.rangePicker;
        var self = this;
        if (dateRange !== undefined && dateRange !== null) {
            this.errorCal = false;
            this.noOfDays = this._common.calcBusinessDays(dateRange[0], dateRange[1]); /** calculate no of days*/
            //get attendance
            this._empService.getAttendance(this.employee._id, dateRange)
                .subscribe(function (res) {
                _this.employeeAbsent = res;
                _this.absentDays = _this.employeeAbsent.length;
                //getting roster for shift change
                _this._empService.getRoster(_this.employee._id)
                    .subscribe(function (response) {
                    if (response && response.length !== 0) {
                        shiftToConsider = response.filter(function (shift_id, index) {
                            //if effective date is less than or greater than selected date range then ignore
                            if (new Date(dateRange[0]) <= new Date(shift_id.changed_from)
                                && new Date(dateRange[1]) >= new Date(shift_id.changed_from)) {
                                return shift_id;
                            }
                        });
                        if (shiftToConsider.length !== 0) {
                            var index = 0;
                            var dayOne_1;
                            var dayTwo_1;
                            var _loop_1 = function () {
                                //set inital date range for no of working days calculation
                                if (index === 0) {
                                    dayOne_1 = dateRange[0];
                                    dayTwo_1 = new Date(shiftToConsider[index].changed_from);
                                }
                                //create a data set to save in array for calculation
                                var data = {
                                    absentDays: 0,
                                    shift_id: shiftToConsider[index] ? shiftToConsider[index].old_shift_id : _this.employee.shift_id,
                                    emp_type: shiftToConsider[index] ? shiftToConsider[index].emp_type : _this.employee.emp_type,
                                    workingDays: (index === shiftToConsider.length) ? _this._common.calcBusinessDays(dayOne_1, dayTwo_1) : (_this._common.calcBusinessDays(dayOne_1, dayTwo_1) - 1)
                                };
                                //if employee is absent on any date then reduce working days
                                if (_this.employeeAbsent.length !== 0) {
                                    _this.employeeAbsent.forEach(function (abs, index) {
                                        //if absent date is less than or equal to start date and less than end date of range
                                        if (new Date(dayOne_1) <= new Date(abs.absent_date)
                                            && new Date(dayTwo_1) > new Date(abs.absent_date)) {
                                            //data.workingDays = data.workingDays - 1;
                                            data.absentDays++;
                                        }
                                        //if absent date is the last day of date range
                                        if (new Date(dayTwo_1) === new Date(abs.absent_date)
                                            && index === shiftToConsider.length) {
                                            //data.workingDays = data.workingDays - 1;
                                            data.absentDays++;
                                        }
                                    });
                                }
                                //push data in an array for calculation
                                _this.shiftWithAllowance.push(data);
                                //change the dates untill last counter
                                if (index < shiftToConsider.length) {
                                    dayOne_1 = new Date(shiftToConsider[index].changed_from);
                                    if (shiftToConsider[index + 1] !== undefined) {
                                        dayTwo_1 = new Date(shiftToConsider[index + 1].changed_from);
                                    }
                                    else {
                                        dayTwo_1 = dateRange[1];
                                    }
                                }
                                else { }
                                //increament counter
                                index++;
                            };
                            do {
                                _loop_1();
                            } while (index <= shiftToConsider.length);
                        } // shift to consider length check ends here
                        console.log('shiftToConsider :', shiftToConsider);
                    } // get roster response length check end
                    /**if there a shift change in between */
                    if (_this.shiftWithAllowance.length !== 0) {
                        _this.allowanceData.forEach(function (data, index) {
                            _this.shiftWithAllowance.forEach(function (d, index) {
                                if (d.shift_id === data.shift_id && d.emp_type === data.emp_type) {
                                    _this.shiftWithAllowance[index].amount = data.amount;
                                    totalWorkingDays = totalWorkingDays + _this.shiftWithAllowance[index].workingDays;
                                    _this.totalAllowance = _this.totalAllowance +
                                        ((_this.shiftWithAllowance[index].workingDays - _this.shiftWithAllowance[index].absentDays) * data.amount);
                                    console.log(_this.totalAllowance, 'allowance');
                                }
                            });
                        });
                    }
                    else {
                        //if there is no shift change
                        _this.allowanceData.forEach(function (al, index) {
                            if (al.shift_id === _this.employee.shift_id
                                && al.emp_type === _this.employee.emp_type) {
                                _this.allowanceAmount = al.amount;
                                _this.employee.allowance_amount = al.amount;
                                _this.allowance_amount = al.amount;
                            }
                        });
                        console.log(_this.noOfDays, 'no of days ');
                        _this.totalAllowance = (_this.noOfDays - _this.absentDays) * _this.allowanceAmount;
                    } // shift allowance object length check ends here
                    console.log('this.employeeAbsent : ', _this.employeeAbsent);
                    console.log('shiftWithAllowance : ', _this.shiftWithAllowance);
                }); // get roster service call ends
            }); //get attendance service call ends
        }
        else {
            this.errorCal = true;
        } // end of date range check
    }; // end of calculate function
    EmployeeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__("./src/app/employee/employee.component.html"),
            styles: [__webpack_require__("./src/app/employee/employee.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__common_commonService__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__list_employee_list_employee_service__["a" /* ListEmployeeService */],
            __WEBPACK_IMPORTED_MODULE_3__employee_service__["a" /* EmployeeService */]])
    ], EmployeeComponent);
    return EmployeeComponent;
}()); // end of component



/***/ }),

/***/ "./src/app/employee/employee.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeeService = /** @class */ (function () {
    function EmployeeService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    EmployeeService.prototype.convertDate = function (dateToConvert) {
        var today = new Date(dateToConvert);
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        // if (dd < 10) {
        //   dd = '0' + dd;
        // } 
        // if (mm < 10) {
        //   mm = '0' + mm;
        // } 
        return mm + '/' + dd + '/' + yyyy;
    };
    EmployeeService.prototype.makeAbsent = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.put('api/attendance/' + data._id, data, options)
            .map(function (res) { return res.json(); })
            .catch(this.HandleError);
    };
    EmployeeService.prototype.getShiftDetails = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get("api/shift/" + id, options)
            .map(function (res) { return res.json(); })
            .catch(this.HandleError);
    };
    EmployeeService.prototype.getAttendance = function (_id, dateRange) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var startDate = this.convertDate(dateRange[0]);
        var endDate = this.convertDate(dateRange[1]);
        return this._http.get(this.baseUrl + ("api/absentDate/" + _id + "?startDate=" + startDate + "&endDate=" + endDate), options)
            .map(function (res) { return res.json(); })
            .catch(this.HandleError);
    };
    EmployeeService.prototype.getAllowance = function (employee) {
        var emp = employee;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get(this.baseUrl + ("api/allowance/" + emp.shift_id + "?emp_type=" + emp.emp_type), options)
            .map(function (res) { return res.json(); })
            .catch(this.HandleError);
    };
    EmployeeService.prototype.putRosterShifts = function (rosterData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post(this.baseUrl + "api/rosterShifts", rosterData, options)
            .map(function (res) { return res.json(); })
            .catch(this.HandleError);
    };
    EmployeeService.prototype.getRoster = function (_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get(this.baseUrl + ("api/rosterShift/" + _id), options)
            .map(function (res) { return res.json(); })
            .catch(this.HandleError);
    };
    EmployeeService.prototype.changeEmployeeDetails = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var _id = data._id;
        return this._http.put(this.baseUrl + ("api/employee/" + _id), data, options)
            .map(function (res) { return res.json(); })
            .catch(this.HandleError);
    };
    EmployeeService.prototype.HandleError = function (error) {
        if (error.status === 409) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw('Duplicate entry');
        }
        if (error.status === 403) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw('Forbidden');
        }
        if (error.status === 401) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw('Unauthorized');
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error || 'Server error');
        }
    };
    EmployeeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".header {\n\tbackground-color: #00b7ef;\n\theight: 60px;\n}\n.home {\n\twidth: 60px;\n\theight: 35px;\n}\n.logout{\n\twidth: 35px;\n\theight: 33px;\t\n}\n.heading{\n\tmargin-top: 10px;\n\tfont-family : \"Karla\", Sans-serif;\n\tfont-weight: 600;\n\tcolor: white;\n\tfont-size: 28px;\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"header\" class=\"header\"> <!-- <i class=\"fas fa-home\"></i> -->\n\t<div class=\"row\">\n\t\t<div class=\"col-md-1 \">\n\t\t\t<button (click)=\"home()\" class=\"btn btn-primary-outline\">\n\t\t\t\t<img src=\"./assets/home.png\" class=\"home\" alt=\"\">\n\t\t\t</button>\n\t\t</div>\n    \t<div class=\"col-md-10 center\">\n    \t\t<h4 align=\"center\" class=\"heading\">{{ title }}</h4>\n    \t</div>\n    \t<div class=\"col-md-1\">\n    \t\t<button type=\"button\" class=\"btn btn-primary-outline\" (click)=\"logout()\">\n    \t\t\t<img src=\"./assets/logout.png\" class=\"logout\" alt=\"\">\n    \t\t</button>\n    \t</div>\n\t</div>\n</header>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_commonService__ = __webpack_require__("./src/app/common/commonService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_route, _common) {
        this._route = _route;
        this._common = _common;
        this.title = 'Shift Calculator';
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.home = function () {
        this.emp_id = JSON.parse(localStorage.getItem('emp_id'));
        this._route.navigate(['/list', this.emp_id]);
    };
    HeaderComponent.prototype.logout = function () {
        localStorage.removeItem('emp_id');
        localStorage.removeItem('token');
        this._route.navigate(['']);
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__common_commonService__["a" /* CommonService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/list-employee/list-employee.component.css":
/***/ (function(module, exports) {

module.exports = ".showDiv {\n\tborder: 1px solid black;\n}\n.profile {\n\tmargin-left: 2px;\n}\n.profile_image {\n\tpadding: 2px;\n}\n.cal {\n\tfloat: right;\n}\nthead>tr>th {\n    cursor: pointer;\n}\n.has-search .form-control {\n    padding-left: 2.375rem;\n}\n.has-search .form-control-feedback {\n    position: absolute;\n    z-index: 2;\n    display: block;\n    width: 2.375rem;\n    height: 2.375rem;\n    line-height: 2.375rem;\n    text-align: center;\n    pointer-events: none;\n    color: #aaa;\n}\nhr {\n  border: .5px solid blue;\n  border-radius: 1px;\n  width: 100%;\n}\n/*ul > li {\n  border-bottom: 1px black solid;\n  padding-top: 12px;\n  width: 100%%;\n}*/\n/*\n.navbar-nav > li {\n  float: left;\n  position: relative;\n}\n.navbar-light .navbar-nav .active a::after {\n  border-bottom: 5px solid #5bc0eb;\n  bottom: -10px;\n  content: \" \";\n  left: 0;\n  position: absolute;\n  right: 0;\n}*/"

/***/ }),

/***/ "./src/app/list-employee/list-employee.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"contanier-fluid shadow p-3 mb-5 bg-white rounded\">\n\t<button class=\"btn btn-primary\" disabled *ngIf=\"loading\">\n\t\t<span class=\"spinner-border spinner-border-sm\"></span>\n\t\tLoading..\n\t</button>\n\t<div class=\"row\" *ngIf=\"!loading\">\n\t\t<div class=\"col-md-3\">\n\t\t\t<div class=\"card profile\">\n\t\t\t  <!-- <img src=\"./assets/profile.jpg\" class=\"card-img-top profile_image\" alt=\"...\"> -->\n\t\t\t  <div class=\"card-body\" *ngIf=\"isEmployeeDisplayed\">\n\t\t\t    <p class=\"card-text\">Hello {{thisEmployeeData.name}}</p>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<nav>\n\t\t\t  <!-- Links -->\n\t\t\t  <ul class=\"list-group list-group-flush\">\n\t\t\t    <li class=\"list-group-item list-group-item-action\">\n\t\t\t      <button class=\"btn btn-primary-outline\" (click)=\"addemployee()\">Add New Employee</button>\n\t\t\t    </li>\n\t\t\t    <li class=\"list-group-item list-group-item-action\" *ngIf=\"showAddUsers\">\n\t\t\t      <button class=\"btn btn-primary-outline\" (click)=\"addUser()\">Add New Manager/Supervisor</button>\n\t\t\t    </li>\n\t\t\t    <li class=\"list-group-item list-group-item-action\">\n\t\t\t      <button class=\"btn btn-primary-outline\" (click)=\"calulateAll()\">Calculate For All</button>\n\t\t\t    </li>\n\t\t\t  </ul>\n\t\t\t</nav>\n\t\t</div>\n\t\t<div class=\"col-md-9\">\n\t\t\t<div class=\"table-responsive\">\n\t\t\t\t<div *ngIf=\"noUser\" class=\"alert alert-danger\">\n\t\t\t        <strong>No Employee listed</strong>\n\t\t\t    </div>\n\t\t\t    <div *ngIf=\"serverError\" class=\"alert alert-danger\">\n\t\t\t        <strong>Server Error</strong>\n\t\t\t    </div>\n\t\t\t    <div *ngIf=\"isEmployeeDisplayed\">\n\t\t\t\t<div class=\"form-group has-search\">\n\t\t\t\t    <span class=\"fa fa-search form-control-feedback\"></span>\n\t\t\t\t    <input type=\"text\" class=\"form-control\" placeholder=\"Search\" name=\"search\" [(ngModel)]=\"filter\">\n\t\t\t\t</div>\n\t\t\t    <table class=\"table table-striped\">\n\t\t\t\t    <thead>\n\t\t\t\t        <tr>\n\t\t\t\t        \t<th>#</th>\n\t\t\t\t          <th (click)=\"sort('name')\">Name\n\t\t\t\t          \t<span *ngIf=\"key =='name'\" [ngClass]=\"[reverse ? 'fas fa-angle-double-down' : 'fas fa-angle-double-up']\"></span>\n\t\t\t\t          </th>\n\t\t\t\t        </tr>\n\t\t\t\t    </thead>\n\t\t\t\t    <tbody>\n\t\t\t\t    \t<tr *ngFor=\"let l of finalList| orderBy: key : reverse| filter:filter| paginate: { itemsPerPage: 10, currentPage: p }; let i = index\">\n\t\t\t\t    \t\t<td>{{i+1}}</td>\n\t\t\t\t    \t\t<td (click)=\"goToUser(l._id)\">{{l.name}}</td>\n\t\t\t\t    \t</tr>\n\t\t\t\t    </tbody>\n\t\t\t\t</table>\n\t\t\t\t<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- <div class=\"col-md-2 showDiv\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"addemployee()\">Add New Individual Employee</button>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\" *ngIf=\"showAddUsers\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-light\" (click)=\"addUser()\">Add New Manager/Supervisor</button>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"calulateAll()\">Calculate For All</button>\n\t\t\t</div>\n\t\t</div> -->\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/list-employee/list-employee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListEmployeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_employee_service__ = __webpack_require__("./src/app/list-employee/list-employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_commonService__ = __webpack_require__("./src/app/common/commonService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListEmployeeComponent = /** @class */ (function () {
    function ListEmployeeComponent(router, route, _list, _common) {
        this.router = router;
        this.route = route;
        this._list = _list;
        this._common = _common;
        this.list = [];
        this.finalList = [];
        this.showCal = false;
        this.showAddUsers = false;
        this.isEmployeeDisplayed = false;
        this.loading = true;
        this.noUser = false;
        this.serverError = false;
        //sorting
        this.key = 'name'; //set default
        this.reverse = false;
        //initializing p to one
        this.p = 1;
    }
    ListEmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showAddUsers = false;
        this.isEmployeeDisplayed = false;
        this.loading = true;
        this.serverError = false;
        this.finalList.length = 0;
        this.emp_id = this.route.snapshot.paramMap.get('id');
        this._common.setEmpId(this.emp_id);
        this._list.getEmployee(this.emp_id)
            .subscribe(function (response) {
            if (response && response.length !== 0) {
                _this.thisEmployeeData = response;
                _this.isEmployeeDisplayed = true;
                _this.loading = false;
                _this.noUser = false;
                if (_this.thisEmployeeData.emp_type === 'Manager') {
                    _this.showAddUsers = true;
                }
            }
            else {
                _this.loading = false;
                _this.noUser = true;
            }
        }, function (error) {
            if (error === 'Unauthorized' || error === 'Forbidden') {
                _this.router.navigate(['/']);
            }
            else {
                _this.serverError = true;
            }
        });
        this._list.getList(this.emp_id)
            .subscribe(function (response) {
            if (response && response.length !== 0) {
                _this.loading = true;
                _this.list = response;
                _this.list.map(function (item, index) {
                    _this.finalList.push(item);
                    _this._list.getList(item._id)
                        .subscribe(function (res) {
                        if (res && res.length !== 0) {
                            res.map(function (emp, index) {
                                _this.finalList.push(emp);
                            });
                        }
                    });
                });
                _this.loading = false;
            }
            else {
                _this.loading = false;
                _this.noUser = true;
            }
        }, function (error) {
            if (error === 'Unauthorized' || error === 'Forbidden') {
                _this.router.navigate(['/']);
            }
        });
        //console.log(this.finalList)
    };
    ListEmployeeComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    ListEmployeeComponent.prototype.goToUser = function (_id) {
        this.router.navigate(['/employee', _id]);
    };
    ListEmployeeComponent.prototype.calculate = function (employee) {
        var _this = this;
        this.showCal = true;
        this.loading = true;
        this._list.getAttendance(employee.id)
            .subscribe(function (response) {
            _this.loading = false;
            _this.attendanceData = response;
            _this._common.setData(response);
            _this.router.navigate(['calculate']);
        }, function (error) {
            if (error === 'Unauthorized' || error === 'Forbidden') {
                _this.router.navigate(['/']);
            }
        });
        //console.log(employee);
    };
    ListEmployeeComponent.prototype.calulateAll = function () {
        //console.log(this.list);
        this._common.setData(this.finalList);
        this.router.navigate(['calculate']);
    };
    ListEmployeeComponent.prototype.addUser = function () {
        this.router.navigate(['/addloginuser', this.thisEmployeeData._id]);
    };
    ListEmployeeComponent.prototype.addemployee = function () {
        this.router.navigate(['/adduser', this.thisEmployeeData._id]);
    };
    ListEmployeeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-list-employee',
            template: __webpack_require__("./src/app/list-employee/list-employee.component.html"),
            styles: [__webpack_require__("./src/app/list-employee/list-employee.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__list_employee_service__["a" /* ListEmployeeService */],
            __WEBPACK_IMPORTED_MODULE_3__common_commonService__["a" /* CommonService */]])
    ], ListEmployeeComponent);
    return ListEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/list-employee/list-employee.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListEmployeeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListEmployeeService = /** @class */ (function () {
    function ListEmployeeService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl;
    }
    ListEmployeeService.prototype.getList = function (manager_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get("api/employeeList/" + manager_id, options)
            .map(function (res) { return res.json(); })
            .catch(this.HandleError);
    };
    ListEmployeeService.prototype.getEmployee = function (_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get("api/employee/" + _id, options)
            .map(function (res) { return res.json(); })
            .catch(this.HandleError);
    };
    ListEmployeeService.prototype.getAttendance = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get("api/calculate/" + id, options)
            .map(function (res) { return res.json(); })
            .catch(this.HandleError);
    };
    ListEmployeeService.prototype.HandleError = function (error) {
        if (error.status === 409) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw('Duplicate entry');
        }
        if (error.status === 403) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw('Forbidden');
        }
        if (error.status === 401) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw('Unauthorized');
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error || 'Server error');
        }
    };
    ListEmployeeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ListEmployeeService);
    return ListEmployeeService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".content {\n\tborder : 1px solid black;\n\tborder-radius: 15px;\n\twidth : 350px;\n\theight: 300px;\n}\n.popup__overlay {\n    position: fixed;\n    left:  0;\n    top:  0;\n    width: 100%;\n    height: 100%;\n    z-index: 999;\n    text-align: center;\n    border: 1px solid black;\n    }\n.popup {\n\tmargin-top: 15%;\n    display: inline-block;\n    vertical-align: middle;\n    }\n.login {\n\t\n\theight: 100px;\n\tmargin-top: 25px;\n}\n.user {\n\t\n}\n.logo{\n    border-radius: 15px;\n    width : 350px;\n    height: 50px;\n}\n.logoPopup {\n    margin-top: 12%;\n    margin-left: 38%;\n    display: inline-block;\n    vertical-align: middle;\n}\np{\n    font-family: \"Lucida Console\", Monaco, monospace;\n     font-size: 28px;\n     text-align: center;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"logoPopup logo\">\n    <p>Shift Calculator</p>\n  </div>\n\n<div class=\"popup__overlay\">\n  <div class=\"popup content shadow p-3 mb-5 bg-white rounded\">\n    <div class=\"login\">\n      <h1>Login</h1>\n    </div>\n    <div class=\"user\" (keydown.enter)=\"login()\">\n      <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\" id=\"basic-addon1\">Username</span>\n        </div>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" placeholder=\"Username\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\n      </div>\n      <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\" id=\"basic-addon1\">Password</span>\n        </div>\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\" aria-label=\"Password\" aria-describedby=\"basic-addon1\">\n      </div>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"login()\">Submit</button>\n    </div>\n    <button class=\"btn btn-primary\" disabled *ngIf=\"loading\">\n      <span class=\"spinner-border spinner-border-sm\"></span>\n      Loading..\n    </button>\n    <div *ngIf=\"error\" class=\"alert alert-danger\">\n      <strong>Wrong Username/Password</strong>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_commonService__ = __webpack_require__("./src/app/common/commonService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(_router, _common) {
        this._router = _router;
        this._common = _common;
        this.error = false;
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.error = false;
        var loginBody = {
            username: this.username,
            password: this.password
        };
        this._common.loginCheck(loginBody)
            .subscribe(function (response) {
            _this._common.setToken(response.token);
            localStorage.setItem('token', JSON.stringify(response.token));
            localStorage.setItem('emp_id', JSON.stringify(response.emp_id));
            _this.loading = false;
            _this._router.navigate(['/list', response.emp_id]);
        }, function (error) {
            if (error === 'Unauthorized') {
                _this.error = true;
                _this.loading = false;
                setTimeout(function () {
                    _this.error = false;
                }, 10000);
            }
            else {
                console.log(error);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__common_commonService__["a" /* CommonService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    //baseUrl : 'http://localhost:8080/',
    baseUrl: 'https://shiftcalcserver.herokuapp.com/'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map