import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class MyDemoLibService {
    constructor() { }
}
MyDemoLibService.ɵfac = function MyDemoLibService_Factory(t) { return new (t || MyDemoLibService)(); };
MyDemoLibService.ɵprov = i0.ɵɵdefineInjectable({ token: MyDemoLibService, factory: MyDemoLibService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MyDemoLibService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class CounterDemoComponent {
    constructor() {
        this.counter = 0;
    }
    ngOnInit() {
    }
    onPlusBtnClick() {
        this.counter = this.counter + 1;
    }
    onMinusBtnClick() {
        this.counter = this.counter - 1;
    }
}
CounterDemoComponent.ɵfac = function CounterDemoComponent_Factory(t) { return new (t || CounterDemoComponent)(); };
CounterDemoComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CounterDemoComponent, selectors: [["lib-counter-demo"]], decls: 6, vars: 1, consts: [[3, "click"]], template: function CounterDemoComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function CounterDemoComponent_Template_button_click_0_listener() { return ctx.onPlusBtnClick(); });
        i0.ɵɵtext(1, " + ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "label");
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "button", 0);
        i0.ɵɵlistener("click", function CounterDemoComponent_Template_button_click_4_listener() { return ctx.onMinusBtnClick(); });
        i0.ɵɵtext(5, "\u200A-\u200A");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", ctx.counter, " ");
    } }, styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CounterDemoComponent, [{
        type: Component,
        args: [{
                selector: 'lib-counter-demo',
                templateUrl: './counter-demo.component.html',
                styleUrls: ['./counter-demo.component.scss']
            }]
    }], function () { return []; }, null); })();

class MyDemoLibComponent {
    constructor() { }
    ngOnInit() {
    }
}
MyDemoLibComponent.ɵfac = function MyDemoLibComponent_Factory(t) { return new (t || MyDemoLibComponent)(); };
MyDemoLibComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MyDemoLibComponent, selectors: [["lib-my-demo-lib"]], decls: 1, vars: 0, template: function MyDemoLibComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "lib-counter-demo");
    } }, directives: [CounterDemoComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MyDemoLibComponent, [{
        type: Component,
        args: [{
                selector: 'lib-my-demo-lib',
                template: `

      <lib-counter-demo></lib-counter-demo>

  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class MyDemoLibModule {
}
MyDemoLibModule.ɵmod = i0.ɵɵdefineNgModule({ type: MyDemoLibModule });
MyDemoLibModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MyDemoLibModule_Factory(t) { return new (t || MyDemoLibModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MyDemoLibModule, { declarations: [MyDemoLibComponent, CounterDemoComponent], exports: [MyDemoLibComponent, CounterDemoComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MyDemoLibModule, [{
        type: NgModule,
        args: [{
                declarations: [MyDemoLibComponent, CounterDemoComponent],
                imports: [],
                exports: [MyDemoLibComponent, CounterDemoComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of my-demo-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CounterDemoComponent, MyDemoLibComponent, MyDemoLibModule, MyDemoLibService };
//# sourceMappingURL=my-demo-lib.js.map
