import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class CounterDemoComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRlci1kZW1vLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL215LWRlbW8tbGliL3NyYy9saWIvY291bnRlci1kZW1vL2NvdW50ZXItZGVtby5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9teS1kZW1vLWxpYi9zcmMvbGliL2NvdW50ZXItZGVtby9jb3VudGVyLWRlbW8uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7QUFPbEQsTUFBTSxPQUFPLG9CQUFvQjtJQUcvQjtRQURBLFlBQU8sR0FBVSxDQUFDLENBQUM7SUFDSCxDQUFDO0lBRWpCLFFBQVE7SUFFUixDQUFDO0lBQ0QsY0FBYztRQUNaLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNELGVBQWU7UUFDYixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7O3dGQWJRLG9CQUFvQjt5REFBcEIsb0JBQW9CO1FDUGpDLGlDQUFvQztRQUE1QixpR0FBUyxvQkFBZ0IsSUFBQztRQUFFLG1CQUFFO1FBQUEsaUJBQVM7UUFDL0MsNkJBQVE7UUFBQSxZQUFZO1FBQUEsaUJBQVE7UUFDNUIsaUNBQW9DO1FBQTVCLGlHQUFTLHFCQUFpQixJQUFDO1FBQUMsNkJBQUc7UUFBQSxpQkFBUzs7UUFEeEMsZUFBWTtRQUFaLDRDQUFZOztrRERNUCxvQkFBb0I7Y0FMaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2FBQzdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWNvdW50ZXItZGVtbycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb3VudGVyLWRlbW8uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb3VudGVyLWRlbW8uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb3VudGVyRGVtb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY291bnRlcjpudW1iZXIgPSAwO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gIH1cbiAgb25QbHVzQnRuQ2xpY2soKSB7XG4gICAgdGhpcy5jb3VudGVyID0gdGhpcy5jb3VudGVyICsgMTtcbiAgICB9XG4gICAgb25NaW51c0J0bkNsaWNrKCkge1xuICAgICAgdGhpcy5jb3VudGVyID0gdGhpcy5jb3VudGVyIC0gMTtcbiAgICB9XG5cbn1cbiIsIjxidXR0b24gKGNsaWNrKT1cIm9uUGx1c0J0bkNsaWNrKClcIj4gKyA8L2J1dHRvbj5cbjxsYWJlbD4ge3tjb3VudGVyfX0gPC9sYWJlbD5cbjxidXR0b24gKGNsaWNrKT1cIm9uTWludXNCdG5DbGljaygpXCI+4oCKLeKAijwvYnV0dG9uPlxuIl19