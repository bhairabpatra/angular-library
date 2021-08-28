(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('my-demo-lib', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['my-demo-lib'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var MyDemoLibService = /** @class */ (function () {
        function MyDemoLibService() {
        }
        return MyDemoLibService;
    }());
    MyDemoLibService.ɵfac = function MyDemoLibService_Factory(t) { return new (t || MyDemoLibService)(); };
    MyDemoLibService.ɵprov = i0__namespace.ɵɵdefineInjectable({ token: MyDemoLibService, factory: MyDemoLibService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0__namespace.ɵsetClassMetadata(MyDemoLibService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var CounterDemoComponent = /** @class */ (function () {
        function CounterDemoComponent() {
            this.counter = 0;
        }
        CounterDemoComponent.prototype.ngOnInit = function () {
        };
        CounterDemoComponent.prototype.onPlusBtnClick = function () {
            this.counter = this.counter + 1;
        };
        CounterDemoComponent.prototype.onMinusBtnClick = function () {
            this.counter = this.counter - 1;
        };
        return CounterDemoComponent;
    }());
    CounterDemoComponent.ɵfac = function CounterDemoComponent_Factory(t) { return new (t || CounterDemoComponent)(); };
    CounterDemoComponent.ɵcmp = i0__namespace.ɵɵdefineComponent({ type: CounterDemoComponent, selectors: [["lib-counter-demo"]], decls: 6, vars: 1, consts: [[3, "click"]], template: function CounterDemoComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵlistener("click", function CounterDemoComponent_Template_button_click_0_listener() { return ctx.onPlusBtnClick(); });
                i0__namespace.ɵɵtext(1, " + ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(2, "label");
                i0__namespace.ɵɵtext(3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "button", 0);
                i0__namespace.ɵɵlistener("click", function CounterDemoComponent_Template_button_click_4_listener() { return ctx.onMinusBtnClick(); });
                i0__namespace.ɵɵtext(5, "\u200A-\u200A");
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵtextInterpolate1(" ", ctx.counter, " ");
            }
        }, styles: [""] });
    /*@__PURE__*/ (function () {
        i0__namespace.ɵsetClassMetadata(CounterDemoComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-counter-demo',
                        templateUrl: './counter-demo.component.html',
                        styleUrls: ['./counter-demo.component.scss']
                    }]
            }], function () { return []; }, null);
    })();

    var MyDemoLibComponent = /** @class */ (function () {
        function MyDemoLibComponent() {
        }
        MyDemoLibComponent.prototype.ngOnInit = function () {
        };
        return MyDemoLibComponent;
    }());
    MyDemoLibComponent.ɵfac = function MyDemoLibComponent_Factory(t) { return new (t || MyDemoLibComponent)(); };
    MyDemoLibComponent.ɵcmp = i0__namespace.ɵɵdefineComponent({ type: MyDemoLibComponent, selectors: [["lib-my-demo-lib"]], decls: 1, vars: 0, template: function MyDemoLibComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "lib-counter-demo");
            }
        }, directives: [CounterDemoComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0__namespace.ɵsetClassMetadata(MyDemoLibComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-my-demo-lib',
                        template: "\n\n      <lib-counter-demo></lib-counter-demo>\n\n  ",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    var MyDemoLibModule = /** @class */ (function () {
        function MyDemoLibModule() {
        }
        return MyDemoLibModule;
    }());
    MyDemoLibModule.ɵmod = i0__namespace.ɵɵdefineNgModule({ type: MyDemoLibModule });
    MyDemoLibModule.ɵinj = i0__namespace.ɵɵdefineInjector({ factory: function MyDemoLibModule_Factory(t) { return new (t || MyDemoLibModule)(); }, imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(MyDemoLibModule, { declarations: [MyDemoLibComponent, CounterDemoComponent], exports: [MyDemoLibComponent, CounterDemoComponent] }); })();
    /*@__PURE__*/ (function () {
        i0__namespace.ɵsetClassMetadata(MyDemoLibModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [MyDemoLibComponent, CounterDemoComponent],
                        imports: [],
                        exports: [MyDemoLibComponent, CounterDemoComponent]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of my-demo-lib
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CounterDemoComponent = CounterDemoComponent;
    exports.MyDemoLibComponent = MyDemoLibComponent;
    exports.MyDemoLibModule = MyDemoLibModule;
    exports.MyDemoLibService = MyDemoLibService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=my-demo-lib.umd.js.map
